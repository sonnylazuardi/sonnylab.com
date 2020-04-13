import React from "react"

const Twitter = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <blockquote className="twitter-tweet" data-theme="dark">
        <a href={props.tweet}>@sonnylazuardi</a>
      </blockquote>
    </div>
  )
}

export default Twitter
