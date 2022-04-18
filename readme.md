# Animated Cursor

A pure JS library to replace native cursor with a custom animated cursor.

## Features 
- Replaces native Cursor with custom cursor that animates
- Cursor is comprised of inner dot and outer circle that trails on move. Cursor elements inversely scale on click and hover.
- Options to control color, sizes, scaling percentages.
- Performant cusor animation
- Cursor is just a dom element that you can further style (ie: add border to outer cursor)
- Hybrid NPM module, works with `import` and `require`


## Cursor is comprised of 
- An inner dot (`cursorInner`)
- An outer, outlining circle (`cursorOuter`), with slight opacity based on the inner cursor's color
- A slight trailing animation of the outer outline
- An inversely scaling effect between the inner and outer cursor parts on click or link hover


<br>

## 🎯 Quickstart

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

```
import AnimatedCursor from 'animated-cursor'

// Using just default options
const ac = AnimatedCursor()

ac.init()
```

## 🧬 Options

`AnimatedCursor()` accepts a single options param, which supports the following properties:

| Option                    | Type              | Description                                                    | Default            |                 
| ------------------------- | ------------------| ---------------------------------------------------------------| ----------------- |
| `cursorInnerSelector`     | `String`          | Selector name of inner cursor element.                         | `#cursor-inner`   |
| `cursorOuterSelector`     | `String`          | Selector name of outer cursor element.                         | `#cursor-outer`   |
| `useRequiredStyles`       | `Boolean`         | If lib should add required styles to element.                  | `true`            |
| `size`                    | `Object`          | Defines inner `size.inner` and Outer `size.outer` cursor sizes | `size: { inner: 8, outer: 40 }` |
| `scale`                   | `Object`          | Defines scale amounts of inner/outer cursors `onHover` and `onClicking` | `scale: { onHover: { inner: 0.75, outer: 1.5 }, onClicking: { inner: 1.5, outer: 0.13 }}` |
| `trailingSpeed`         | `Number`          | Speed of outer cursor's lerp'd trailing animation               | `0.2`           |
| `color`                 | `String`          | Hex value of desired color.                                     | `#D3245C`       |
| `clickables`            | `Array`           | Array of clickable elements.                                    | `['a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', 'label[for]', 'select', 'textarea', 'button', '.link']` |

<br>  

## 🤖 Project Commands

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



