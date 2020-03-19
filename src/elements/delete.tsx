import classnames from "classnames";
import { h, JSX, RenderableProps } from "preact";

interface IDeleteProps extends Omit<JSX.HTMLAttributes, "size"> {
  size?: "small" | "medium" | "large";
}

export default function Delete({ size, class: klass, children, ...props }: RenderableProps<IDeleteProps>) {
  return (
    <a {...props}
       class={classnames("delete", {
         [`is-${size}`]: !!size
       }, klass)}
       aria-class="delete"
    >
      {children}
    </a>
  );
}
