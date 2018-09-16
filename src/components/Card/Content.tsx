import { h, RenderableProps } from "preact";

export default function Content({ children }: RenderableProps<{}>) {
  return (
    <div class="card-content">
      <div class="content">{children}</div>
    </div>
  );
}
