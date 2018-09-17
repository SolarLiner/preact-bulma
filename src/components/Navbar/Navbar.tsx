import { h, RenderableProps } from "preact";
import classnames from "classnames";

interface INavbarProps {
  class?: string;
}

export default function Navbar(props: RenderableProps<INavbarProps>) {
  return <nav class={classnames("navbar", props.class)}>{props.children}</nav>;
}

interface INavbarBrandProps {
  href?: string;
  expanded?: boolean;
  onToggleExpand?(): void;
}

export function NavbarBrand(props: RenderableProps<INavbarBrandProps>) {
  <div class="navbar-brand">
    <a class="navbar-item" href={props.href}>
      {props.children}
    </a>
    <a
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded={!!props.expanded}
      onClick={_ev => props.onToggleExpand && props.onToggleExpand()}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>;
}

interface INavbarMenuProps {
  active?: boolean;
  side?: "start" | "end";
}

export function NavbarMenu(props: RenderableProps<INavbarMenuProps>) {
  const classes = classnames("navbar-menu", {
    "is-active": !!props.active,
    [`is-${props.side}`]: !!props.side
  });
  return <div class={classes}>{props.children}</div>;
}
