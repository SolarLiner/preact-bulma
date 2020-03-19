import classnames from "classnames";
import { h, JSX, RenderableProps } from "preact";

export const ALIGNMENT = {
  left: "",
  center: "is-centered",
  right: "is-right"
};

interface ITabsProps extends JSX.HTMLAttributes {
  align?: keyof typeof ALIGNMENT;
}

export function Tabs({ align, class: klass, children, ...props }: RenderableProps<ITabsProps>) {
  const classes = classnames("tabs", {
    [ALIGNMENT[align]]: !!align
  });
  return (
    <div class={classes}>
      <ul>{children}</ul>
    </div>
  );
}

interface ITabsTabProps extends JSX.HTMLAttributes {
  active?: boolean;
  icon?: string;
  href?: string;

  onClick?(ev: MouseEvent): void;
}

export function TabsTab({ active, icon, href, onClick, class: klass, children, ...props }: RenderableProps<ITabsTabProps>) {
  return (
    <li {...props} class={classnames({ "is-active": active }, klass)}>
      <a href={href} onClick={ev => onClick && onClick(ev)}>
        {icon && (
          <span class="icon is-small">
            <i class={icon}/>
          </span>
        )}
        <span>{children}</span>
      </a>
    </li>
  );
}

export default {
  Tabs,
  Tab: TabsTab
};
