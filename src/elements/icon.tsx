import classnames from "classnames";
import { h, JSX, RenderableProps } from "preact";

interface IIconProps extends Omit<JSX.HTMLAttributes, "size"> {
  icon: string;
  color?: string;
  size?: "small" | "medium" | "large";
}

export default function Icon({ size, icon, color, children: _, class: klass, ...props }: RenderableProps<IIconProps>) {
  return (
    <span
      class={classnames("icon", {
        [`has-text-${color}`]: !!color,
        [`is-${size}`]: !!size
      }, klass)}
    >
      <i class={icon}/>
    </span>
  );
}
