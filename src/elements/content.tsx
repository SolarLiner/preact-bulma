import classnames from "classnames";
import { h, JSX, RenderableProps } from "preact";

interface IContentProps extends Omit<JSX.HTMLAttributes, "size"> {
  size?: "small" | "medium" | "large";
}

export default function Content({ size, children, class: klass, ...props }: RenderableProps<IContentProps>) {
  return <p {...props} class={classnames("content", { [`is-${size}`]: !!size }, klass)}>{children}</p>;
}
