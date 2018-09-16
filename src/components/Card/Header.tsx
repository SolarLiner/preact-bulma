import { h, RenderableProps } from "preact";

interface IHeaderProps {
  title?: string;
  icon?: string;
}

export default function Header(props: RenderableProps<IHeaderProps>) {
  return (
    <header class="card-header">
      {props.title && <p class="card-header-title">{props.title}</p>}
      {props.icon && (
        <a href="#" class="card-header-icon">
          <span class="icon">
            <i class={props.icon} />
          </span>
        </a>
      )}
    </header>
  );
}
