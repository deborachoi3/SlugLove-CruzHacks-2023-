/** @jsx jsx */
import { jsx } from "theme-ui"
import { withPrefix } from "gatsby"
import { hidden } from "@lekoarts/gatsby-theme-cara/src/styles/utils"

const viewBox = {
  triangle: `0 0 30 30`,
  circle: `0 0 30 30`,
  arrowUp: `0 0 30 42`,
  upDown: `0 0 30 44.58`,
  box: `0 0 30 30`,
  hexa: `0 0 30 30`,
  cross: `0 0 100 100`,
  heart: `0 0 24 24`,
}

const Svg = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={viewBox[icon]}
  >
    <use href={withPrefix(`/icons.svg#${icon}`)} />
  </svg>
)

export default Svg
