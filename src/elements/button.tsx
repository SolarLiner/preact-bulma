import classnames from "classnames";
import { h, RenderableProps } from "preact";
import Icon from "./icon";

interface IButtonProps {
  color?: string;
  size?: "small" | "medium" | "large";
  type?: "submit" | "reset";
  fullWidth?: boolean;
  outlined?: boolean;
  inverted?: boolean;
  rounded?: boolean;
  loading?: boolean;
  static?: boolean;
  disabled?: boolean;
  selected?: boolean;
  href?: string;
  icon?: string;
  onClick?: (ev: MouseEvent) => void;
}
export default function Button(props: RenderableProps<IButtonProps>) {
  if (props.type) return <InputButton {...props} />;
  return (
    <a href={props.href} class={genClasses(props)} onClick={props.onClick} disabled={!!props.disabled}>
      <ButtonIcon icon={props.icon} size={props.size} />
      <span>{props.children}</span>
    </a>
  );
}

export function InputButton(props: RenderableProps<IButtonProps>) {
  if (props.loading || (props.icon !== undefined || props.icon !== ""))
    return (
      <button
        onClick={props.onClick}
        class={genClasses(props)}
        type={props.type || "submit"}
        disabled={!!props.disabled}
      >
        <ButtonIcon icon={props.icon} size={props.size} />
        <span>{props.children}</span>
      </button>
    );
  else
    return (
      <input
        onClick={props.onClick}
        class={genClasses(props)}
        type={props.type || "submit"}
        value={props.children as string}
        disabled={!!props.disabled}
      />
    );
}

interface IButtonsProps {
  size?: "small" | "medium" | "large";
  hasAddons?: boolean;
}
export function Buttons(props: RenderableProps<IButtonsProps>) {
  return (
    <div
      class={classnames("buttons", {
        [`are-${props.size}`]: !!props.size,
        "has-addons": !!props.hasAddons
      })}
    >
      {props.children}
    </div>
  );
}

function genClasses(props: IButtonProps) {
  return classnames("button", {
    [`is-${props.color}`]: !!props.color,
    [`is-${props.size}`]: !!props.size,
    "is-selected": !!props.selected,
    "is-fullwidth": !!props.fullWidth,
    "is-outlined": !!props.outlined,
    "is-inverted": !!props.inverted,
    "is-rounded": !!props.rounded,
    "is-loading": !!props.loading,
    "is-static": !!props.static
  });
}

interface IButtonIconProps {
  icon?: string;
  size?: "small" | "medium" | "large";
}
function ButtonIcon(props: RenderableProps<IButtonIconProps>) {
  if (!props.icon) return null;
  const size = ICON_SIZE_MAP[props.size || "default"];
  return <Icon icon={props.icon} size={size} />;
}

const ICON_SIZE_MAP = {
  small: "small",
  default: "small",
  medium: null,
  large: "medium"
};
