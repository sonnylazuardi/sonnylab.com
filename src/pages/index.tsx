import React, { useRef, useEffect, useState } from "react"
import { Layout, Col, Row } from "antd"
import "../styles/global.scss"
import GitHubButton from "react-github-btn"
import { useStaticQuery, graphql } from "gatsby"
import { motion, SharedMagicMotion, AnimatePresence } from "framer-motion"
import { formatRelative } from "date-fns"

import ContentFrame from "../components/Content"

//@ts-ignore
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

  const lgColX = { span: 16, offset: 4 }
  const cursorEl = useRef(null)
  const [index, setIndex] = useState(false)

  const data = useStaticQuery(graphql`
    query pagesQuery {
      allMdx {
        edges {
          node {
            id
            excerpt
            frontmatter {
              slug
              title
              date
              category
              image
            }
          }
        }
      }
    }
  `)

  const items = data.allMdx.edges.sort(
    (a: any, b: any) =>
      new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
  )

  const currentItem = index !== false ? items[index].node.frontmatter : null

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

      if (cursorEl.current) {
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
                      Sonny
                    </div>
                  </h1>
                </FadeTransform>
                <FadeTransform
                  in
                  transformProps={{ enterTransform: "translateY(-20px)" }}
                >
                  <h1>
                    <div data-hover="true">Lazuardi</div>
                  </h1>
                </FadeTransform>
                <FadeTransform
                  in
                  transformProps={{ enterTransform: "translateY(-20px)" }}
                >
                  <div>
                    <p className="caption">
                      I'm a creative, full stack + ux engineer.
                      <br /> I merge technical skills with design knowledge to
                      create innovative products that drive business. Currently
                      lead ux engineer based in Singapore.
                    </p>
                    <GitHubButton
                      href="https://github.com/sonnylazuardi"
                      data-color-scheme="no-preference: light; light: light; dark: dark;"
                      data-size="large"
                      //@ts-ignore
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
                    <div className="shape-2" data-hover="true" />
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

          <div className="works">
            <Row gutter={16}>
              <Col xs={smCol} sm={smCol} md={lgColX} lg={lgColX} xl={lgColX}>
                <h3 className="section">MY WORKS</h3>

                <SharedMagicMotion
                  crossfade={true}
                  transition={{
                    stiffness: 200,
                    damping: 20,
                    mass: 1.7,
                    type: "spring",
                  }}
                >
                  <ul className="gallery-container">
                    {items.map((work: any, i: any) => {
                      const item = work.node.frontmatter
                      return (
                        <motion.li
                          data-hover="true"
                          className="gallery-item"
                          key={item.slug}
                          onClick={() => {
                            document.body.classList.add("no-scroll")
                            setIndex(i)
                          }}
                          sharedId={item.slug}
                        >
                          <motion.div
                            data-hover="true"
                            className="gallery-item-image"
                            key={item.slug}
                            sharedId={item.slug + "-image"}
                            style={{
                              backgroundImage: `url(${item.image})`,
                            }}
                          >
                            <motion.div
                              sharedId={item.slug + "-subtitle"}
                              className="work-category"
                              data-hover="true"
                            >
                              {item.category.toUpperCase()} •{" "}
                              {formatRelative(new Date(item.date), new Date())
                                .toUpperCase()
                                .replace(" AT 8:00 AM", "")}
                            </motion.div>
                            <motion.div
                              sharedId={item.slug + "-title"}
                              className="work-heading"
                              data-hover="true"
                            >
                              {item.title}
                            </motion.div>
                          </motion.div>
                        </motion.li>
                      )
                    })}
                  </ul>
                  <AnimatePresence>
                    {index !== false && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        exit={{ opacity: 0 }}
                        key="overlay"
                        className="overlay"
                      />
                    )}
                    {index !== false && (
                      <div className="single-image-container">
                        <motion.div
                          sharedId={currentItem && currentItem.slug}
                          className="single-image-wrap"
                        >
                          <motion.div
                            sharedId={
                              currentItem && currentItem.slug + "-image"
                            }
                            className="single-image"
                            style={{
                              backgroundImage: `url(${currentItem &&
                                currentItem.image})`,
                            }}
                          >
                            <motion.div
                              sharedId={
                                currentItem && currentItem.slug + "-subtitle"
                              }
                              className="work-category"
                            >
                              {currentItem &&
                                currentItem.category.toUpperCase()}{" "}
                              •{" "}
                              {formatRelative(
                                new Date(currentItem && currentItem.date),
                                new Date()
                              )
                                .toUpperCase()
                                .replace(" AT 8:00 AM", "")}
                            </motion.div>
                            <motion.div
                              sharedId={
                                currentItem && currentItem.slug + "-title"
                              }
                              className="work-zoom"
                            >
                              {currentItem && currentItem.title}
                            </motion.div>

                            <motion.div
                              className="close-btn"
                              data-hover="true"
                              style={{
                                backgroundImage: `url('closeicon.png')`,
                                backgroundSize: "contain",
                                // background: "yellow",
                              }}
                              onClick={() => {
                                setTimeout(() => {
                                  document.body.classList.remove("no-scroll")
                                }, 1220)

                                setIndex(false)
                              }}
                            ></motion.div>
                          </motion.div>
                          <div className="content">
                            <ContentFrame
                              src={currentItem && `/${currentItem.slug}`}
                            />
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </SharedMagicMotion>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
      <Footer className="footer">Designed with ❤️ in Singapore</Footer>
      {index === false ? (
        <div className="cursor" ref={cursorEl}>
          <div className="cursor-dot" />
        </div>
      ) : null}
    </Layout>
  )
}
