import classnames from "classnames";
import { createElement as h, JSX, RenderableProps } from "preact";

interface ITitleProps extends JSX.HTMLAttributes {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  el?: string;
  spaced?: boolean;
}
// tslint:disable-next-line:variable-name
export const Title = createHeading("title");
// tslint:disable-next-line:variable-name
export const Subtitle = createHeading("subtitle");

function createHeading(mode: string) {
  return ({ size, el, spaced, children, class: klass, ...props }: RenderableProps<ITitleProps>) =>
    h(
      el || "p",
      { ...props, class: classnames(mode, { [`is-${size}`]: !!size, "is-spaced": !!spaced }, klass) },
      children
    );
}
