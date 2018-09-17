import { h, RenderableProps } from "preact";
import classnames from "classnames";

interface INavbarProps {
  class?: string;
}

export default function Navbar(props: RenderableProps<INavbarProps>) {
  return (
    <nav class={classnames("navbar", props.class)}>
      {props.children}
    </nav>
  )
}
