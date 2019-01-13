import classnames from "classnames";
import { h, RenderableProps } from "preact";

interface IIconProps {
  icon: string;
  color?: string;
  size?: "small" | "medium" | "large";
}
export default function Icon(props: RenderableProps<IIconProps>) {
  return (
    <span
      class={classnames("icon", {
        [`has-text-${props.color}`]: !!props.color,
        [`is-${props.size}`]: !!props.size
      })}
    >
      <i class={props.icon} />
    </span>
  );
}
