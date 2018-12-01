import { h, RenderableProps } from "preact";

export default function Card({ children }: RenderableProps<{}>) {
  return <div class="card">{children}</div>;
}
