import classnames from "classnames";
import { h, JSX, RenderableProps } from "preact";

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

interface IBreadcrumbProps extends JSX.HTMLAttributes {
  align?: keyof typeof ALIGNMENT;
  separator?: keyof typeof SEPARATORS;
}

export function Breadcrumb({ align, separator, children, class: klass, ...props }: RenderableProps<IBreadcrumbProps>) {
  const classes = classnames("breadcrumb", klass, ALIGNMENT[align], SEPARATORS[separator]);
  return (
    <nav {...props} class={classes}>
      <ul>{children}</ul>
    </nav>
  );
}

interface IBreadcrumbLinkProps extends JSX.HTMLAttributes {
  href?: string;
  active?: boolean;
}

export function BreadcrumbLink({ href, active, children, class: klass, ...props }: RenderableProps<IBreadcrumbLinkProps>) {
  const classes = classnames({ "is-active": active });
  return (
    <li {...props} class={classes}>
      <a href={href || "#"}>{children}</a>
    </li>
  );
}
