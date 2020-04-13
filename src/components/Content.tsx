import React, { useState, useRef } from "react"
import { createPortal } from "react-dom"
import { motion } from "framer-motion"
const Content = (props: { src: string }) => {
  const [height, setHeight] = useState(200)
  const [loaded, setLoaded] = useState(false)
  const frameRef = useRef(null)
  const mountNode =
    frameRef.current && frameRef.current.contentWindow.document.head
  return (
    <motion.div
      animate={{ opacity: loaded ? 1 : 0, height }}
      transition={{
        stiffness: 200,
        damping: 20,
        mass: 1.7,
        type: "spring",
      }}
      style={{ opacity: 0 }}
    >
      <iframe
        ref={frameRef}
        style={{
          width: "100%",
          height,
          overflow: "visible",
          padding: 32,
          background: "black",
        }}
        onLoad={() => {
          setTimeout(() => {
            const obj = frameRef.current
            setHeight(
              (obj && obj.contentWindow.document.body.scrollHeight + 120) || 200
            )
            setLoaded(true)
          }, 500)
          setTimeout(() => {
            const obj = frameRef.current
            setHeight(
              (obj && obj.contentWindow.document.body.scrollHeight + 120) || 200
            )
          }, 1200)
        }}
        src={props.src}
        width="100%"
        height={height}
        scrolling="no"
        frameBorder="0"
      >
        {mountNode &&
          createPortal(
            React.Children.only(
              <div
                dangerouslySetInnerHTML={{
                  __html: document.head.innerHTML,
                }}
              ></div>
            ),
            mountNode
          )}
      </iframe>
    </motion.div>
  )
}

export default Content
