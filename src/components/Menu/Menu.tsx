import classnames from "classnames";
import { h, JSX, RenderableProps } from "preact";

export default function Menu({ class: klass, children, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <aside {...props} class={classnames("menu", klass)}>{children}</aside>;
}

export function MenuLabel({ class: klass, children, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <p {...props} class="menu-label">{children}</p>;
}

export function MenuList({ class: klass, children, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <ul {...props} class={classnames("menu-list", klass)}>{children}</ul>;
}

interface IMenuSubListProps extends JSX.HTMLAttributes {
  href?: string;
  title: string;
  active?: boolean;
}

export function MenuSubList({ href, title, active, class: klass, children, ...props }: RenderableProps<IMenuSubListProps>) {
  return (
    <li {...props} class={klass}>
      <a href={href || "#"} class={classnames({ "is-active": active })}>
        {title}
      </a>
      <ul>{children}</ul>
    </li>
  );
}

interface IMenuItemProps extends JSX.HTMLAttributes {
  active?: boolean;

  onClick?(ev: MouseEvent): void;
}

export function MenuItem({ active, onClick, class: klass, children, ...props }: RenderableProps<IMenuItemProps>) {
  return (
    <li {...props} class={klass}>
      <a class={classnames({ "is-active": active })} onClick={ev => onClick && onClick(ev)}>
        {children}
      </a>
    </li>
  );
}
