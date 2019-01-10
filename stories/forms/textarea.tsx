import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import { Control, Field, Textarea } from "../../src/forms";
import { Textarea as SingleTextarea } from "../../src/forms/singles";

const COLORS = {
  None: "",
  Primary: "primary",
  Light: "light",
  Dark: "dark",
  Info: "info",
  Warning: "warning",
  Danger: "danger"
};

const SIZES = {
  Default: null,
  Small: "small",
  Medium: "medium",
  Large: "large"
};

storiesOf("Forms", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <form onSubmit={ev => ev.preventDefault()}>{story()}</form>)
  .add("Textarea", () => (
    <SingleTextarea
      label="Textarea"
      placeholder="Lorem ipsum etc."
      color={select("Color", COLORS, "None")}
      size={select("Size", SIZES, "Default")}
      loading={boolean("Loading", false)}
      disabled={boolean("Disabled", false)}
      readOnly={boolean("Read-only", false)}
      static={boolean("Static", false)}
      fixed={boolean("Fixed", false)}
    />
  ));
