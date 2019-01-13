import { boolean, number, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Progress from "../../src/elements/progress";

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
  .add("Progress bar", () => {
    const value = number("Value", 10, { range: true, min: 0, max: 100, step: 1 });
    return (
      <Progress
        color={select("Color", COLORS, "")}
        size={select("Size", SIZES, "")}
        value={!boolean("Indeterminate") && value}
      />
    );
  });
