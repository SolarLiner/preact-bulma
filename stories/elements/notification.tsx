import { action } from "@storybook/addon-actions";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Notification from "../../src/elements/notification";

const COLORS = {
  None: "",
  Primary: "primary",
  Light: "light",
  Dark: "dark",
  Info: "info",
  Warning: "warning",
  Danger: "danger"
};

storiesOf("Elements", module)
  .addDecorator(withKnobs)
  .add("Notification", () => (
    <Notification color={select("Color", COLORS, "")} persistent={boolean("Persistent")} onClose={action("close")}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius tempora repudiandae, quae laborum
      mollitia, tempore officia illo ad in accusantium. Veritatis quibusdam, doloremque blanditiis quas ut voluptate
      officiis minima?
    </Notification>
  ));
