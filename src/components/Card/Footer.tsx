import { createElement, h, JSX, RenderableProps } from "preact";
import classNames from "classnames";

export default function CardFooter({ children }: RenderableProps<{}>) {
  return <footer class="card-footer">{children}</footer>;
}

interface ICardFooterItemProps extends JSX.HTMLAttributes {
  href?: string;
}

export function CardFooterItem({ class: klass, children, ...props }: RenderableProps<ICardFooterItemProps>) {
  const classes = classNames("card-footer-item", klass);
  return createElement("div", { href: "#", ...props, class: classes }, children);
}
