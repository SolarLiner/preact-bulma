import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import { Subtitle, Title } from "../../src/elements/title";

storiesOf("Elements", module)
  .addDecorator(withKnobs)
  .add("Title/Subtitle", () => (
    <div class="columns is-centered">
      <div class="column is-8">
        <Title el="h1" size={select("Title size", [1, 2, 3, 4, 5, 6], 1)} spaced={boolean("Spaced")}>
          I wish I knew what to put here
        </Title>
        <Subtitle el="h2" size={select("Subtitle size", [1, 2, 3, 4, 5, 6], 3)}>
          Really, it's hard coming up with placeholder text that isn't repetitive!
        </Subtitle>
      </div>
    </div>
  ));
