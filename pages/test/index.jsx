import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss'
import { useState, useEffect, useCallback } from 'react'
import { useSwipeable } from 'react-swipeable'
import { throttle, debounce } from 'lodash';

const SLIDE_COUNT = 7

export default function Home() {

  const [slide, setSlide] = useState(0);
  console.log(slide);


  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      console.log("User Swiped!", eventData)
      if (eventData.dir == 'Up') {
        setSlide((s) => {
          if (s < SLIDE_COUNT) {
            return s + 1
          }
          return s
        })
      }
      else if (eventData.dir == 'Down') {
        setSlide((s) => {
          if (s > 0) {
            return s - 1
          }
          return s
        })
      }
    }
  });

  const wheelFlip = (e) => {
    console.log("flip")
    if (e.nativeEvent.wheelDeltaY == -120) {
      setSlide((s) => {
        if (s < SLIDE_COUNT) {
          return s + 1
        }
        return s
      })
    }
    if (e.nativeEvent.wheelDeltaY == +120) {
      setSlide((s) => {
        if (s > 0) {
          return s - 1
        }
        return s
      })
    }
  }

  const throttled = useCallback(debounce((e) => { wheelFlip(e) }, 500), [slide]);


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main {...handlers} className={styles.home} onWheel={(e) => { console.log("wheel"); throttled(e) }}>
        {/* <GridCon /> */}
        {< Hero />}
        {< Sec1 slide={slide} pos={1} />}
        {<Sec2 slide={slide} pos={2} />}
        {<Sec3 slide={slide} pos={3} />}
        {<Sec4 slide={slide} pos={4} />}
        {<Sec5 slide={slide} pos={5} />}
        {<Sec6 slide={slide} pos={6} />}
        {<Sec7 slide={slide} pos={7} />}
      </main>
    </>
  )

  function Hero() {
    return <section className={styles.hero}>
      <GridCon />
      <div className={styles.model3d}>
        <model-viewer
          alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
          src={"/3d.glb"}
          shadow-intensity="1"
          auto-rotate
          rotation-per-second={"450%"}
          camera-controls
          interaction-prompt={"none"}
          camera-orbit={"-0.04973251391208239rad 1.4782630487118047rad 6.3433248805926405m"}
        >
        </model-viewer>
      </div>
    </section>;
  }
}

function Sec1({ slide, pos }) {

  return <section className={styles[`sec${pos}`] + ' ' + ((slide >= pos) ? styles[`anim_sec${pos}`] : '')}>
    <GridCon />
    <span style={{ background: "#A2E200" }} className={styles.glow}>
    </span>
    <span className={styles.glowText}>
      <p>Total Tokens Held</p>
      <h1>126</h1>
      <img className={styles.one} src="/sec1/1.png" alt="" />
      <img className={styles.two} src="/sec1/2.png" alt="" />
      <img className={styles.three} src="/sec1/3.png" alt="" />
      <img className={styles.four} src="/sec1/4.png" alt="" />
      <img className={styles.five} src="/sec1/5.png" alt="" />
      <img className={styles.six} src="/sec1/6.png" alt="" />
    </span>
  </section>;
}

function Sec2({ slide, pos }) {
  return <section className={styles[`sec${pos}`] + ' ' + ((slide >= pos) ? styles[`anim_sec${pos}`] : '')}>
    <GridCon />
    <span style={{ background: "#DF914A" }} className={styles.glow}>
    </span>
    <span className={styles.glowText}>
      <p>Number of EVM chains used by you</p>
      <h1>007</h1>
      <img className={styles.one} src="/sec2/1.png" alt="" />
      <img className={styles.two} src="/sec2/2.png" alt="" />
      <img className={styles.three} src="/sec2/3.png" alt="" />
      <img className={styles.four} src="/sec2/4.png" alt="" />
    </span>

  </section>;
}





function Sec7({ slide, pos }) {
  return <section className={styles[`sec${pos}`] + ' ' + ((slide >= pos) ? styles[`anim_sec${pos}`] : '')}>
    <GridCon />
    <span style={{ background: "#CA7615" }} className={styles.glow}>

    </span>
    <span className={styles.glowText}>
      <p>Number of EVM chains used by you</p>
      <h1>123K</h1>
      <img className={styles.one} src="/sec7/1.png" alt="" />
      <img className={styles.two} src="/sec7/2.png" alt="" />
      <img className={styles.three} src="/sec7/3.png" alt="" />
      <img className={styles.four} src="/sec7/4.png" alt="" />
      <img className={styles.five} src="/sec7/5.png" alt="" />
      <img className={styles.six} src="/sec7/6.png" alt="" />
    </span>
  </section>;
}

