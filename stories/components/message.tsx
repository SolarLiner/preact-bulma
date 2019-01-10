import { action } from "@storybook/addon-actions";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Message from "../../src/components/Message";

const COLORS = {
  None: "",
  Primary: "is-primary",
  Light: "is-light",
  Dark: "is-dark",
  Info: "is-info",
  Warning: "is-warning",
  Danger: "is-danger"
};

storiesOf("Components/Message", module)
  .addDecorator(withKnobs)
  .add("Simple", () => (
    <Message
      class={select("Color", COLORS, "None")}
      canClose={boolean("Can close", true)}
      title={text("Title", "You've got mail!")}
      onClose={action("close")}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, aspernatur! Error delectus necessitatibus
      voluptatibus, vitae quia sunt laborum doloribus facilis ipsam nulla officiis sit unde cupiditate quisquam
      explicabo incidunt sapiente.
    </Message>
  ));
