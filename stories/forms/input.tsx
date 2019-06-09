import { action } from "@storybook/addon-actions";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import { Control, Field, TextInput } from "../../src/forms";
import { DropdownDivider } from "../../src/components/Dropdown/Dropdown";

const COLORS = {
  None: "",
  Primary: "is-primary",
  Light: "is-light",
  Dark: "is-dark",
  Info: "is-info",
  Warning: "is-warning",
  Danger: "is-danger"
};

const INPUT_TYPES = ["text", "email", "tel", "password"];

storiesOf("Forms/Input", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <form onSubmit={ev => ev.preventDefault()}>{story()}</form>)
  .add("Input", () => (
    <Field label="Name" help={text("Help", "Enter your username")}>
      <Control
        iconsLeft={text("Icons left", "fas fa-user")}
        iconsRight={text("Icons right", "")}
        loading={boolean("Loading", false)}
      >
        <TextInput
          placeholder="John Doe"
          rounded={boolean("Rounded", false)}
          color={select("Color", COLORS, "None")}
          type={select("Type", INPUT_TYPES, "text")}
          disabled={boolean("Disabled", false)}
          static={boolean("Static", false)}
          readOnly={boolean("Read only", false)}
          onInput={action("input")}
          onFocus={action("focus")}
          onBlur={action("blur")}
        />
      </Control>
    </Field>
  ))
  .add("Addons", () => (
    <div className="container">
      <p className="content">
        Note that fields with addons <b>don't support extra arguments</b>.
      </p>
      <Field hasAddons>
        <Control>
          <a class="button is-static">$</a>
        </Control>
        <Control>
          <TextInput
            placeholder="5.00"
            onInput={action("input[input]")}
            onFocus={action("focus[input]")}
            onBlur={action("blur[input]")}
          />
        </Control>
        <Control>
          <a class="button is-primary" onClick={action("click[Donate !]")}>
            Donate !
          </a>
        </Control>
      </Field>
    </div>
  ));
