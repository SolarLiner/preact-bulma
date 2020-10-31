import classnames from "classnames";
import { h, JSX, RenderableProps, toChildArray } from "preact";
import Icon from "./icon";

interface IButtonProps extends Omit<JSX.HTMLAttributes, "size" | "loading"> {
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
}
export default function Button(props: RenderableProps<IButtonProps>) {
  const { color, size, type, fullWidth, outlined, inverted, rounded, loading, static: statik, disabled, selected, href, icon, ..._props } = props;
  const { class: klass, children, ...otherProps } = _props;
  if (props.type) return <InputButton {...props} />;
  return (
    <a {...otherProps} href={href} class={genClasses(props)} disabled={!!disabled}>
      <ButtonIcon icon={icon} size={size}/>
      <span>{children}</span>
    </a>
  );
}

export function InputButton(props: RenderableProps<IButtonProps>) {
  const { color, size, type, fullWidth, outlined, inverted, rounded, loading, static: statik, disabled, selected, href, icon, ..._props } = props;
  const { class: klass, children, ...otherProps } = _props;
  if (loading || (icon !== undefined || icon !== ""))
    return (
      <button {...otherProps}
              class={genClasses(props)}
              type={type || "submit"}
              disabled={!!disabled}
      >
        <ButtonIcon icon={icon} size={size}/>
        <span>{children}</span>
      </button>
    );
  else
    return (
      <input {...otherProps}
             class={genClasses(props)}
             type={type || "submit"}
             value={toChildArray(children)[0] as unknown as string}
             disabled={!!disabled}
      />
    );
}

interface IButtonsProps extends Omit<JSX.HTMLAttributes, "size"> {
  size?: "small" | "medium" | "large";
  hasAddons?: boolean;
}

export function Buttons({ size, hasAddons, children, class: klass, ...props }: RenderableProps<IButtonsProps>) {
  return (
    <div {...props}
         class={classnames("buttons", {
           [`are-${size}`]: !!size,
           "has-addons": !!hasAddons
         }, klass)}
    >
      {children}
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
  }, props.class);
}

interface IButtonIconProps extends Omit<JSX.HTMLAttributes, "size"> {
  icon?: string;
  size?: "small" | "medium" | "large";
}

function ButtonIcon({ icon, size, children, class: klass, ...props }: RenderableProps<IButtonIconProps>) {
  if (!icon) return null;
  const mappedSize = ICON_SIZE_MAP[size || "default"];
  return <Icon {...props} icon={icon} size={mappedSize}/>;
}

const ICON_SIZE_MAP = {
  small: "small",
  default: "small",
  medium: null,
  large: "medium"
};
