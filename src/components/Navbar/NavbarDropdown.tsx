import { h, RenderableProps } from "preact";

interface INavbarDropdownProps {
  title: string;
  icon?: string;
}

export default function NavbarDropdown(
  props: RenderableProps<INavbarDropdownProps>
) {
  return (
    <div class="navbar-item has-dropdown">
      <a class="navbar-link">{props.title}</a>
      <div class="navbar-dropdown">{props.children}</div>
    </div>
  );
}

interface INavbarDropdownItemProps {
  href?: string;
}

export function NavbarDropdownItem(
  props: RenderableProps<INavbarDropdownItemProps>
) {
  if (props.href) {
    return (
      <a class="navbar-item" href={props.href}>
        {props.children}
      </a>
    );
  } else {
    return <div class="navbar-item">{props.children}</div>;
  }
}

export function NavbarDropdownDivider() {
  return <hr class="navbar-divider"/>
}
