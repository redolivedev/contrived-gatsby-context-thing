/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useContext } from "react"
import CounterContext from "../shared/counter-context"

function Dallas() {
  const counter = useContext(CounterContext)

  return (
    <>
      <h3>Dallas</h3>
      <p>Dallas' count is equal to: {counter.currentCount}</p>
    </>
  )
}

export default Dallas
