import { h, JSX, RenderableProps } from "preact";
import classNames from "classnames";

export default function Content({ class: klass, children, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  const classes = classNames("card-content", klass);
  return (
    <div {...props} class={classes}>
      <div class="content">{children}</div>
    </div>
  );
}
