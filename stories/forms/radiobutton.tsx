import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import { Control, Field, RadioButton } from "../../src/forms";

storiesOf("Forms", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <form onSubmit={ev => ev.preventDefault()}>{story()}</form>)
  .add("Radio Button", () => (
    <Field label={text("label", "Field Label")} help={text("help", "Field help text")}>
      <Control>
        <RadioButton
          name={text("Name", "MyRadio")}
          disabled={boolean("disabled", false)}
          checked={boolean("Checked", false)}
          onChange={action("onChange")}
        >
          {text("children", "Radio Button children")}
        </RadioButton>
      </Control>
    </Field>
  ));
