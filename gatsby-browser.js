import React from "react"
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import { CounterProvider } from "./src/shared/counter-context"

export const wrapRootElement = ({ element }) => (
  <CounterProvider>{element}</CounterProvider>
)
