import classnames from "classnames";
import { h, RenderableProps } from "preact";

interface ITableProps {
  bordered?: boolean;
  striped?: boolean;
  narrow?: boolean;
  hoverable?: boolean;
  fullWidth?: boolean;
}
export default function Table(props: RenderableProps<ITableProps>) {
  return (
    <table class={classnames("table", {
      "is-bordered": !!props.bordered,
      "is-striped": !!props.striped,
      "is-narrow": !!props.narrow,
      "is-hoverable": !!props.hoverable,
      "is-fullwidth":!!props.fullWidth
    })}>{props.children}</table>
  )
}
