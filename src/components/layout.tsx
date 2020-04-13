import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

import "../styles/global.scss"

const shortcodes = { Link }

export default ({ children }: any) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
)
