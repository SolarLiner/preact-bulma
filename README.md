# Preact Bulma ⚛

A collection of components to build interfaces with Bulma.

![](https://img.shields.io/github/license/solarliner/preact-bulma.svg)
![](https://img.shields.io/david/solarliner/preact-bulma.svg)
![](https://img.shields.io/david/dev/solarliner/preact-bulma.svg)
![](https://img.shields.io/david/peer/solarliner/preact-bulma.svg)
![](https://img.shields.io/bundlephobia/minzip/preact-bulma.svg)
![](https://img.shields.io/npm/v/preact-bulma.svg)

```bash
npm install preact-bulma
```

<sup>v1 but still in alpha! [Here's why](#but-why-1.0.0-when-its-still-in-alpha).</sup>

## Getting started

### 1. Install

`preact-bulma` has a peer dependency on Preact, which means you need to install it separately, but allows you to choose
the version. The project supports 8.2.x and up.

### 2. Add styling

The project doesn't import any styling by default - this is to let you have full control over the style. You can import
the full Bulma framework, or, using SASS/SCSS, only pull the parts that you want.

#### Full Bulma bundle (default theme, no customization, **easiest**)

```javascript
// Import Bulma CSS
import "bulma/css/bulma.min.css";
```

#### Custom styling (allows customization, **recommended**)

```javascript
// Import SCSS file
import "styles/app.scss";
```

```scss
@charset "utf-8";
// Import *all* of Bulma - refer to the customization guide for more info on customizing Bulma:
// https://bulma.io/documentation/customize/
@import "~bulma/bulma";
```

### 3. Use `preact-bulma`

You can now use the provided components into your project as you would with any component.

```javascript
import { Card } from "preact-bulma";
function MyCard() {
  <Card.Card>
    <Card.Header
      title="Physics breakthrough"
      icon="fas fa-exclamation-circle"
    />
    <Card.Content>
      No, really, literally. Black holes have been proven to break through
      spacetime. (get it?)
    </Card.Content>
    <Card.Footer>
      <Card.FooterItem>Share</Card.FooterItem>
    </Card.Footer>
  </Card.Card>
  ))
  .add("Card with image", () => (
  <Card.Card>
    <Card.Header title="Card with image" />
    <Card.Image
      class="is-4by3"
      src="https://source.unsplash.com/random/800x600"
      alt="Card image"
    />
    <Card.Content>Lorem ipsum...</Card.Content>
  </Card.Card>
}
```

## Links

- **Storybook with all components**: https://solarliner.github.io/preact-bulma
- **Wiki with usage notes**: https://github.com/solarliner/preact-bulma/wiki

## But why `1.0.0` when it's still alpha?

The `preact-bulma` package was being squatted before npm transfered the ownership to me. To their advice, I'm pushing a
major release to prevent problems and compatibility issues.
