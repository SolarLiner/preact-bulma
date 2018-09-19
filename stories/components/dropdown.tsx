import { h } from "preact";
import { storiesOf } from "@storybook/react";

import Dropdown from "../../src/components/Dropdown";

storiesOf("Dropdown", module)
  .add("Simple", () => (
    <div>
      <Dropdown.Dropdown title="Dropdown" icon="fas fa-angle-down">
        <Dropdown.Item>Link</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item isContent>
          Hello, <b>friend</b>!
        </Dropdown.Item>
      </Dropdown.Dropdown>
      <Dropdown.Dropdown title="Dropdown" icon="fas fa-angle-down" active>
        <Dropdown.Item>Link</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item isContent>
          Hello, <b>friend</b>!
        </Dropdown.Item>
      </Dropdown.Dropdown>
    </div>
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
    <div style="margin-top: 120px;">
      <Dropdown.Dropdown
        title="Dropdown"
        icon="fas fa-angle-up"
        hoverable
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
