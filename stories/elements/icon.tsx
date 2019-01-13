import { select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Icon from "../../src/elements/icon";

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
  .add("Icon", () => (
    <Icon icon={text("Icon", "fas fa-user")} size={select("Size", SIZES, "")} color={select("Color", COLORS, "")} />
  ));
