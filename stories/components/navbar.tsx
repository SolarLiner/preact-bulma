import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Navbar from "../../src/components/Navbar";

const COLORS = {
  None: "",
  Primary: "is-primary",
  Light: "is-light",
  Dark: "is-dark",
  Info: "is-info",
  Warning: "is-warning",
  Danger: "is-danger"
};

storiesOf("Components", module)
  .addDecorator(withKnobs)
  .add("Navbar", () => {
    const isActive = boolean("Active (mobile)", true);
    return (
      <Navbar.Navbar class={select("Color", COLORS, "None")}>
        <Navbar.Brand active={isActive}>
          <span>Preact Bulma</span>
        </Navbar.Brand>
        <Navbar.Menu active={isActive}>
          <Navbar.Menu side="start">
            <Navbar.MenuItem href="#">Link</Navbar.MenuItem>
            <Navbar.MenuItem>Not link</Navbar.MenuItem>
            <Navbar.Dropdown title="Dropdown">
              <Navbar.DropdownItem href="#">Link</Navbar.DropdownItem>
              <Navbar.DropdownDivider />
              <Navbar.DropdownItem>Not Link</Navbar.DropdownItem>
            </Navbar.Dropdown>
          </Navbar.Menu>
          <Navbar.Menu side="end">
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
    );
  });
