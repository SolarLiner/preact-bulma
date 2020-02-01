import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import { Control, Field, Checkbox } from "../../src/forms";

storiesOf("Forms", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <form onSubmit={ev => ev.preventDefault()}>{story()}</form>)
  .add("Checkbox", () => (
    <Field label={text("label", "Field Label")} help={text("help", "Field help text")}>
      <Control loading={boolean("loading", false)}>
        <Checkbox
          disabled={boolean("disabled", false)}
          onChanged={action("onChanged")}
          onFocus={action("onFocus")}
          onBlur={action("onBlur")}
          checked={boolean("checked", true)}
        >
          {text("children", "Checkbox children")}
        </Checkbox>
      </Control>
    </Field>
  ));
