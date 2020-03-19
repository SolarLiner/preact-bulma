import classnames from "classnames";
import { h, JSX, RenderableProps } from "preact";

interface IProgressProps extends Omit<JSX.HTMLAttributes, "size"> {
  color?: string;
  size?: "small" | "medium" | "large";
  value?: number;
  max?: number;
}

export default function Progress({ color, size, value, max, class: klass, children, ...props }: RenderableProps<IProgressProps>) {
  return (
    <progress {...props}
              class={classnames("progress", { [`is-${color}`]: !!color, [`is-${size}`]: !!size }, klass)}
              value={value}
              max={max || 100}
    >
      {value} %
    </progress>
  );
}
