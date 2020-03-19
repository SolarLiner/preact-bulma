import { h, JSX, RenderableProps } from "preact";
import classNames from "classnames";

export default function Box({ class: klass, children, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <div {...props} class={classNames("box", klass)}>{children}</div>;
}
