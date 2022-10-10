import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'body': {
    backgroundColor: '$gray1',
    color: '$white',
    fontFamily: '$body',
    fontSize: '$1',
    fontWeight: '$1',
    '-webkit-font-smoothing': 'antialiased',
  },
  'input, body, textarea, button': {
    fontFamily: '$body',
    fontSize: '$1',
    fontWeight: '$1',
    color: '$white',
  },
})