import classnames from "classnames";
import { h, RenderableProps } from "preact";

interface IProgressProps {
  color?: string;
  size?: "small" | "medium" | "large";
  value?: number;
  max?: number;
}
export default function Progress(props: RenderableProps<IProgressProps>) {
  return (
    <progress
      class={classnames("progress", { [`is-${props.color}`]: !!props.color, [`is-${props.size}`]: !!props.size })}
      value={props.value}
      max={props.max || 100}
    >
      {props.value} %
    </progress>
  );
}
