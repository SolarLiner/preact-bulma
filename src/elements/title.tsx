import classnames from "classnames";
import { createElement as h, RenderableProps } from "preact";

interface ITitleProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  el?: string;
  spaced?: boolean;
}
// tslint:disable-next-line:variable-name
export const Title = createHeading("title");
// tslint:disable-next-line:variable-name
export const Subtitle = createHeading("subtitle");

function createHeading(mode: string) {
  return (props: RenderableProps<ITitleProps>) =>
    h(
      props.el || "p",
      { class: classnames(mode, { [`is-${props.size}`]: !!props.size, "is-spaced": !!props.spaced }) },
      props.children
    );
}
