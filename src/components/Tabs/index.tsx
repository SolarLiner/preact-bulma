import classnames from "classnames";
import { h, RenderableProps } from "preact";

export const ALIGNMENT = {
  left: "",
  center: "is-centered",
  right: "is-right"
};

interface ITabsProps {
  align?: keyof typeof ALIGNMENT;
}

export function Tabs(props: RenderableProps<ITabsProps>) {
  const classes = classnames("tabs", {
    [ALIGNMENT[props.align]]: !!props.align
  });
  return (
    <div class={classes}>
      <ul>{props.children}</ul>
    </div>
  );
}

interface ITabsTabProps {
  active?: boolean;
  icon?: string;
  onClick?(ev: MouseEvent): void;
}

export function TabsTab(props: RenderableProps<ITabsTabProps>) {
  return (
    <li class={classnames({ "is-active": props.active })}>
      <a onClick={ev => props.onClick && props.onClick(ev)}>
        {props.icon && (
          <span class="icon is-small">
            <i class={props.icon} />
          </span>
        )}
        <span>{props.children}</span>
      </a>
    </li>
  );
}

export default {
  Tabs,
  Tab: TabsTab
};
