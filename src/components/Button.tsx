import React from "react"

const Button = (props: any) => {
  return (
    <a className="button" href={props.href}>
      {props.children}
    </a>
  )
}

export default Button
