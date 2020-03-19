import { boolean, select, text, withKnobs, array } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import { Control, Field, FileInput } from "../../src/forms";

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

storiesOf("Forms/File Input", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <form onSubmit={ev => ev.preventDefault()}>{story()}</form>)
  .add("Single", () => (
    <Field label={text("Field Label", "Field Label")} help={text("Field Help", "Field help text")}>
      <Control loading={boolean("Loading", false)}>
        <FileInput
          label={text("File Input Label", "File Input Label")}
          icon={text("Icon", "fas fa-upload")}
          filename={text("File Name", "Expenses.xlsx")}
          color={select("Color", COLORS, "None")}
          size={select("Size", SIZES, "Default")}
          multiple={boolean("Multiple", false)}
          disabled={boolean("Disabled", false)}
          onChange={action("onChange")}
        />
      </Control>
    </Field>
  ))
  .add("Multiple", () => (
    <Field label={text("Field Label", "Field Label")} help={text("Field Help", "Field help text")}>
      <Control loading={boolean("Loading", false)}>
        <FileInput
          label={text("File Input Label", "File Input Label")}
          icon={text("Icon", "fas fa-upload")}
          filenames={array("File names", ["A.xlsx", "B.pdf"])}
          color={select("Color", COLORS, "None")}
          size={select("Size", SIZES, "Default")}
          multiple={true}
          disabled={boolean("Disabled", false)}
          onChange={action("onChange")}
        />
      </Control>
    </Field>
  ));
