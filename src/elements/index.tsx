import classnames from "classnames";
import { h, RenderableProps } from "preact";

export function Box(props: RenderableProps<{}>) {
  return <div class="box">{props.children}</div>;
}

interface IButtonProps {
  color?: string;
  size?: "small" | "medium" | "large";
  submit?: boolean;
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
export function Button(props: RenderableProps<IButtonProps>) {
  if (props.submit) return <SubmitButton {...props} />;
  return (
    <a href={props.href} class={genClasses(props)} onClick={props.onClick} disabled={!!props.disabled}>
      <ButtonIcon icon={props.icon} size={props.size} />
      {props.children}
    </a>
  );
}

export function SubmitButton(props: RenderableProps<IButtonProps>) {
  return (
    <input
      onClick={props.onClick}
      class={genClasses(props)}
      type="submit"
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
  return (
    <span
      class={classnames("icon", {
        [`is-${size}`]: !!size
      })}
    >
      <i class={props.icon} />
    </span>
  );
}

const ICON_SIZE_MAP = {
  small: "small",
  default: "small",
  medium: null,
  large: "medium"
};
