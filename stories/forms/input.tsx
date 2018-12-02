import { action, storiesOf } from "@storybook/react";
import { h } from "preact";

import { SingleInput, TextInput, Control, Field } from "../../src/forms";

storiesOf("Forms/Input", module)
  .addDecorator(story => (
    <form onSubmit={ev => ev.preventDefault()}>
      {story()}
      <div class="field">
        <div class="control">
          <input type="submit" value="Submit" class="button is-link is-outlined" />
        </div>
      </div>
    </form>
  ))
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
  )).add("Colors", () => (
    <div>
      <SingleInput label="Default Input" />
      <SingleInput label="Primary input" color="primary" />
      <SingleInput label="Info input" color="info" />
      <SingleInput label="Warning input" color="warning" />
      <SingleInput label="Danger input" color="danger" />
    </div>
  )).add("Types", () => (
    <div>
      <SingleInput label="Default" />
      <SingleInput label="Email" type="email" />
      <SingleInput label="Password" type="password" />
      <SingleInput label="Telephone" type="tel" />
    </div>
  )).add("Addons", () => (
    <Field hasAddons group="center" label="Donation amount" help="Any amount is appreciated! :)">
      <Control>
        <a class="button" disabled>$</a>
      </Control>
      <Control>
        <TextInput placeholder="5.00" />
      </Control>
      <Control>
        <a class="button is-primary">Donate !</a>
      </Control>
    </Field>
  )).add("Horizontal forms", () => (
    <Field horizontal label="From" help={["Enter your name", "Enter your email"]}>
      <Control iconsLeft="fas fa-user">
        <TextInput placeholder="Name"/>
      </Control>
      <Control iconsLeft="fas fa-envelope">
        <TextInput type="email" placeholder="Email address" />
      </Control>
    </Field>
  ))
