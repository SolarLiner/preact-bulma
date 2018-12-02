import { action, storiesOf } from "@storybook/react";
import { h } from "preact";

import { Control, Field, HorizontalGroup, Select, SingleInput, TextArea, TextInput } from "../../src/forms";

storiesOf("Forms/Input", module)
  .addDecorator(story => <form onSubmit={ev => ev.preventDefault()}>{story()}</form>)
  .add("Simple", () => (
    <SingleInput
      label="Name"
      placeholder="John Doe"
      help="Enter your name here."
      onBlur={action("onBlur")}
      onFocus={action("onFocus")}
      onInput={action("onInput")}
      iconsLeft="fas fa-user"
    />
  ))
  .add("Colors / Loading / Rounded", () => (
    <div>
      <SingleInput label="Default Input" />
      <SingleInput label="Primary input" color="primary" loading placeholder="Am loading..." />
      <SingleInput label="Info input" color="info" rounded placeholder="Am rounded!" />
      <SingleInput label="Warning input" color="warning" loading placeholder="Am loading..." />
      <SingleInput label="Danger input" color="danger" />
    </div>
  ))
  .add("Types", () => (
    <div>
      <SingleInput label="Default" />
      <SingleInput label="Email" type="email" />
      <SingleInput label="Password" type="password" />
      <SingleInput label="Telephone" type="tel" />
    </div>
  ))
  .add("States", () => (
    <div>
      <SingleInput label="Disabled" disabled />
      <SingleInput label="Read-only" disabled readonly />
    </div>
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
