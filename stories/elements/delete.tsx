import { action } from "@storybook/addon-actions";
import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";
import Delete from "../../src/elements/delete";

const SIZES = {
  Small: "small",
  Normal: "",
  Medium: "medium",
  Large: "large"
};

storiesOf("Elements", module)
  .addDecorator(withKnobs)
  .add("Delete button", () => <Delete onClick={action("click")} size={select("Size", SIZES, "")} />);
