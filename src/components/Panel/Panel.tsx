import classnames from "classnames";
import { h, RenderableProps } from "preact";

export default function Panel(props: RenderableProps<{}>) {
  return <nav class="panel">{props.children}</nav>;
}

export function PanelHeading(props: RenderableProps<{}>) {
  return <p class="panel-heading">{props.children}</p>;
}

interface IPanelBlockProps {
  active?: boolean;
  tabs?: boolean;
  icon?: string;
}

export function PanelBlock(props: RenderableProps<IPanelBlockProps>) {
  const classes = classnames({
    "panel-block": !props.tabs,
    "panel-tabs": props.tabs,
    "is-active": !!props.active
  });

  return (
    <div class={classes}>
      {props.icon && (
        <span class="panel-icon">
          <i class={props.icon} aria-hidden="true" />
        </span>
      )}
      {props.children}
    </div>
  );
}
