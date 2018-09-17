import { h } from "preact";
import { storiesOf } from "@storybook/react";

import Dropdown from "../../src/components/Dropdown";

storiesOf("Dropdown", module)
  .add("Simple", () => (
    <Dropdown.Dropdown title="Dropdown" icon="fas fa-angle-down">
      <Dropdown.Item>Link</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item isContent>
        Hello, <b>friend</b>!
      </Dropdown.Item>
    </Dropdown.Dropdown>
  ))
  .add("Hoverable", () => (
    <Dropdown.Dropdown title="Dropdown" icon="fas fa-angle-down" hoverable>
      <Dropdown.Item>Link</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item isContent>
        Hello, <b>friend</b>!
      </Dropdown.Item>
    </Dropdown.Dropdown>
  ))
  .add("Dropup", () => (
    <Dropdown.Dropdown
      title="Dropdown"
      icon="fas fa-angle-down"
      hoverable
      dropup
    >
      <Dropdown.Item>Link</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item isContent>
        Hello, <b>friend</b>!
      </Dropdown.Item>
    </Dropdown.Dropdown>
  ));
