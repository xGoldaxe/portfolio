import { gsap } from 'gsap'

export default function skill() {
    const skills = document.querySelectorAll('.skill__text')
    createSkillListener(skills)

    var firstTl = gsap.timeline({});
    //first occurence
    skills.forEach((skill, i) => {
        //block animation
        if (i === 0) {
            firstTl.add(createTl(skill, i))

        } else {
            firstTl.add(createTl(skill, i), "-=0.4")
        }
        //move line
        if (i !== 3) {
            firstTl.add(moveLine(i), "-=0.1")
        }
    })

    var mainTl = gsap.timeline({
        repeat: -1,
        onUpdate: function () {
            if (!document.querySelector('.leftLine')) {
                this.kill()
            }
        },
    })
    firstTl.add(mainTl)
    skills.forEach((skill, i) => {
        //move line
        if (i === 0) {
            mainTl.add(moveLine(3), "-=0.1")
        }
        //block animation
        mainTl.add(createTl(skill, i), "-=0.4")
        //move line
        if (i !== 3) {
            mainTl.add(moveLine(i), "-=0.1")
        }
    })


    return firstTl
}


function createTl(skill, i) {
    var tl = gsap.timeline({ repeat: 1, repeatDelay: 2, yoyo: true });
    tl.addLabel('test', 0)
    tl.to(skill, {
        color: '#000000',
        duration: 0.6,
        ease: "power4.out"
    })
    tl.to(skill.querySelector('svg'), {
        y: -20,
        duration: 0.6,
        ease: "power4.out"
    }, 'test')
    tl.to(skill.querySelector('svg>path'), {
        color: 'black',
        duration: 0.6,
        fill: '#000000',
        ease: "power4.out"
    }, 'test')
    tl.to(skill.parentNode, {
        background: 'black',
        duration: 0.6,
        ease: "power4.out"
    }, 'test')
    //line
    return tl
}


function moveLine(i) {
    var tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    tl.fromTo('.skillLineAnime',
        {
            scaleX: 0,
        },
        {
            duration: i !== 3 ? 0.4 : 0.6,
            scaleX: 1,
            ease: "power4.out",
            onStart: function () {
                // @ts-ignore
                document.querySelector('.skillLineAnime--box').style.transform = `translateY(-50%) scale(1,1)`

                if (i !== 3) {
                    // @ts-ignore
                    document.querySelector('.skillLineAnime--box').style.left = `${33 * i + 0.5}%`
                    // @ts-ignore
                    document.querySelector('.skillLineAnime--box').style.width = `${33}%`
                    // @ts-ignore
                    document.querySelector('.skillLineAnime').style.transformOrigin = "center left"
                }
                else {
                    // @ts-ignore
                    document.querySelector('.skillLineAnime--box').style.left = '0'
                    // @ts-ignore
                    document.querySelector('.skillLineAnime--box').style.width = `100%`
                    // @ts-ignore
                    document.querySelector('.skillLineAnime').style.transformOrigin = "center right"
                }
            },
        })
    tl.fromTo('.skillLineAnime--box', {
        scaleX: 1,
    }, {
        scaleX: 0,
        ease: "power4.out",
        duration: i !== 3 ? 0.4 : 0.6,
        onStart: function () {
            if (i === 3) {
                    // @ts-ignore
                document.querySelector('.skillLineAnime--box').style.transformOrigin = "center left"
            } else {
                    // @ts-ignore
                document.querySelector('.skillLineAnime--box').style.transformOrigin = "center right"
            }
        }
    }, `-=${i !== 3 ? 0.2 : 0.4}`)
    return tl
}

function createSkillListener(skills) {
    skills.forEach(skill => {
        skill.addEventListener('mouseover', () => {
            gsap.to(skill, {
                color: '#000000',
                duration: 0.6,
                ease: "power4.out"
            })
            gsap.to(skill.querySelector('svg'), {
                y: -20,
                duration: 0.6,
                ease: "power4.out"
            })
            gsap.to(skill.querySelector('svg>path'), {
                color: 'black',
                duration: 0.6,
                fill: '#000000',
                ease: "power4.out"
            })
            gsap.to(skill.parentNode, {
                background: 'black',
                duration: 0.6,
                ease: "power4.out"
            })
        })
        skill.addEventListener('mouseout', () => {
            gsap.to(skill, {
                color: '#c1c1c1',
                duration: 1,
                ease: "power4.out"
            })
            gsap.to(skill.querySelector('svg'), {
                y: 0,
                duration: 1,
                fill: '#000000',
                ease: "power4.out"
            })
            gsap.to(skill.querySelector('svg>path'), {
                color: 'black',
                duration: 1,
                y: 0,
                fill: '#c1c1c1',
                ease: "power4.out"
            })
            gsap.to(skill.parentNode, {
                background: '#c1c1c1',
                duration: 1,
                ease: "power4.out"
            })
        })
    })
}
