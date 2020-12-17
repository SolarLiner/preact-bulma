import classnames from "classnames";
import { ComponentChild, h, JSX, RenderableProps } from "preact";
import {Override} from "../utils/types";

const NODE_ENV = process.env.NODE_ENV;
const IS_DEVELOPMENT = NODE_ENV === "development";

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

export interface IFieldProps extends JSX.HTMLAttributes {
  expanded?: boolean;
  group?: keyof typeof GROUP_ALIGNMENTS;
  hasAddons?: boolean;
  help?: string | string[];
  helpColor?: string;
  horizontal?: boolean;
  label?: string;
  narrow?: boolean;
}

export function Field({ expanded, group, hasAddons, help, helpColor, horizontal, label, narrow, class: klass, children, ...props }: RenderableProps<IFieldProps>) {
  // TODO: Fix weird layout of has-addon fields with labels and/or help
  let labeln;
  let helpn;
  const classes = classnames("field", {
    "has-addons": !!hasAddons,
    "is-expanded": !!expanded,
    "is-narrow": !!narrow,
    [`${GROUP_ALIGNMENTS[group]}`]: !!group
  }, klass);
  if (label) {
    labeln = <label class="label">{label}</label>;
  }
  if (help) {
    const helpClasses = classnames("help", {
      [`is-${helpColor}`]: !!helpColor
    });
    helpn = <p class={helpClasses}>{help}</p>;
  }
  return (
    <div {...props} class={classes}>
      {labeln}
      {children}
      {helpn}
    </div>
  );
}

export function HorizontalGroup({ expanded, group, hasAddons, help, helpColor, horizontal, label, narrow, class: klass, children, ...props }: RenderableProps<IFieldProps>) {
  const classes = classnames("field is-horizontal", klass);
  let labeln;
  if (label) {
    labeln = (
      <div class="field-label is-normal">
        <label class="label">{label}</label>
      </div>
    );
  }
  const innerFieldProps: IFieldProps = Object.assign({}, props);
  delete innerFieldProps.label;
  delete innerFieldProps.help;
  return (
    <div {...props} class={classes}>
      {labeln}
      <div class="field-body">{children}</div>
    </div>
  );
}

export interface ControlProps {
  expanded?: boolean;
  iconsLeft?: string;
  iconsRight?: string;
  loading?: boolean;
  size?: "small" | "medium" | "large";
}
export type IControlProps = Override<JSX.HTMLAttributes, ControlProps>

export function Control({ expanded, iconsLeft, iconsRight, loading, size, class: klass, children, ...props }: RenderableProps<IControlProps>) {
  let iconsLeftn;
  let iconsRightn;
  const classes = classnames("control", {
    "has-icons-left": !!iconsLeft,
    "has-icons-right": !!iconsRight,
    "is-expanded": !!expanded,
    "is-loading": !!loading,
    [`is-${size}`]: !!size
  }, klass);
  if (iconsLeft) {
    iconsLeftn = (
      <span class="icon is-small is-left">
        <i class={iconsLeft}/>
      </span>
    );
  }
  if (iconsRight) {
    iconsRightn = (
      <span class="icon is-small is-right">
        <i class={iconsRight}/>
      </span>
    );
  }
  return (
    <div {...props} class={classes}>
      {children}
      {iconsLeftn}
      {iconsRightn}
    </div>
  );
}

export interface IInputProps extends JSX.HTMLAttributes {
  active?: boolean;
  color?: string;
  focused?: boolean;
  readOnly?: boolean;
  rounded?: boolean;
  static?: boolean;
}

export function TextInput({ active, color, focused, readOnly, rounded, static: statik, children: _, class: klass, ...props }: RenderableProps<IInputProps>) {
  const classes = classnames("input", {
    "is-active": !!active,
    "is-focuded": !!focused,
    "is-rounded": !!rounded,
    "is-static": !!statik,
    [`is-${color}`]: !!color
  }, props);
  return (
    <input {...props}
           class={classes}
           readOnly={readOnly}
    />
  );
}

export interface ITextareaProps extends Omit<JSX.HTMLAttributes, "size"> {
  color?: string;
  size?: "small" | "medium" | "large";
  fixed?: boolean;
}

export function Textarea({ color, size, fixed, children, class: klass, ...props }: RenderableProps<ITextareaProps>) {
  const classes = classnames("textarea", {
    "has-fixed-size": !!fixed,
    [`is-${color}`]: !!color,
    [`is-${size}`]: !!size
  }, klass);
  return (
    <textarea {...props}
              class={classes}
    >
      {children}
    </textarea>
  );
}

