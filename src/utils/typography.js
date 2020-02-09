import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

fairyGateTheme.overrideThemeStyles = () => {
  return {
    "a": {
      boxShadow: `none`,
      textShadow: `none`,
      color: `rgba(98, 73, 237, 1)`,
      backgroundImage: `none`
    },
    "a:hover": {
      textDecoration: `underline`,
    },
    "blockquote": {
      borderColor: `rgba(98, 73, 237, 1)`
    }
  }
}

fairyGateTheme.googleFonts && delete fairyGateTheme.googleFonts

const typography = new Typography(fairyGateTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
