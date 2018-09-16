import { h, RenderableProps } from "preact";

export default function CardFooter({ children }: RenderableProps<{}>) {
  return <footer class="card-footer">{children}</footer>;
}

interface ICardFooterItemProps {
  href?: string;
}

export function CardFooterItem({
  children,
  ...props
}: RenderableProps<ICardFooterItemProps>) {
  return (
    <a href={props.href || "#"} class="card-footer-item">
      {children}
    </a>
  );
}