export interface SelectProps {
  options: Record<string, ComponentChild>;
  fullWidth?: boolean;
  loading?: boolean;
  color?: string;
  rounded?: boolean;
  size?: "small" | "medium" | "large";
  divProps?: Omit<JSX.HTMLAttributes, "ref">;
}
export type ISelectProps = Override<JSX.HTMLAttributes, SelectProps>;

export function Select({ options, fullWidth, loading, color, rounded, size, divProps, children, class: klass, ...props }: RenderableProps<ISelectProps>) {
  const classes = classnames("select", {
    "is-fullwidth": fullWidth,
    "is-loading": loading,
    "is-multiple": !!props.multiple,
    "is-rounded": !!rounded,
    [`is-${color}`]: !!color,
    [`is-${size}`]: !!size
  }, klass);
  return (
    <div {...divProps} class={classes}>
      <select {...props}>
        {Object.entries(options).map(([key, val]) => (
          <option key={key} value={key}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}

export interface ICheckboxProps extends Omit<JSX.HTMLAttributes, "value"> {
  value?: boolean;
  labelProps?: Omit<JSX.HTMLAttributes, "ref">;
  onChanged?: (e: Event) => void;
}

export function Checkbox({ value, onChanged, labelProps, children, class: klass, ...props }: RenderableProps<ICheckboxProps>) {
  if (IS_DEVELOPMENT && value) {
    console.warn("Checkbox.value will be deprecated in a future release. Please use Checkbox.checked instead.");
  }
  if (IS_DEVELOPMENT && onChanged) {
    console.warn("Checkbox.onChanged will be deprecated in a future release. Please use Checkbox.onChange instead.");
  }

  const changeEvent = props.onChange || onChanged;
  return (
    <label {...labelProps} class={classnames("checkbox", klass)}>
      <input {...props}
             type="checkbox"
             checked={value}
             onChange={changeEvent}
      />
      {children}
    </label>
  );
}

export interface IRadioButtonProps extends JSX.HTMLAttributes {
  name: string;
  id?: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (ev: Event) => void;
}

export function RadioButton({ children, class: klass, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return (
    <label>
      <input {...props}
             type="radio"
      />{" "}
      {children}
    </label>
  );
}

export interface IFileInputProps extends Omit<JSX.HTMLAttributes, "size"> {
  right?: boolean;
  fullWidth?: boolean;
  boxed?: boolean;
  color?: string;
  size?: "small" | "medium" | "large";
  align?: keyof typeof ALIGNMENTS;
  filename?: string;
  filenames?: string[];
  icon?: string;
  divProps?: Omit<JSX.HTMLAttributes, "ref">;
  labelProps?: Omit<JSX.HTMLAttributes, "ref">;
}

export function FileInput({ right, fullWidth, boxed, color, size, align, filename: _filename, filenames, icon, label, divProps, labelProps, children, class: klass, ...props }: RenderableProps<IFileInputProps>) {
  if (IS_DEVELOPMENT && _filename) {
    console.warn("FileInput.filename will be deprecated in a future release. Please use FileInput.filenames instead.");
  }

  const hasFiles = !!_filename || !!filenames;
  let labeln: JSX.Element;
  let iconn: JSX.Element;
  let filenamen: JSX.Element;
  const classes = classnames("file", {
    "is-fullwidth": !!fullWidth,
    "is-right": !!right,
    "is-boxed": !!boxed,
    "has-name": hasFiles,
    [`is-${color}`]: !!color,
    [`is-${size}`]: !!size,
    [ALIGNMENTS[align]]: !!align
  }, klass);
  if (label) {
    labeln = <span class="file-label">{label}</span>;
  }
  if (icon) {
    iconn = (
      <span className="file-icon">
        <i class={icon}/>
      </span>
    );
  }
  if ((filenames && filenames.length === 1) || _filename) {
    const copy = (filenames && filenames[0]) || _filename;
    filenamen = <span class="file-name">{copy}</span>;
  } else if (filenames && filenames.length > 1) {
    const count = filenames.length;
    filenamen = <span class="file-name">{count} Files</span>;
  }
  return (
    <div {...divProps} class={classes}>
      <label {...labelProps} class="file-label">
        <input {...props}
               class="file-input"
               type="file"
        />
        <span class="file-cta">
          {iconn}
          {labeln}
        </span>
        {filenamen}
      </label>
    </div>
  );
}
