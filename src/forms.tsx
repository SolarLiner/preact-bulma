import classnames from "classnames";
import { Component, ComponentChild, h, RenderableProps } from "preact";

const GROUP_ALIGNMENTS = {
  left: "",
  center: "-centered",
  right: "-right",
  multiline: "-multiline"
};

interface IFieldProps {
  expanded?: boolean;
  group?: keyof typeof GROUP_ALIGNMENTS;
  hasAddons?: boolean;
  help?: string | string[];
  helpColor?: string;
  horizontal?: boolean;
  label?: string;
  narrow?: boolean;
}

export function Field(props: RenderableProps<IFieldProps>) {
  // TODO: Fix weird layout of has-addon fields with labels and/or help
  let label;
  let help;
  const classes = classnames("field", {
    "has-addons": !!props.hasAddons,
    "is-expanded": !!props.expanded,
    "is-narrow": !!props.narrow,
    [`is-grouped${GROUP_ALIGNMENTS[props.group]}`]: !!props.group
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

export function HorizontalGroup(props: RenderableProps<IFieldProps>) {
  const classes = classnames("field is-horizontal");
  let label;
  if (props.label) {
    label = (
      <div class="field-label is-normal">
        <label class="label">{props.label}</label>
      </div>
    );
  }
  const innerFieldProps: IFieldProps = Object.assign({}, props);
  delete innerFieldProps.label;
  delete innerFieldProps.help;
  return (
    <div class={classes}>
      {label}
      <div class="field-body">{props.children}</div>
    </div>
  );
}

interface IControlProps {
  expanded?: boolean;
  iconsLeft?: string;
  iconsRight?: string;
  loading?: boolean;
  size?: "small" | "medium" | "large";
}

export function Control(props: RenderableProps<IControlProps>) {
  let iconsLeft;
  let iconsRight;
  const classes = classnames("control", {
    "has-icons-left": !!props.iconsLeft,
    "has-icons-right": !!props.iconsRight,
    "is-expanded": !!props.expanded,
    "is-loading": !!props.loading,
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
  active?: boolean;
  color?: string;
  disabled?: boolean;
  focused?: boolean;
  onBlur?: (ev: Event) => void;
  onFocus?: (ev: Event) => void;
  onInput?: (ev: Event) => void;
  placeholder?: string;
  readOnly?: boolean;
  rounded?: boolean;
  static?: boolean;
  type?: "text" | "password" | "email" | "tel";
  value?: string;
}

export function TextInput(props: RenderableProps<IInputProps>) {
  const classes = classnames("input", {
    "is-active": !!props.active,
    "is-focuded": !!props.focused,
    "is-rounded": !!props.rounded,
    "is-static": !!props.static,
    [`is-${props.color}`]: !!props.color
  });
  return (
    <input
      class={classes}
      disabled={props.disabled}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      onInput={props.onInput}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      type={props.type}
      value={props.value}
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

interface ITextAreaProps {
  placeholder?: string;
  color?: string;
  size?: "small" | "medium" | "large";
  cols?: number;
  rows?: number;
}

export function Textarea(props: RenderableProps<ITextAreaProps>) {
  const classes = classnames("textarea", {
    [`is-${props.color}`]: !!props.color,
    [`is-${props.size}`]: !!props.size
  });
  return (
    <textarea class={classes} {...props as any}>
      {props.children}
    </textarea>
  );
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
