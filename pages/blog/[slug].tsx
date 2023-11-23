import { useEffect } from "react";
import { articlePageAppear } from "../../src/js/animation/articlePageAppear";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import Page from "../../components/Page";
const dracula = {
  hljs: {
    display: "block",
    overflowX: "auto",
    padding: "0.5em",
    background: "#282a36",
    color: "#f8f8f2",
  },
  "hljs-keyword": {
    color: "#8be9fd",
    fontWeight: "bold",
  },
  "hljs-selector-tag": {
    color: "#8be9fd",
    fontWeight: "bold",
  },
  "hljs-literal": {
    color: "#8be9fd",
    fontWeight: "bold",
  },
  "hljs-section": {
    color: "#8be9fd",
    fontWeight: "bold",
  },
  "hljs-link": {
    color: "#8be9fd",
  },
  "hljs-function .hljs-keyword": {
    color: "#ff79c6",
  },
  "hljs-subst": {
    color: "#f8f8f2",
  },
  "hljs-string": {
    color: "#f1fa8c",
  },
  "hljs-title": {
    color: "#f1fa8c",
    fontWeight: "bold",
  },
  "hljs-name": {
    color: "#f1fa8c",
    fontWeight: "bold",
  },
  "hljs-type": {
    color: "#f1fa8c",
    fontWeight: "bold",
  },
  "hljs-attribute": {
    color: "#f1fa8c",
  },
  "hljs-symbol": {
    color: "#f1fa8c",
  },
  "hljs-bullet": {
    color: "#f1fa8c",
  },
  "hljs-addition": {
    color: "#f1fa8c",
  },
  "hljs-variable": {
    color: "#f1fa8c",
  },
  "hljs-template-tag": {
    color: "#f1fa8c",
  },
  "hljs-template-variable": {
    color: "#f1fa8c",
  },
  "hljs-comment": {
    color: "#6272a4",
  },
  "hljs-quote": {
    color: "#6272a4",
  },
  "hljs-deletion": {
    color: "#6272a4",
  },
  "hljs-meta": {
    color: "#6272a4",
  },
  "hljs-doctag": {
    fontWeight: "bold",
  },
  "hljs-strong": {
    fontWeight: "bold",
  },
  "hljs-emphasis": {
    fontStyle: "italic",
  },
};

let client = require("contentful").createClient({
  space: "qvbhdsetf6gx",
  accessToken: "E3_YCaH3rnbgi1ylxjTs6JP5KaviVJFgWtEwOJ8oCBk",
});

export async function getStaticPaths() {
  let data = await client
    .getEntries({
      content_type: "blog",
      select: "fields.slug",
    })
    .catch(() => {});

  var paths = [];
  if (data) {
    paths = data.items.map((article) => {
      return { params: { slug: article.fields.slug } };
    });
  }

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  let data = await client
    .getEntries({
      content_type: "blog",
      "fields.slug": params.slug,
    })
    .catch(() => {});

  var article = data.total === 1 ? data.items[0] : null;

  return {
    props: {
      article,
    },
    revalidate: 1,
  };
}

export default function PageArticle({
  article,
  handleTransition,
  transitionOver,
}) {
  useEffect(() => {
    if (transitionOver) articlePageAppear();
  }, [transitionOver]);

  return (
    <Page handleTransition={handleTransition} transitionOver={transitionOver}>
      {article && <PageArticleContent article={article} />}
    </Page>
  );
}

function PageArticleContent({ article }) {
  const date = new Date(article.fields.date);
  return (
    <div className="articlePage">
      <div className="articlePage__image">
        <img
          src={`https:${article.fields.thumnail.fields.file.url}`}
          alt=""
          className="articlePage__image__img"
        />
      </div>
      <div className="articlePage__date">Posted {date.toDateString()}</div>
      <div className="articlePage__content">
        {documentToReactComponents(article.fields.article, {
          renderMark: {
            [MARKS.CODE]: (text) => {
              var spl = (text as string).split("\\n");
              text = "";
              spl.forEach((t, i) => {
                text += t;
                if (i < spl.length - 1) text += "\n";
              });
              return (
                <SyntaxHighlighter
                  language="javascript"
                  showLineNumbers={true}
                  wrapLines={false}
                  wrapLongLines={"white-space: pre-wrap"}
                  style={dracula}
                >
                  {`${text}`}
                </SyntaxHighlighter>
              );
            },
          },
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
              <img src={"https:" + node.data.target.fields.file.url} />
            ),
          },
        })}
        <div className="about__line articlePage__decoLine"></div>
        <img
          src="/image/textDecoration.svg"
          alt=""
          className="about__textDecoration"
        />
      </div>
    </div>
  );
}
