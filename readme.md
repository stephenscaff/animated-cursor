# Animated Cursor

A pure JS library to replace native cursor with a custom animated cursor.

[Check out the Demo](https://stephenscaff.github.io/animated-cursor/)


## Contents 

1. [đ Features](#-features)
2. [đ¯ Quickstart](#-quickstart)
3. [đ§Ŧ Options](#-options)
4. [đ¤ Commands](#-commands)
5. [đšī¸ Usage](#-usage)
6. [đ¨ Cursor Types](#-cursor-types)
7. [đ Notes](#-notes)
8. [đ To Dos](#-to-dos)

<br/>

## đ Features 
- Dependency free, pure JavaScript library.
- Replaces native Cursor with custom animated cursor.
- Cursor is comprised of inner dot and outer circle with trailing animation. Cursor elements inversely scale on click and hover.
- Options to customize color, sizes, scaling percentages.
- Performant cusor animation
- Cursor is just a dom element that you can further style (ie: add border to outer cursor)
- Hybrid NPM module, works with `import` and `require`

<br/>

### More the specifically, the cursor is made of
- An inner dot (`cursorInner`)
- An outer, outlining circle (`cursorOuter`), with slight opacity based on the inner cursor's color
- A slight trailing animation of the outer outline
- An inversely scaling effect between the inner and outer cursor parts on click or link hover
- Outer cursor can also be just a border to create a Donut style cursor.
- Outer cursor can have a blend-mode applied for an exlusion effect over hovered text / elements.

<br>

## đ¯ Quickstart

#### 1. Install from NPM

`npm i animated-cursor`

#### 2. Create Cursor Markup

```
<div id="cursor">
  <div id="cursor-outer"></div>
  <div id="cursor-inner"></div>
</div>
```

#### 3. Init Cursor

Import and initialize. Example is using defaults but accepts an options paramter (see below)
```
import AnimatedCursor from 'animated-cursor'

// Using just default options 
const ac = AnimatedCursor()

ac.init()
```

<br/>

## đ§Ŧ Options

`AnimatedCursor()` accepts a single options param, which supports the following properties:

| Option                    | Type              | Description                                                    | Default            |                 
| ------------------------- | ------------------| ---------------------------------------------------------------| ----------------- |
| `cursorInnerSelector`     | `String`          | Selector name of inner cursor element.                         | `#cursor-inner`   |
| `cursorOuterSelector`     | `String`          | Selector name of outer cursor element.                         | `#cursor-outer`   |
| `useRequiredStyles`       | `Boolean`         | If lib should add required styles to element.                  | `true`            |
| `hideNativeCursor`        | `Boolean`         | If native cursor should be hidden via internal method adding inline styles to `html` and `body`. | `true`            |
| `color`                   | `String`          | Hex value of desired color.                                    | `#D3245C`       |
| `outerAlpha`              | `Number`          | Alpha transparency level of outer cursor (0 - 1).              | `0.3`       |
| `outerBorderSize`         | `Number`          | Applies a border to the outer cursor.               | `0.3`    |
| `hasOuterBlendMode`       | `Boolean`         | Applies a blend-mode to the outer cursor                       | `0.3`    |
| `size`                    | `Object`          | Defines inner `size.inner` and Outer `size.outer` cursor sizes | `size: { inner: 8, outer: 40 }` |
| `hoverScale`              | `Object`          | Defines amounts inner/outer cursors scale on hover             | `hoverScale: { inner: 0.75, outer: 1.5 }` |
| `clickScale`              | `Object`          | Defines amounts inner/outer cursors scale on click             | `clickScale: { inner: 1.5, outer: 0.13 }` |
| `trailingSpeed`           | `Number`          | Speed of outer cursor's lerp'd trailing animation              | `0.2`           |
| `clickables`              | `Array`           | Array of clickable elements.                                   d| `['a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', 'label[for]', 'select', 'textarea', 'button', '.link']` |

<br>  

## đ¤ Project Commands

#### Install Project Deps

`npm i`

#### Build

`npm run build`

Builds `src` with `microbundle` to the various common js patterns.

#### Run Dev

`npm run dev`

Dev has microbundle begin watching / building the files, while also running the demo project via Parcel, which imports from the local src directory.

#### Run Demo

`npm run demo:start`

Runs the demo project via Parcel.

#### Lint

`npm run lint`

<br/>

## đšī¸ Usage 

### Cursor markup 

The cursor is created from 2 dom elements for the inner and outer parts. 

```
<div id="cursor">
  <div id="cursor-outer"></div>
  <div id="cursor-inner"></div>
</div>
```


You can use the default selector names (shown above), or pass your own via the options, `cursorInnerSelector` and `cursorOuterSelector`

```
const opts = {
  cursorInnerSelector: '#js-cursor-outer`
  cursorOuterSelector '#js-cursor-inner',
  ....
}
```

### Init Cursor 

```
import AnimatedCursor from 'animated-cursor'

// cursor options
let acOptions = {
  color: '#0ff',
  outerAlpha: 0.25,
  size: { 
    inner: 8, 
    outer: 38 
  },
  hoverScale: {
    inner: 0.5,
    outer: 1.4
  },
  clickScale: {
    inner: 1.4,
    outer: 0.1
  }
}

// Create Cursor instance
const cursor = AnimatedCursor(acOptions)

// Init Cursor
cursor.init()
```

### Use `require`

AnimatedCursor is a hybrid npm module, so it supports both `import` and `require`. 

So, you can also `require` to lib like so:

```
const AnimatedCursor = require('animated-cursor')

const cursor = AnimatedCursor(opts)
cursor.init()
```


## đ¨ Cursor Types

You can use the options to create various cursor types / styles. (At some point I might organize cursor types as presets.)
### Create a Donut Cursor 

The outerBorderSize option applies a border to the outer cursor. You can leverage this to create a Donut style cursor: 

1. Set `outerAlpha` to `0`s (or almost 0), 
2. Provide a numeric value for `outerBorderSize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         lkkklllklwhere the outer cursor is a ring, apply a border to the outer cursor and set the outerAlphd0 (or close to 0)

```
// Options to create a Donut cursor
let donutOpts = {
  color: '#0ff',
  outerAlpha: 0,
  outerBorderSize: 3
}
```

[Check out the Donut Cursor Demo](https://stephenscaff.github.io/animated-cursor/donut.html)

<br/>

### Create a Blend-mode Cursor 

You can create a neat Blend-mode cursor that filters the hovered text through the cursor. This probably works best with White / Black cursors.

1. Set `hasOuterBlendMode: true`, 
2. Set `outerAlpha` to `1` or close to `1`.
3. Probs use a cursor color like `#fff` or `#000`.  

Note, make sure your inner and outer cursor elements are wrapped inside a parent (as show in the examples) as the `parentElement` of outer cursor is targets for the `blend-mode` filter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     lkkklllklwhere the outer cursor is a ring, apply a border to the outer cursor and set the outerAlphd0 (or close to 0)

```
// Options to create a blend-mode cursor.
// Cursor is white, page background-color is dark.
 let blendOpts = {
    hasOuterBlendMode: true,
    color: '#fff',
    outerAlpha: 1
 }
```

[Check out the Blend-mode Cursor Demo](https://stephenscaff.github.io/animated-cursor/blend.html)

## đ Notes

### useRequiredStyles

For the cursors to work, some styles are require for positioning, radius, pointer-events, stating opacity, and transitions.
By default, AnimatedCursor adds these styles via JS, directly on the cursor elements. If you'd prefer, you can stop the lib from adding those inline styles in favor of css. 
Just set `useRequiredStyles: false` and provide your own css to the inner/outer cursor selectors.

This action would also allow you to modify the transition speed and easings of the cursors scaling (transform) animation.

```
#cursor-inner,
#cursor-outer {
  pointer-events: none;
  position: fixed;
  border-radius: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out; 
}
```
<br/>

###  hideNativeCursor

The `hideNativeCursor` option is a `bool` that determins if native cursor should be hidden by adding inline styles to the `html` and `body` tags.
Set to `false` if you want to maintain the native cursor, or if you'd rather hide the cursor with css.

<br/>

## đ To Dos

- ~~Provide ability to create Donut style cursor~~
- ~~Add a demo for Donut-style cursor~~
- ~~Make clickables an option.~~
- ~~Make hybrid npm module to support `import` and `require`~~.
- ~~Make hiding native cursor an option.~~.
- ~~Limit to non touch or non mobile devices.~~
- Provide a destory method
- Maybe make different cursor types available as presets?