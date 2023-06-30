/** @type {import('tailwindcss').Config} */
const colors = require('./static/styles/colors')

const rem = 16

const pxToRem = px => Math.round((px / rem) * 100) / 100 + 'rem'
const times = n => Array.from({ length: n }, (_, i) => i + 1)

const spacing = times(300).reduce((acc, spacing) => {
  acc[spacing] = pxToRem(spacing)
  return acc
}, {})

const borderRadius = times(30).reduce((acc, borderRadius) => {
  acc[borderRadius] = pxToRem(borderRadius)
  return acc
}, {})

const fontSize = times(35).reduce((acc, fontSize) => {
  acc[fontSize] = pxToRem(fontSize)
  return acc
}, {})

const lineHeight = times(40).reduce((acc, lineHeight) => {
  acc[lineHeight] = pxToRem(lineHeight)
  return acc
}, {})

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    extend: {
      boxShadow: {
        'basic-1': '0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 5px 8px rgba(0, 0, 0, 0.08)',
        'basic-2': '0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 25px 20px 0px rgba(0, 0, 0, 0.12)',
        'interactive-1': '0px 4px 4px rgba(0, 0, 0, 0.08)',
        'interactive-2': '0px 20px 12px 0px rgba(0, 0, 0, 0.12)'
      },
      flex: {
        0.25: 0.25,
        0.3: 0.3,
        0.7: 0.7,
        0.75: 0.75,
        1: '1 1 0%',
        1.2: '1 2 1',
        2: '2 2 0%',
        2.1: '2 1 0%',
        3: '3 2 0%',
        auto: '1 1 auto',
        none: 'none'
      },
      colors,
      fontFamily: {
        abc: ['ABC Social', 'sans-serif'],
        stk: ['STK Bureau', 'sans-serif']
      },
      fontSize: {
        ...fontSize,
        24: pxToRem(24),
        28: pxToRem(28),
        30: pxToRem(30),
        36: pxToRem(36),
        40: pxToRem(40),
        80: pxToRem(80),
        90: pxToRem(90),
        100: pxToRem(100),
      },
      lineHeight: {
        ...lineHeight,
        none: '1',
        normal: '1.5',
        medium: '3',
      },
      backgroundPosition: theme => theme('positions'),
      objectPosition: theme => theme('positions'),
      positions: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top'
      },
      screens: {
        /* If you change this, check Breakpoint types and useWindowSize */
        'large-desktop': { max: '1800px' },
        desktop: { max: '1200px' },
        tablet: { max: '900px' },
        mobile: { max: '600px' }
      },
      spacing: {
        ...spacing,
        '1/2': '50%',
        'full-30': `calc(100% - ${pxToRem(30)})`,
        200: pxToRem(200),
        '25%': '25%',
        '50%': '50%',
        '75%': '75%',
        '100%': '100%'
      },
      borderRadius: {
        ...borderRadius,
        25: '25%',
        50: '50%'
      },
      ringWidth: {
        0: 0,
        DEFAULT: pxToRem(1),
        2: pxToRem(2)
      },
      ringOffsetWidth: {
        0: 0,
        DEFAULT: pxToRem(1),
        2: pxToRem(2)
      },
      divideWidth: {
        DEFAULT: pxToRem(1),
        0: pxToRem(0),
        2: pxToRem(2),
        3: pxToRem(3),
        4: pxToRem(4),
        6: pxToRem(6),
        8: pxToRem(8)
      },
      backgroundImage: {
        'main-chair': 'url("/images/main-chair.jpg")',
        'main': 'url("/images/main.png")',
        'main-footer': 'url("/images/main-footer.jpg")'
      },
      maxWidth: {
        ...spacing,
        320: pxToRem(320),
        325: pxToRem(325),
        360: pxToRem(360),
        362: pxToRem(362),
        384: pxToRem(384),
        400: pxToRem(400),
        450: pxToRem(450),
        480: pxToRem(480),
        488: pxToRem(488),
        492: pxToRem(492),
        544: pxToRem(544),
        600: pxToRem(600),
        800: pxToRem(800),
        880: pxToRem(880),
        900: pxToRem(900),
        1200: pxToRem(1200),
        1400: pxToRem(1400),
        '25%': '25%',
        '50%': '50%',
        '60%': '60%',
        '75%': '75%',
        '100%': '100%',
        screen: '100vw',
        fit: 'fit-content'
      },
      minWidth: {
        ...spacing,
        262: pxToRem(262),
        320: pxToRem(320),
        screen: '100vw'
      },
      maxHeight: {
        ...spacing,
        234: pxToRem(234),
        300: pxToRem(300),
        350: pxToRem(350),
        400: pxToRem(400),
        474: pxToRem(474),
        800: pxToRem(800),
        auto: 'auto',
        screen: '100vh',
        fit: 'fit-content'
      },
      minHeight: {
        ...spacing,
        500: pxToRem(500),
        screen: '100vh'
      },
      width: {
        110: pxToRem(110),
        160: pxToRem(160),
        188: pxToRem(188),
        225: pxToRem(225),
        240: pxToRem(240),
        250: pxToRem(250),
        255: pxToRem(255),
        262: pxToRem(262),
        285: pxToRem(258),
        340: pxToRem(340),
        350: pxToRem(350),
        360: pxToRem(360),
        362: pxToRem(362),
        370: pxToRem(370),
        382: pxToRem(382),
        400: pxToRem(400),
        410: pxToRem(410),
        420: pxToRem(420),
        440: pxToRem(440),
        450: pxToRem(450),
        475: pxToRem(475),
        500: pxToRem(500),
        560: pxToRem(560),
        599: pxToRem(599),
        600: pxToRem(600),
        800: pxToRem(800),
        851: pxToRem(851),
        2800: pxToRem(2800),
        '1/7': '14.2857143%',
        '45%': '45%',
        '55%': '55%',
        '75%': '75%',
        '100%': '100%',
        'layout-drawer-sm': `calc(100% - ${pxToRem(362)})`,
        'layout-drawer-md': `calc(100% - ${pxToRem(450)})`,
        inherit: 'inherit',
        auto: 'auto',
        fit: 'fit-content',
        screen: '100vw'
      },
      marginTop:{
        350: pxToRem(350),
      },
      height: {
        110: pxToRem(110),
        120: pxToRem(120),
        180: pxToRem(180),
        200: pxToRem(200),
        240: pxToRem(240),
        250: pxToRem(244),
        300: pxToRem(300),
        302: pxToRem(302),
        314: pxToRem(314),
        320: pxToRem(320),
        350: pxToRem(350),
        362: pxToRem(362),
        400: pxToRem(400),
        475: pxToRem(475),
        500: pxToRem(500),
        710: pxToRem(710),
        '25%': '25%',
        '30%': '30%',
        '33%': '33.333%',
        '50%': '50%',
        '66%': '66.666%',
        '75%': '75%',
        full: '100%',
        inherit: 'inherit',
        auto: 'auto',
        fit: 'fit-content',
        screen: '100vh'
      },
      transitionProperty: {
        'border-style': 'border-style'
      },
      rotate: {
        360: '360deg'
      },
      cursor: {
        grab: 'grab',
        'ew-resize': 'ew-resize',
        'col-resize': 'col-resize',
        grabbing: 'grabbing'
      }
    }
  }
}
