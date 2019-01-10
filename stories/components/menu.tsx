import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Menu from "../../src/components/Menu";

storiesOf("Components", module).add("Side menu", () => (
  <Menu.Menu>
    <Menu.Label>Community</Menu.Label>
    <Menu.List>
      <Menu.Item>Statistics</Menu.Item>
      <Menu.SubList title="People">
        <Menu.Item>Members</Menu.Item>
        <Menu.Item>Manage</Menu.Item>
      </Menu.SubList>
      <Menu.Item>Settings</Menu.Item>
    </Menu.List>
  </Menu.Menu>
));
