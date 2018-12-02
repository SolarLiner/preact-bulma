import { RenderableProps } from "preact";
import { h } from "preact";
import {
  Control,
  Field,
  IControlProps,
  IFieldProps,
  IInputProps,
  ISelectProps,
  ITextareaProps,
  Select as OrigSelect,
  Textarea as OrigTextarea,
  TextInput
} from ".";

export function Input(props: RenderableProps<IFieldProps & IControlProps & IInputProps>) {
  return (
    <Field {...props as any}>
      <Control {...props as any}>
        <TextInput {...props as any} />
      </Control>
    </Field>
  );
}

export function Textarea(props: RenderableProps<IFieldProps & IControlProps & ITextareaProps>) {
  return (
    <Field {...props as any}>
      <Control {...props as any}>
        <OrigTextarea {...props as any} />
      </Control>
    </Field>
  );
}

export function Select(props: RenderableProps<IFieldProps & IControlProps & ISelectProps>) {
  return (
    <Field {...props as any}>
      <Control {...props as any}>
        <OrigSelect {...props as any} />
      </Control>
    </Field>
  );
}
