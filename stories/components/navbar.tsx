import { h } from "preact";
import { storiesOf } from "@storybook/react";

import Navbar from "../../src/components/Navbar";

storiesOf("Navbar", module).add("Simple", () => (
  <Navbar navbarBrand={<div>Preact Bulma</div>}>
    <a href="#">Home</a>
  </Navbar>
));
