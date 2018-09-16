import { h, RenderableProps } from "preact";
import classnames from "classnames";

export default function Menu({ children }: RenderableProps<{}>) {
  return <aside class="menu">{children}</aside>;
}

export function MenuLabel({ children }: RenderableProps<{}>) {
  return <p class="menu-label">{children}</p>;
}

export function MenuList({ children }: RenderableProps<{}>) {
  return <ul class="menu-list">{children}</ul>;
}

interface IMenuSubListProps {
  href?: string;
  title: string;
  active?: boolean;
}

export function MenuSubList({
  children,
  ...props
}: RenderableProps<IMenuSubListProps>) {
  return (
    <li>
      <a
        href={props.href || "#"}
        class={classnames({ "is-active": props.active })}
      >
        {props.title}
      </a>
      <ul>{children}</ul>
    </li>
  );
}

interface IMenuItemProps {
  active?: boolean;
}

export function MenuItem({
  active,
  children
}: RenderableProps<IMenuItemProps>) {
  return (
    <li>
      <a class={classnames({ "is-active": active })}>{children}</a>
    </li>
  );
}
