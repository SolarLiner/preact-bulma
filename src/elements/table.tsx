import classnames from "classnames";
import { h, JSX, RenderableProps } from "preact";

interface ITableProps extends JSX.HTMLAttributes {
  bordered?: boolean;
  striped?: boolean;
  narrow?: boolean;
  hoverable?: boolean;
  fullWidth?: boolean;
}

export default function Table({ bordered, striped, narrow, hoverable, fullWidth, class: klass, children, ...props }: RenderableProps<ITableProps>) {
  return (
    <table {...props} class={classnames("table", {
      "is-bordered": !!bordered,
      "is-striped": !!striped,
      "is-narrow": !!narrow,
      "is-hoverable": !!hoverable,
      "is-fullwidth": !!fullWidth
    }, klass)}>{children}</table>
  );
}
