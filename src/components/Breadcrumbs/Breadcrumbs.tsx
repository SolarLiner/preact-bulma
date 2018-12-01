import classnames from "classnames";
import { h, RenderableProps } from "preact";

export const ALIGNMENT = {
  left: "",
  center: "is-centered",
  right: "is-right"
};

export const SEPARATORS = {
  arrow: "has-arrow-separator",
  bullet: "has-bullet-separator",
  dot: "has-dot-separator",
  succeeds: "has-succeeds-separator"
};

interface IBreadcrumbProps {
  align?: keyof typeof ALIGNMENT;
  separator?: keyof typeof SEPARATORS;
  class?: string;
}

export function Breadcrumb(props: RenderableProps<IBreadcrumbProps>) {
  const classes = classnames("breadcrumb", ALIGNMENT[props.align], SEPARATORS[props.separator]);
  return (
    <nav class={classes}>
      <ul>{props.children}</ul>
    </nav>
  );
}

interface IBreadcrumbLinkProps {
  href?: string;
  active?: boolean;
}

export function BreadcrumbLink(props: RenderableProps<IBreadcrumbLinkProps>) {
  const classes = classnames({ "is-active": props.active });
  return (
    <li class={classes}>
      <a href={props.href || "#"}>{props.children}</a>
    </li>
  );
}
