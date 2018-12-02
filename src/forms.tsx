import classnames from "classnames";
import { h, PreactHTMLAttributes, RenderableProps } from "preact";

const GROUP_ALIGNMENTS = {
  left: "",
  center: "centered",
  right: "right",
  multiline: "multiline"
};

interface IFieldProps {
  hasAddons?: boolean;
  group?: keyof typeof GROUP_ALIGNMENTS;
  horizontal?: boolean;
  label?: string;
  help?: string | string[];
  helpColor?: string;
}

function VerticalField(props: RenderableProps<IFieldProps>) {
  let label;
  let help;
  const classes = classnames("field", {
    "has-addons": !!props.hasAddons,
    [`is-grouped-${GROUP_ALIGNMENTS[props.group]}`]: !!props.group
  });
  if (props.label) {
    label = <label class="label">{props.label}</label>;
  }
  if (props.help) {
    const helpClasses = classnames("help", {
      [`is-${props.helpColor}`]: !!props.helpColor
    });
    help = <p class={helpClasses}>{props.help}</p>;
  }
  return (
    <div class={classes}>
      {label}
      {props.children}
      {help}
    </div>
  );
}

function HorizontalField(props: RenderableProps<IFieldProps>) {
  const classes = classnames("field is-horizontal");
  let label;
  if (props.label) {
    label = (<div class="field-label is-normal">
      <label class="label">{props.label}</label>
    </div>);
  }
  const innerFieldProps: IFieldProps = Object.assign({}, props);
  delete innerFieldProps.label;
  delete innerFieldProps.help;
  return (<div class={classes}>
    {label}
    <div class="field-body">
      {(props.children as any[]).map((el, i) => <VerticalField {...innerFieldProps} help={props.help && props.help[i]}>{el}</VerticalField>)}
    </div>
  </div>)
}

export function Field(props: RenderableProps<IFieldProps>) {
  if (props.horizontal) {
    return HorizontalField(props);
  } else {
    return VerticalField(props);
  }
}
interface IControlProps {
  expanded?: boolean;
  iconsLeft?: string;
  iconsRight?: string;
  size?: "small" | "medium" | "large";
}

export function Control(props: RenderableProps<IControlProps>) {
  let iconsLeft;
  let iconsRight;
  const classes = classnames("control", {
    "has-icons-left": !!props.iconsLeft,
    "has-icons-right": !!props.iconsRight,
    "is-expanded": !!props.expanded,
    [`is-${props.size}`]: !!props.size
  });
  if (props.iconsLeft) {
    iconsLeft = (
      <span class="icon is-small is-left">
        <i class={props.iconsLeft} />
      </span>
    );
  }
  if (props.iconsRight) {
    iconsRight = (
      <span class="icon is-small is-right">
        <i class={props.iconsRight} />
      </span>
    );
  }
  return (
    <div class={classes}>
      {props.children}
      {iconsLeft}
      {iconsRight}
    </div>
  );
}

interface IInputProps {
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
    [`is-${props.color}`]: !!props.color
  });
  return (
    <input
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onInput={props.onInput}
      class={classes}
      value={props.value}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
}

export function SingleInput(props: RenderableProps<IFieldProps & IControlProps & IInputProps>) {
  return (
    <Field {...props as any}>
      <Control {...props as any}>
        <TextInput {...props as any} />
      </Control>
    </Field>
  );
}

interface ISelectProps {
  options: string[];
  fullWidth?: boolean;
}

export function Select(props: RenderableProps<ISelectProps>) {
  const classes = classnames("select", {
    "is-fullwidth": props.fullWidth
  });
  return (
    <div class={classes}>
      <select>
        {props.options.map(el => (
          <option>{el}</option>
        ))}
      </select>
    </div>
  );
}

