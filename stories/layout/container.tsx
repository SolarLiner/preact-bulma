import { h } from "preact";
import { storiesOf } from "@storybook/react";
import { Container } from "../../src/layout";

storiesOf("Layout/Container", module)
  .add("Simple", () => (
    <Container>
      <p class="notification content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        sapiente accusantium ducimus sunt doloremque vero dolorum sint
        repellendus laborum illo animi enim, alias id. Quo illum fugiat omnis
        ullam cupiditate?
      </p>
    </Container>
  ))
  .add("Fluid", () => (
    <Container fluid>
      <p class="notification content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        nesciunt, dignissimos sed impedit similique blanditiis vitae! Deleniti
        assumenda numquam, velit animi similique, necessitatibus reprehenderit
        ratione fugiat maiores aliquam provident rerum?
      </p>
    </Container>
  ))
  .add("Full width breakpoints", () => (
    <Container fullwidth="tablet">
      <p class="notification content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        placeat debitis sequi ex corrupti quam non error consequatur magni
        accusantium facilis sapiente dignissimos, molestias fugit obcaecati
        quisquam dicta. Architecto, officia.
      </p>
    </Container>
  ));
