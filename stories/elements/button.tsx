import { action } from "@storybook/addon-actions";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Button, { Buttons } from "../../src/elements/button";

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
  Small: "small",
  Normal: "",
  Medium: "medium",
  Large: "large"
};

storiesOf("Elements", module)
  .addDecorator(withKnobs)

  .add("Button", () => (
    <Button
      color={select("Color", COLORS)}
      size={select("Size", SIZES, "Normal")}
      fullWidth={boolean("Full width")}
      outlined={boolean("Outlined")}
      inverted={boolean("Inverted")}
      rounded={boolean("Rounded")}
      loading={boolean("Loading")}
      static={boolean("Static")}
      disabled={boolean("Disabled")}
      icon={text("Icon class", "fas fa-globe")}
      onClick={action("click")}
    >
      {text("Content", "Hello Internet 🌍")}
    </Button>
  ))
  .add("Submit button", () => (
    <form>
      <Button
        type="submit"
        color={select("Color", COLORS, "primary")}
        size={select("Size", SIZES, "")}
        fullWidth={boolean("Full width")}
        outlined={boolean("Outlined")}
        inverted={boolean("Inverted")}
        rounded={boolean("Rounded")}
        loading={boolean("Loading")}
        static={boolean("Static")}
        disabled={boolean("Disabled")}
        onClick={action("click")}
      >
        {text("Content", "Submit")}
      </Button>
    </form>
  ))
  .add("List of buttons", () => (
    <Buttons size={select("Size", SIZES, "Normal")} hasAddons={boolean("Addons")}>
      <Button>Hello</Button>
      <Button color="link" selected>
        Internet
      </Button>
      <Button>🌍🌏</Button>
    </Buttons>
  ));
