import { makeTheme, toMakeTheme, createMakeTheme } from 'bootstrap-styled'

// Custom theme variables
const customTheme = {
    // custom
    '$body-bg': '#54DCDC'
}

// Final theme variables for app
const makeAppTheme = createMakeTheme([
    makeTheme,
    toMakeTheme(customTheme)
])
export const appTheme = makeAppTheme({})

export default makeAppTheme