import { h, RenderableProps } from "preact";
import classnames from "classnames";

interface IDropdownProps {
  active?: boolean;
  hoverable?: boolean;
  dropup?: boolean;
  align?: "right";
  title: string;
  icon?: string;
}

export default function Dropdown({
  children,
  ...props
}: RenderableProps<IDropdownProps>) {
  const classes = classnames("dropdown", {
    "is-active": props.active,
    "is-hoverable": props.hoverable,
    "is-up": props.dropup,
    "is-right": props.align === "right"
  });
  return (
    <div class={classes}>
      <div class="dropdown-trigger">
        <button class="button">
          <span>{props.title}</span>
          {props.icon && (
            <span class="icon is-small">
              <i class={props.icon} />
            </span>
          )}
        </button>
      </div>
      <div class="dropdown-menu">
        <div class="dropdown-content">{children}</div>
      </div>
    </div>
  );
}

interface IDropdownItemProps {
  active?: boolean;
  href?: string;
  isContent?: boolean;
}

export function DropdownItem({
  children,
  ...props
}: RenderableProps<IDropdownItemProps>) {
  const classes = classnames("dropdown-item", { "is-active": props.active });
  if (props.isContent) {
    return (
      <div class={classes}>
        <div class="content">{children}</div>
      </div>
    );
  } else {
    return (
      <a href={props.href || "#"} class={classes}>
        {children}
      </a>
    );
  }
}

export function DropdownDivider() {
  return <hr class="dropdown-divider" />;
}
