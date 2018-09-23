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
  .add("Left/Right aligned", () => (
    <div class="level is-mobile">
      <div class="level-left">
        <div class="level-item">
          <Dropdown.Dropdown
            title="Left-aligned"
            icon="fas fa-angle-down"
            align="left"
            hoverable
          >
            <Dropdown.Item>Link</Dropdown.Item>
          </Dropdown.Dropdown>
        </div>
      </div>
      <div class="level-right">
        <div class="level item">
          <Dropdown.Dropdown
            title="Right-aligned"
            icon="fas fa-angle-down"
            align="right"
            hoverable
          >
            <Dropdown.Item>Link</Dropdown.Item>
          </Dropdown.Dropdown>
        </div>
      </div>
    </div>
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
