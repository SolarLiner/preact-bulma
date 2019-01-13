import { h, RenderableProps } from "preact";

export default function Box(props: RenderableProps<{}>) {
  return <div class="box">{props.children}</div>;
}
