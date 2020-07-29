/* eslint-disable import/no-default-export */
/* eslint-disable prefer-destructuring */
/**
 * This is our custom theme where we define global styles taken from our corporate identitfy.
 * It should serve as a guideline for styling, but not all styles *have* to be taken from here.
 */
const breakpoints = ['640px', '768px', '1024px', '1280px']

// Aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

/**
 * Primary: Colors to use for actionable items, such as links, buttons etc.
 * Secondary: Colors to use for informational items, such as labels, text, etc.
 * Grey: Colors for items that are not that important
 */
const colors = {
  text: '#333',
  pageBackground: 'hsl(0, 0%, 100%)',
  white: 'hsl(0, 0%, 100%)',
  primary: {
    100: 'hsl(221, 100%, 97%)',
    200: 'hsl(223, 59%, 86%)',
    300: 'hsl(223, 44%, 71%)',
    400: 'hsl(223, 40%, 60%)',
    500: 'hsl(223, 36%, 50%)',
    600: 'hsl(223, 47%, 39%)',
    700: 'hsl(223, 60%, 29%)',
    800: 'hsl(223, 70%, 21%)',
    900: 'hsl(223, 79%, 13%)',
  },
  grey: {
    100: 'hsl(210, 17%, 98%)',
    200: 'hsl(207, 22%, 90%)',
    300: 'hsl(210, 24%, 87%)',
    400: 'hsl(208, 17%, 83%)',
    500: 'hsl(209, 24%, 74%)',
    600: 'hsl(215, 17%, 63%)',
    700: 'hsl(214, 11%, 49%)',
    800: 'hsl(215, 17%, 30%)',
    900: 'hsl(215, 23%, 16%)',
  },
  red: {
    100: 'hsl(360, 77%, 95%)',
    200: 'hsl(360, 79%, 81%)',
    300: 'hsl(360, 71%, 73%)',
    400: 'hsl(360, 70%, 64%)',
    500: 'hsl(360, 71%, 53%)',
    600: 'hsl(360, 65%, 45%)',
    700: 'hsl(360, 61%, 38%)',
    800: 'hsl(360, 63%, 31%)',
    900: 'hsl(360, 60%, 24%)',
  },
  yellow: {
    100: 'hsl(44, 100%, 98%)',
    200: 'hsl(44, 90%, 92%)',
    300: 'hsl(45, 86%, 86%)',
    400: 'hsl(44, 90%, 80%)',
    500: 'hsl(43, 87%, 67%)',
    600: 'hsl(44, 57%, 52%)',
    700: 'hsl(43, 59%, 42%)',
    800: 'hsl(43, 64%, 34%)',
    900: 'hsl(44, 66%, 22%)',
  },
  green: {
    100: 'hsl(142, 81%, 94%)',
    200: 'hsl(141, 67%, 80%)',
    300: 'hsl(145, 65%, 68%)',
    400: 'hsl(146, 57%, 65%)',
    500: 'hsl(145, 55%, 49%)',
    600: 'hsl(145, 55%, 41%)',
    700: 'hsl(145, 59%, 33%)',
    800: 'hsl(155, 63%, 26%)',
    900: 'hsl(156, 61%, 20%)',
  },
}

/**
 * Space is used for margin and padding scales.
 * It's recommended to use powers of two to ensure alignment across the entire project
 */
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const links = {
  bold: {
    fontWeight: 'bold',
  },
  nav: {
    fontWeight: 'normal',
    color: 'primary.900',
    textDecoration: 'none',
    px: 2,
    py: 3,
  },
  blogPost: {
    textDecoration: 'underline',
  },
}

const fonts = {
  body: 'system-ui, sans-serif',
  heading: 'system-ui, sans-serif',
  monospace: 'Menlo, monospace',
}

const styles = {
  body: {
    margin: 0,
  },
}

export default {
  name: 'Default',
  breakpoints,
  colors,
  fonts,
  space,
  links,
  styles,
}
