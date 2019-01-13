import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Tag, { Tags } from "../../src/elements/tag";

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
  .add("Tag", () => (
    <Tags hasAddons={boolean("Has addons")} size={select("Size", SIZES, "")}>
      <Tag
        color={select("Color", COLORS, "")}
        rounded={boolean("Rounded")}
        canClose={boolean("Can close")}
        onClose={action("close")}
      >
        Preact Bulma
      </Tag>
      <Tag rounded={boolean("Rounded")}>⚛️</Tag>
    </Tags>
  ));
