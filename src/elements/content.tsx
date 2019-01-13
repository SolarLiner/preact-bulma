import classnames from "classnames";
import { h, RenderableProps } from "preact";

interface IContentProps {
  size?: "small" | "medium" | "large";
}
export default function Content(props: RenderableProps<IContentProps>) {
  return <p class={classnames("content", { [`is-${props.size}`]: !!props.size })}>{props.children}</p>;
}
