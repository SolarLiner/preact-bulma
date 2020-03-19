import { h, JSX, RenderableProps } from "preact";
import classNames from "classnames";

interface INavbarDropdownProps extends JSX.HTMLAttributes {
  title: string;
  icon?: string;
}

export default function NavbarDropdown({ title, icon, class: klass, children, ...props }: RenderableProps<INavbarDropdownProps>) {
  const classes = classNames("navbar-item", "has-dropdown", klass);
  return (
    <div {...props} class={classes}>
      <a class="navbar-link">{title}</a>
      <div class="navbar-dropdown">{children}</div>
    </div>
  );
}

interface INavbarDropdownItemProps extends JSX.HTMLAttributes {
  href?: string;
}

export function NavbarDropdownItem({ href, children, class: klass, ...props }: RenderableProps<INavbarDropdownItemProps>) {
  if (href) {
    return (
      <a class={classNames("navbar-item", klass)} href={href}>
        {children}
      </a>
    );
  } else {
    return <div class={classNames("navbar-item", klass)}>{children}</div>;
  }
}

export function NavbarDropdownDivider({ class: klass, children: _, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <hr {...props} class={classNames("navbar-divider", klass)}/>;
}
