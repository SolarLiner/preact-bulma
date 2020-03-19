import { createElement, h, JSX, RenderableProps, VNode } from "preact";
import classNames from "classnames";

interface IHeaderProps extends JSX.HTMLAttributes {
  title?: string;
  icon?: string;
}

export default function Header({ class: klass, children: _, title, icon, ...props }: RenderableProps<IHeaderProps>) {
  const classes = classNames("card-header", klass);
  const tn = title ? <p class="card-header-title">{title}</p> : null;
  const icn = icon ? <a href="#" class="card-header-icon"><span class="icon"><i class={icon}/> </span> </a> : null;
  const children = new Array<VNode>();
  if (tn) children.push(tn);
  if (icn) children.push(icn);
  return createElement("header", { ...props, class: classes }, children);
}
