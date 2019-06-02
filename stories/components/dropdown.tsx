import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Dropdown from "../../src/components/Dropdown";
import { ALIGNMENT } from "../../src/components/Dropdown/Dropdown";

storiesOf("Components/Dropdown", module)
  .addDecorator(withKnobs)
  .add("Dropdown", () => (
    <Dropdown.Dropdown
      title="Dropdown"
      icon="fas fa-angle-down"
      align={select("Align", Object.keys(ALIGNMENT), "left")}
      hoverable={boolean("hoverable", false)}
      active={boolean("Active", true)}
    >
      <Dropdown.Item>Link</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item isContent>
        Hello, <b>friend</b>!
      </Dropdown.Item>
    </Dropdown.Dropdown>
  ))
  .add("Dropup", () => (
    <div style={{ marginTop: "120px" }}>
      <Dropdown.Dropdown
        title="Dropdown"
        icon="fas fa-angle-up"
        align={select("Align", Object.keys(ALIGNMENT), "left")}
        hoverable={boolean("hoverable", false)}
        active={boolean("Active", true)}
        dropup
      >
        <Dropdown.Item>Link</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item isContent>
          Hello, <b>friend</b>!
        </Dropdown.Item>
      </Dropdown.Dropdown>
    </div>
  ));
