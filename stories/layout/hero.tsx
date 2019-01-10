import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Navbar from "../../src/components/Navbar";
import { Hero } from "../../src/layout";

const COLORS = {
  None: "",
  Primary: "primary",
  Light: "light",
  Dark: "dark",
  Info: "info",
  Warning: "warning",
  Danger: "danger"
};

storiesOf("Layout/Hero", module)
  .addDecorator(withKnobs)
  .add("Hero", () => (
    <Hero.Hero color={select("Color", COLORS, "None")} bold={boolean("Bold", false)} >
      <Hero.Body>
        <h1 class="title">Title</h1>
        <h3 class="subtitle">Subtitle</h3>
      </Hero.Body>
    </Hero.Hero>
  ))
  .add("Fully featured", () => (
    <Hero.Hero color={select("Color", COLORS, "Primary")} bold={boolean("Bold", true)}>
      <Hero.Header>
        <Navbar.Navbar>
          <Navbar.Brand>
            <a class="navbar-item">
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Menu side="end">
            <Navbar.MenuItem active>Home</Navbar.MenuItem>
            <Navbar.MenuItem>Examples</Navbar.MenuItem>
            <Navbar.MenuItem>Documentation</Navbar.MenuItem>
            <Navbar.MenuItem>
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github" />
                </span>
                <span>Download</span>
              </a>
            </Navbar.MenuItem>
          </Navbar.Menu>
        </Navbar.Navbar>
      </Hero.Header>
      <Hero.Body>
        <h1 class="title">Title</h1>
        <h2 class="subtitle">Subtitle</h2>
      </Hero.Body>
      <Hero.Footer>
        <nav class="tabs">
          <div class="container">
            <ul>
              <li class="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </Hero.Footer>
    </Hero.Hero>
  ));
