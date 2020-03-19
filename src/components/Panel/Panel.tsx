import classnames from "classnames";
import { h, JSX, RenderableProps } from "preact";

export default function Panel({ children, class: klass, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <nav {...props} class={classnames("panel", klass)}>{children}</nav>;
}

export function PanelHeading({ children, class: klass, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <p {...props} class={classnames("panel-heading", klass)}>{children}</p>;
}

interface IPanelBlockProps extends JSX.HTMLAttributes {
  active?: boolean;
  tabs?: boolean;
  icon?: string;
}

export function PanelBlock({ active, tabs, icon, class: klass, children, ...props }: RenderableProps<IPanelBlockProps>) {
  const classes = classnames({
    "panel-block": !tabs,
    "panel-tabs": tabs,
    "is-active": !!active
  }, klass);

  return (
    <div {...props} class={classes}>
      {icon && (
        <span class="panel-icon">
          <i class={icon} aria-hidden="true"/>
        </span>
      )}
      {children}
    </div>
  );
}
