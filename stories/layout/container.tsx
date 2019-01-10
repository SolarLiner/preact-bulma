import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import { Container } from "../../src/layout";

const BREAKS = {
  None: null,
  Mobile: "mobile",
  Tablet: "tablet",
  Desktop: "desktop"
};

storiesOf("Layout", module)
  .addDecorator(withKnobs)
  .add("Container", () => (
  <Container fluid={boolean("Fluid", false)} fullwidth={select("Full width", BREAKS, "None")}>
    <p class="notification content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sapiente accusantium ducimus sunt doloremque
      vero dolorum sint repellendus laborum illo animi enim, alias id. Quo illum fugiat omnis ullam cupiditate?
    </p>
  </Container>
));
