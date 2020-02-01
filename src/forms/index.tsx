import classnames from "classnames";
import { Component, ComponentChild, JSX, h, RenderableProps } from "preact";

const GROUP_ALIGNMENTS = {
  left: "is-grouped",
  center: "is-grouped-centered",
  right: "is-grouped-right",
  multiline: "is-grouped-multiline"
};

const ALIGNMENTS = {
  left: "",
  center: "is-centered",
  right: "is-right"
};

export interface IFieldProps {
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
    [`${GROUP_ALIGNMENTS[props.group]}`]: !!props.group
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

export interface IControlProps {
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

export interface IInputProps {
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
  id?: string;
  name?: string;
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
      id={props.id}
      name={props.name}
      type={props.type}
      value={props.value}
    />
  );
}

export interface ITextareaProps {
  placeholder?: string;
  color?: string;
  size?: "small" | "medium" | "large";
  cols?: number;
  rows?: number;
  readOnly?: boolean;
  disabled?: boolean;
  fixed?: boolean;
  value: string;
  id?: string;
  name?: string;
  onInput: (ev: Event) => void;
  onBlur?: (ev: Event) => void;
  onFocus?: (ev: Event) => void;
}

export function Textarea(props: RenderableProps<ITextareaProps>) {
  const classes = classnames("textarea", {
    "has-fixed-size": !!props.fixed,
    [`is-${props.color}`]: !!props.color,
    [`is-${props.size}`]: !!props.size
  });
  return (
    <textarea
      class={classes}
      disabled={props.disabled}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      onInput={props.onInput}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      id={props.id}
      name={props.name}
      value={props.value}
      {...(props as any)}
    >
      {props.children}
    </textarea>
  );
}

export interface ISelectProps {
  options: string[];
  multiple?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  color?: string;
  rounded?: boolean;
  size?: "small" | "medium" | "large";
  id?: string;
  name?: string;
  disabled?: boolean;
  value: string;
  onChange: (ev: Event) => void;
  onFocus?: (ev: Event) => void;
  onBlur?: (ev: Event) => void;
}

export function Select(props: RenderableProps<ISelectProps>) {
  const classes = classnames("select", {
    "is-fullwidth": props.fullWidth,
    "is-loading": props.loading,
    "is-multiple": !!props.multiple,
    "is-rounded": !!props.rounded,
    [`is-${props.color}`]: !!props.color,
    [`is-${props.size}`]: !!props.size
  });
  return (
    <div class={classes}>
      <select
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        disabled={props.disabled}
      >
        {props.options.map(el => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
}

export interface ICheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onChanged?: (ev: Event) => void;
  id?: string;
  name?: string;
  onFocus?: (ev: Event) => void;
  onBlur?: (ev: Event) => void;
}

export function Checkbox(props: RenderableProps<ICheckboxProps>) {
  return (
    <label class="checkbox">
      <input
        type="checkbox"
        checked={props.checked}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        onChange={props.onChanged}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      {props.children}
    </label>
  );
}

export interface IRadioButtonProps {
  name: string;
}
export function RadioButton(props: RenderableProps<IRadioButtonProps>) {
  return (
    <label>
      <input type="radio" name={props.name} /> {props.children}
    </label>
  );
}

export interface IFileInputProps {
  label?: string;
  icon?: string;
  right?: boolean;
  fullWidth?: boolean;
  boxed?: boolean;
  color?: string;
  size?: "small" | "medium" | "large";
  align?: keyof typeof ALIGNMENTS;
  filename?: string;
  name?: string;
  id?: string;
}

export function FileInput(props: RenderableProps<IFileInputProps>) {
  let label: preact.JSX.Element;
  let icon: preact.JSX.Element;
  let filename: preact.JSX.Element;
  const classes = classnames("file", {
    "is-fullwidth": !!props.fullWidth,
    "is-right": !!props.right,
    "is-boxed": !!props.boxed,
    "has-name": !!props.filename,
    [`is-${props.color}`]: !!props.color,
    [`is-${props.size}`]: !!props.size,
    [ALIGNMENTS[props.align]]: !!props.align
  });
  if (props.label) {
    label = <span class="file-label">{props.label}</span>;
  }
  if (props.icon) {
    icon = (
      <span className="file-icon">
        <i class={props.icon} />
      </span>
    );
  }
  if (props.filename) {
    filename = <span class="file-name">{props.filename}</span>;
  }
  return (
    <div class={classes}>
      <label class="file-label">
        <input class="file-input" type="file" id={props.id} name={props.name} />
        <span class="file-cta">
          {icon}
          {label}
        </span>
      </label>
    </div>
  );
}
