import classnames from "classnames";
import { h, PreactHTMLAttributes, RenderableProps } from "preact";

interface IControlProps {
  label?: string;
  help?: string;
  helpColor?: string;
  size?: "small" | "medium" | "large";
  iconsLeft?: string;
  iconsRight?: string;
  inputAttr?: PreactHTMLAttributes;
}

function ControlWrapper(props: RenderableProps<IControlProps>) {
  let iconsLeft;
  let iconsRight;
  let help;
  const controlClasses = classnames("control", {
    "has-icons-left": !!props.iconsLeft,
    "has-icons-right": !!props.iconsRight,
    [`is-${props.size}`]: !!props.size
  });
  const helpClasses = classnames("help", { [`is-${props.helpColor}`]: !!props.helpColor });
  if (props.iconsLeft) {
    iconsLeft = (
      <span class="small is-icon is-left">
        <i class={props.iconsLeft} />
      </span>
    );
  }
  if (props.iconsRight) {
    iconsRight = (
      <span class="small is-icon is-right">
        <i class={props.iconsRight} />
      </span>
    );
  }
  if (props.help) {
    help = <p class={helpClasses}>{props.help}</p>;
  }
  return (
    <div class="field">
      <label class="label">{props.label}</label>
      <div class={controlClasses}>
        {props.children}
        {iconsLeft}
        {iconsRight}
      </div>
      {help}
    </div>
  );
}

interface IInputProps extends IControlProps {
  type?: "text" | "password" | "email" | "tel";
  color?: string;
  active?: boolean;
  rounded?: boolean;
  loading?: boolean;
  focused?: boolean;
  value?: string;
  placeholder?: string;
  onFocus?: (ev: Event) => void;
  onBlur?: (ev: Event) => void;
  onInput?: (ev: Event) => void;
}

export function TextInput(props: RenderableProps<IInputProps>) {
  const classes = classnames("input", {
    "is-active": !!props.active,
    "is-rounded": !!props.rounded,
    "is-loading": !!props.loading,
    "is-focuded": !!props.focused,
    [`is-${props.size}`]: !!props.size
  });
  return (
    <ControlWrapper {...props}>
      <input {...props.inputAttr} onFocus={props.onFocus} onBlur={props.onBlur} onInput={props.onInput} class={classes} />
    </ControlWrapper>
  );
}
