import { createElement, JSX, RenderableProps } from "preact";
import classNames from "classnames";

export default function Card({ class: klass, children, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  const classes = classNames("card", klass);

  return createElement("div", { ...props, class: classes }, children);
}