function Sec6({ slide, pos }) {
  return <section className={styles[`sec${pos}`] + ' ' + ((slide >= pos) ? styles[`anim_sec${pos}`] : '')}>
    <GridCon />
    <span style={{ background: "#B81C1C" }} className={styles.glow}>

    </span>
    <span className={styles.glowText}>
      <p>Number of EVM chains used by you</p>
      <h1>123K</h1>
      <img className={styles.one} src="/sec6/1.png" alt="" />
      <img className={styles.two} src="/sec6/2.png" alt="" />
      <img className={styles.three} src="/sec6/3.png" alt="" />
      <img className={styles.four} src="/sec6/4.png" alt="" />
      <img className={styles.five} src="/sec6/5.png" alt="" />
      <img className={styles.six} src="/sec6/6.png" alt="" />
    </span>

  </section>;
}

function Sec5({ slide, pos }) {
  return <section className={styles[`sec${pos}`] + ' ' + ((slide >= pos) ? styles[`anim_sec${pos}`] : '')}>
    <GridCon />
    <span style={{ background: "#16C547" }} className={styles.glow}>

    </span>
    <span className={styles.glowText}>
      <p>Number of EVM chains used by you</p>
      <h1>123K</h1>
      <img className={styles.one} src="/sec5/1.png" alt="" />
      <img className={styles.two} src="/sec5/2.png" alt="" />
      <img className={styles.three} src="/sec5/3.png" alt="" />
      <img className={styles.four} src="/sec5/4.png" alt="" />
      <img className={styles.five} src="/sec5/5.png" alt="" />
    </span>
  </section>;
}

function Sec4({ slide, pos }) {
  return <section className={styles[`sec${pos}`] + ' ' + ((slide >= pos) ? styles[`anim_sec${pos}`] : '')}>
    <GridCon />
    <span style={{ background: "#FB6334" }} className={styles.glow}>

    </span>
    <span className={styles.glowText}>
      <p>Number of EVM chains used by you</p>
      <h1>123K</h1>
      <img className={styles.one} src="/sec4/1.png" alt="" />
      <img className={styles.two} src="/sec4/2.png" alt="" />
      <img className={styles.three} src="/sec4/3.png" alt="" />
      <img className={styles.four} src="/sec4/4.png" alt="" />
      <img className={styles.five} src="/sec4/5.png" alt="" />
    </span>

  </section>;
}

function Sec3({ slide, pos }) {
  return <section className={styles[`sec${pos}`] + ' ' + ((slide >= pos) ? styles[`anim_sec${pos}`] : '')}>
    <GridCon />
    <span style={{ background: "#2D2DFF" }} className={styles.glow}>

    </span>
    <span className={styles.glowText}>
      <p>Number of EVM chains used by you</p>
      <h1>007</h1>
      <img className={styles.one} src="/sec3/1.png" alt="" />
      <img className={styles.two} src="/sec3/2.png" alt="" />
      <img className={styles.three} src="/sec3/3.png" alt="" />
      <img className={styles.four} src="/sec3/4.png" alt="" />
      <img className={styles.five} src="/sec3/5.png" alt="" />
      <img className={styles.six} src="/sec3/6.png" alt="" />
    </span>
  </section>;
}




const GridCon = () => {
  const [count, setcount] = useState({ x: 6, y: 6 })
  const [gap, setgap] = useState({ x: {}, y: {} })
  useEffect(() => {
    updateGrid();
    document.body.onresize = function () {
      updateGrid();
    }
  }, [])

  const updateGrid = () => {
    //console.log("update")
    let width = window.innerWidth;
    let height = document.body.scrollHeight;

    setcount((c) => {
      c.x = Math.ceil(height / (width / (count.y + 1)));
      return { ...c }
    })

    setgap((g) => {
      g.y = { columnGap: `${(width / (count.y + 1))}px` }
      g.x = { rowGap: `${(width / (count.y + 1))}px` }
      return { ...g }
    })
    //debugger
  }
  return (
    <div className={styles.grid}>
      <div className={styles.yGridCon}
        style={gap.y}
      >
        {
          [...Array(count.y + 1)].map((x, id) => {
            if (id == 0) {
              return <span style={{ background: "transparent" }} key={'x' + id} className={styles.yGrid} ></span>
            }
            return (
              <span key={'y' + id} className={styles.yGrid} ></span>
            )
          })
        }

      </div>
      <div className={styles.xGridCon}
        style={gap.x}
      >
        {
          [...Array(count.x + 1)].map((y, id) => {
            if (id == 0) {
              return <span style={{ background: "transparent" }} key={'y' + id} className={styles.xGrid} ></span>
            }
            return (
              <span key={'y' + id} className={styles.xGrid} ></span>
            )
          })
        }

      </div>
    </div>
  )
}


