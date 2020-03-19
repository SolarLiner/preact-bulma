import classnames from "classnames";
import { h, JSX, RenderableProps } from "preact";

export default function Navbar({ class: klass, children, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <nav {...props} class={classnames("navbar", klass)}>{children}</nav>;
}

interface INavbarBrandProps extends JSX.HTMLAttributes {
  href?: string;
  active?: boolean;

  onToggleExpand?(): void;
}

export function NavbarBrand({ href, active, onToggleExpand, children, class: klass, ...props }: RenderableProps<INavbarBrandProps>) {
  const classes = classnames("navbar-brand", klass);
  return (
    <div class={classes}>
      <a class="navbar-item" href={href || "#"}>
        {children}
      </a>
      <a
        role="button"
        class={classnames("navbar-burger", { "is-active": !!active })}
        aria-label="menu"
        aria-expanded={!!active}
        onClick={_ev => onToggleExpand && onToggleExpand()}
      >
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </a>
    </div>
  );
}

interface INavbarMenuProps extends JSX.HTMLAttributes {
  active?: boolean;
  side?: "start" | "end";
}

export function NavbarMenu({ active, side, class: klass, children, ...props }: RenderableProps<INavbarMenuProps>) {
  const classes = classnames({
    "navbar-menu": !side,
    "is-active": !side && active,
    [`navbar-${side}`]: side
  }, klass);
  return <div {...props} class={classes}>{children}</div>;
}

interface INavbarMenuItemProps extends JSX.HTMLAttributes {
  href?: string;
  active?: boolean;
}

export function NavbarMenuItem({ active, href, children, class: klass, ...props }: RenderableProps<INavbarMenuItemProps>) {
  const classes = classnames("navbar-item", {
    "is-active": active
  }, klass);
  if (href)
    return (
      <div {...props} class={classes}>
        <a class="navbar-link" href={href}>
          {children}
        </a>
      </div>
    );
  else return <div {...props} class={classes}>{children}</div>;
}
