import { h, RenderableProps } from "preact";
import classnames from "classnames";
import randomString from "../../utils/rndString";

const ALIGNMENT = {
  left: "",
  right: 'is-right'
}

interface IDropdownProps {
  active?: boolean;
  hoverable?: boolean;
  dropup?: boolean;
  align?: keyof typeof ALIGNMENT;
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
    [ALIGNMENT[props.align]]: !!props.align
  });
  const menuID = `dropdown-${randomString(8)}`;
  return (
    <div class={classes}>
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls={menuID}>
          <span>{props.title}</span>
          {props.icon && (
            <span class="icon is-small">
              <i class={props.icon} />
            </span>
          )}
        </button>
      </div>
      <div class="dropdown-menu" id={menuID} role="menu">
        <div class="dropdown-content">{children}</div>
      </div>
    </div>
  );
}

interface IDropdownItemProps {
  active?: boolean;
  href?: string;
  isContent?: boolean;
  onClick?(ev: MouseEvent): void;
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
      <a
        href={props.href || "#"}
        class={classes}
        onClick={ev => props.onClick && props.onClick(ev)}
      >
        {children}
      </a>
    );
  }
}

export function DropdownDivider() {
  return <hr class="dropdown-divider" />;
}
