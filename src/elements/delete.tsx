import classnames from "classnames";
import { h, RenderableProps } from "preact";

interface IDeleteProps {
  size?: "small" | "medium" | "large";
  onClick?: (ev: MouseEvent) => void;
}
export default function Delete(props: RenderableProps<IDeleteProps>) {
  return (
    <a
      class={classnames("delete", {
        [`is-${props.size}`]: !!props.size
      })}
      aria-class="delete"
      onClick={props.onClick}
    >
      {props.children}
    </a>
  );
}
