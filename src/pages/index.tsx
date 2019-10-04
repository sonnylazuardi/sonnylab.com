import React, { useRef, useEffect } from "react"
import { Layout, Col, Row } from "antd"
import "../styles/global.scss"
import GitHubButton from "react-github-btn"
import { Helmet } from "react-helmet"

//@ts-ignore
import { FadeTransform, Fade, Stagger } from "react-animation-components"
//@ts-ignore
import { TwitterFollowButton } from "react-twitter-embed"

const { Content, Footer } = Layout

export default () => {
  const smCol = { span: 24, offset: 0 }
  const smCol2 = { span: 24, offset: 0 }
  const lgCol = { span: 8, offset: 4 }
  const lgCol2 = { span: 8, offset: 2 }
  const cursorEl = useRef(null)

  useEffect(() => {
    let mouse = { x: 0, y: 0 }

    if (cursorEl.current) {
      //@ts-ignore
      cursorEl.current.style.opacity = `0`
    }

    window.onmousemove = function(e: any) {
      mouse.x = e.clientX
      mouse.y = e.clientY

      if (cursorEl.current) {
        //@ts-ignore
        cursorEl.current.style.opacity = `1`
      }
    }
    ;(function animloop() {
      if (cursorEl.current) {
        //@ts-ignore
        cursorEl.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`
      }
      const hoveredEl = document.elementFromPoint(mouse.x, mouse.y)

      if (
        hoveredEl &&
        //@ts-ignore
        hoveredEl.dataset &&
        //@ts-ignore
        hoveredEl.dataset.hover === "true"
      ) {
        //@ts-ignore
        cursorEl.current.childNodes[0].style.transform = `scale(1)`
      } else {
        //@ts-ignore
        cursorEl.current.childNodes[0].style.transform = `scale(0.15)`
      }

      requestAnimationFrame(animloop)
    })()
  }, [])
  return (
    <Layout>
      <Helmet
        title={"Sonny Lazuardi"}
        meta={[
          {
            name: "description",
            content:
              "Sonny Lazuardi is a fullstack + ux engineer who merges technical skill with design and business",
          },
          {
            name: "keywords",
            content:
              "sonnylab, ux engineer, ux, design, code, website, application, app, apps, mobile apps, dribbble, engineer",
          },
        ]}
      >
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui"
        ></meta>
      </Helmet>
      <Content className="section-header">
        <div className="container">
          <Row gutter={16}>
            <Col xs={smCol} sm={smCol} md={lgCol} lg={lgCol} xl={lgCol}>
              <Stagger in>
                <FadeTransform
                  in
                  transformProps={{ enterTransform: "translateY(-20px)" }}
                >
                  <h3 data-hover="true">OH HI, IT’S ME</h3>
                </FadeTransform>

                <FadeTransform
                  in
                  transformProps={{ enterTransform: "translateY(-20px)" }}
                >
                  <h1>
                    <div data-hover="true" style={{ display: "inline-block" }}>
                      SONNY
                    </div>
                  </h1>
                </FadeTransform>
                <FadeTransform
                  in
                  transformProps={{ enterTransform: "translateY(-20px)" }}
                >
                  <h1>
                    <div data-hover="true">LAZUARDI</div>
                  </h1>
                </FadeTransform>
                <FadeTransform
                  in
                  transformProps={{ enterTransform: "translateY(-20px)" }}
                >
                  <div>
                    <p>
                      I'm a creative, full stack + ux engineer.
                      <br /> I merge technical skills with design and business
                      knowledge to create innovative products that drive
                      business. Currently lead ux engineer based in Singapore.
                    </p>
                    <GitHubButton
                      href="https://github.com/sonnylazuardi"
                      data-color-scheme="no-preference: light; light: light; dark: dark;"
                      data-size="large"
                      data-show-count="true"
                      aria-label="Follow @sonnylazuardi on GitHub"
                    >
                      Follow @sonnylazuardi
                    </GitHubButton>
                    <TwitterFollowButton
                      screenName={"sonnylazuardi"}
                      options={{ size: "large" }}
                    />
                  </div>
                </FadeTransform>
              </Stagger>
            </Col>
            <Col xs={smCol2} sm={smCol2} md={lgCol2} lg={lgCol2} xl={lgCol2}>
              <div className="pic-wrapper">
                <Stagger in delay={600}>
                  <FadeTransform
                    in
                    transformProps={{ enterTransform: "translateY(-20px)" }}
                  >
                    <div className="shape" data-hover="true" />
                  </FadeTransform>
                  <FadeTransform
                    in
                    transformProps={{ enterTransform: "translateY(-20px)" }}
                  >
                    <div className="shape-bg" data-hover="true" />
                  </FadeTransform>
                </Stagger>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer className="footer">&copy; 2019 | Designed with ❤️ in Singapore</Footer>
      <div className="cursor" ref={cursorEl}>
        <div className="cursor-dot" />
      </div>
    </Layout>
  )
}
