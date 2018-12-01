import { action, storiesOf } from "@storybook/react";
import { h } from "preact";

import { TextInput } from "../../src/forms";

storiesOf("Forms/Input", module)
  .add("Simple", () => (
    <TextInput label="Input" onInput={action("onInput")} onFocus={action("onFocus")} onBlur={action("onBlur")} />
  ))
  .add("Colored", () => (
    <div>
      <TextInput color="primary" label="Primary input" />
      <TextInput color="danger" label="Danger input" />
    </div>
  ))
  .add("Email & Password", () => (
    <div>
      <TextInput type="email" label="Email" />
      <TextInput type="password" label="Password" />
    </div>
  ))
  .add("Loading", () => <TextInput type="tel" loading />)
  .add("Sizes", () => (
    <div>
      <TextInput placeholder="Small" size="small" />
      <TextInput placeholder="Normal" />
      <TextInput placeholder="Medium" size="medium" />
      <TextInput placeholder="Large" size="large" />
    </div>
  ));
