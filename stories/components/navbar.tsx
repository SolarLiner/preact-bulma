import { action, storiesOf } from "@storybook/react";
import { h } from "preact";

import Navbar from "../../src/components/Navbar";

storiesOf("Components/Navbar", module).add("Simple", () => (
  <Navbar.Navbar>
    <Navbar.Brand onToggleExpand={action("toggleExpand")}>
      <span>Preact Bulma</span>
    </Navbar.Brand>
    <Navbar.Menu active>
      <Navbar.Menu side="start">
        <Navbar.MenuItem href="#">Link</Navbar.MenuItem>
        <Navbar.MenuItem>Not link</Navbar.MenuItem>
        <Navbar.Dropdown title="Dropdown">
          <Navbar.DropdownItem href="#">Link</Navbar.DropdownItem>
          <Navbar.DropdownDivider />
          <Navbar.DropdownItem>Not Link</Navbar.DropdownItem>
        </Navbar.Dropdown>
      </Navbar.Menu>
    </Navbar.Menu>
  </Navbar.Navbar>
)).add("Deactivated (mobile)", () => (
  <Navbar.Navbar>
    <Navbar.Brand onToggleExpand={action("toggleExpand")}>
      <span>Preact Bulma</span>
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Menu side="start">
        <Navbar.MenuItem href="#">Link</Navbar.MenuItem>
        <Navbar.MenuItem>Not link</Navbar.MenuItem>
        <Navbar.Dropdown title="Dropdown">
          <Navbar.DropdownItem href="#">Link</Navbar.DropdownItem>
          <Navbar.DropdownDivider />
          <Navbar.DropdownItem>Not Link</Navbar.DropdownItem>
        </Navbar.Dropdown>
      </Navbar.Menu>
    </Navbar.Menu>
  </Navbar.Navbar>
  )).add("Navbar start + end", () => (
  <Navbar.Navbar>
    <Navbar.Brand onToggleExpand={action("toggleExpand")}>
      <span>Preact Bulma</span>
    </Navbar.Brand>
    <Navbar.Menu active>
      <Navbar.Menu side="start">
        <Navbar.MenuItem href="#">Navbar start</Navbar.MenuItem>
        <Navbar.MenuItem>Not link</Navbar.MenuItem>
        <Navbar.Dropdown title="Dropdown">
          <Navbar.DropdownItem href="#">Link</Navbar.DropdownItem>
          <Navbar.DropdownDivider />
          <Navbar.DropdownItem>Not Link</Navbar.DropdownItem>
        </Navbar.Dropdown>
      </Navbar.Menu>
      <Navbar.Menu side="end">
        <Navbar.MenuItem href="#">Navbar End</Navbar.MenuItem>
        <Navbar.MenuItem>Not link</Navbar.MenuItem>
        <Navbar.Dropdown title="Dropdown">
          <Navbar.DropdownItem href="#">Link</Navbar.DropdownItem>
          <Navbar.DropdownDivider />
          <Navbar.DropdownItem>Not Link</Navbar.DropdownItem>
        </Navbar.Dropdown>
      </Navbar.Menu>
    </Navbar.Menu>
  </Navbar.Navbar>
))
