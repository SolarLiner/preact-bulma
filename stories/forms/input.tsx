import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import { Control, Field, TextInput } from "../../src/forms";
import { Input } from "../../src/forms/singles";

const COLORS = {
  None: "",
  Primary: "is-primary",
  Light: "is-light",
  Dark: "is-dark",
  Info: "is-info",
  Warning: "is-warning",
  Danger: "is-danger"
};

const INPUT_TYPES = [
  "text",
  "email",
  "tel",
  "password"
];

storiesOf("Forms/Input", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <form onSubmit={ev => ev.preventDefault()}>{story()}</form>)
  .add("Input", () => (
    <Input
      label="Name"
      placeholder="John Doe"
      help={text("Help", "Enter your username")}
      iconsLeft={text("Icons left", "fas fa-user")}
      iconsRight={text("Icons right", "")}
      loading={boolean("Loading", false)}
      rounded={boolean("Rounded", false)}
      color={select("Color", COLORS, "None")}
      type={select("Type", INPUT_TYPES, "text")}
      disabled={boolean("Disabled", false)}
      static={boolean("Static", false)}
      readOnly={boolean("Read only", false)}
    />
  ))
  .add("Addons", () => (
    <Field hasAddons group="center" label="Donation amount" help="Any amount is appreciated! :)">
      <Control>
        <a class="button is-static">$</a>
      </Control>
      <Control>
        <TextInput placeholder="5.00" />
      </Control>
      <Control>
        <a class="button is-primary">Donate !</a>
      </Control>
    </Field>
  ));
