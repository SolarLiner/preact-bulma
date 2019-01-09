import { action, storiesOf } from "@storybook/preact";
import { h } from "preact";

import { Control, Field, TextInput } from "../../src/forms";
import { Input } from "../../src/forms/singles";

storiesOf("Forms/Input", module)
  .addDecorator(story => <form onSubmit={ev => ev.preventDefault()}>{story()}</form>)
  .add("Simple", () => (
    <Input
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
      <Input label="Default Input" />
      <Input label="Primary input" color="primary" loading placeholder="Am loading..." />
      <Input label="Info input" color="info" rounded placeholder="Am rounded!" />
      <Input label="Warning input" color="warning" loading placeholder="Am loading..." />
      <Input label="Danger input" color="danger" />
    </div>
  ))
  .add("Types", () => (
    <div>
      <Input label="Default" />
      <Input label="Email" type="email" />
      <Input label="Password" type="password" />
      <Input label="Telephone" type="tel" />
    </div>
  ))
  .add("States", () => (
    <div>
      <Input label="Disabled" value="Can't touch this" disabled />
      <Input label="Read-only" value="Can't touch this" disabled readOnly />
      <Input label="Static" value="Can touch this" static />
      <Input label="Static &amp; Read-only" value="Can't touch this" static readOnly />
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
