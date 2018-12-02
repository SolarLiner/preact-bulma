import { RenderableProps } from "preact";
import { h } from "preact";
import { Control, Field, IControlProps, IFieldProps, IInputProps, ITextareaProps, Textarea, TextInput } from ".";

export function SingleInput(props: RenderableProps<IFieldProps & IControlProps & IInputProps>) {
  return (
    <Field {...props as any}>
      <Control {...props as any}>
        <TextInput {...props as any} />
      </Control>
    </Field>
  );
}

export function SingleTextarea(props: RenderableProps<IFieldProps & IControlProps & ITextareaProps>) {
  return (
    <Field {...props as any}>
      <Control {...props as any}>
        <Textarea {...props as any} />
      </Control>
    </Field>
  );
}
