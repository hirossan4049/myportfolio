// import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {useEffect, useState} from "react";
import {Transition} from 'react-transition-group'

export default function Home() {
    // const options = {
    //     "cursorOuter": "circle-basic",
    //     "hoverEffect": "circle-move",
    //     "hoverItemMove": false,
    //     "defaultCursor": false,
    //     "outerWidth": 30,
    //     "outerHeight": 30
    // };
    // magicMouse(options);

    // const [inProp, setInProp] = useState(false)
    const transitionStyles = {
        // background: 'none', 
        entering: {width: "120%", height: "120%", transition: 'all 1s ease'},
        entered: {},
        exiting: {width: "60%", height: "80%", transition: 'all 1s ease'},
        exited: {width: "60%", height: "80%"},
    }

    const [scrollY, setScrollY] = useState(0)

    const handleScroll = () => {
        setScrollY(window.scrollY)
        // console.log(window.scrollY)

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={styles.container}>

            <div className={styles.menuContainer}>
                <a className={styles.menuItem}>Profile</a>
                <a className={styles.menuItem}>Experience</a>
                <a className={styles.menuItem}>Product</a>
                <a className={styles.menuItem}>Contact</a>
            </div>

            {/* {scrollY >= 350 &&
            <Transition in={scrollY >= 360} timeout={1500}> */}
                {/* {(state) => ( */}
                    {/* <div className={styles.profileBackView} style={transitionStyles[state]}> */}
                    <div className={styles.profileBackView} style={transitionStyles.entering}>
                        <Image alt={""} className={styles.profileImage} src={"/profile.jpeg"} width={300} height={300}/>
                        <div className={styles.codeblockBox}>
                            <div className={styles.code}>
                                <span className={styles.let}>let</span> <span
                                className={styles.name}>name</span> = <span
                                className={styles.string}>"Hirose Haruto"</span> <br/>
                                <span className={styles.let}>let</span> <span
                                className={styles.name}>nickname</span> = <span
                                className={styles.string}>"hirossan4049"</span> <br/>
                                <br/>
                                <span className={styles.let}>let</span> <span
                                className={styles.name}>school</span> = <span
                                className={styles.string}>"N High School"</span><br/>
                                <span className={styles.let}>let</span> <span
                                className={styles.name}>skill</span> = <span className={styles.let}>nil</span><br/>
                                <span className={styles.let}>let</span> <span className={styles.name}>loves</span> =
                                [<span className={styles.string}>"Swift"</span>, <span
                                className={styles.string}>"Python"</span>, <span
                                className={styles.string}>"Music"</span>]<br/>
                                <br/>
                                <span className={styles.let}>let</span> <span className={styles.name}>mail</span> =
                                nickname + <span className={styles.string}>"@"</span> + <span
                                className={styles.string}>"gmail.com"</span><br/>
                            </div>
                        </div>
                    </div>
                {/* )} */}
            {/* </Transition>
            } */}

            {/* {scrollY >= 400
                ? <></>
                : <main className={styles.hiroseImage}>
                    <img alt={""} src="/hirose2.svg" width={15000} height={scrollY * 10 + 170}/>
                </main>
            } */}

            <div className={styles.blend}/>


        </div>
    )
}
