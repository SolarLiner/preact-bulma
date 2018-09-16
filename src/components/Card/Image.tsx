import { h, RenderableProps } from "preact";
import classname from "classnames";

interface ICardImageProps {
  src: string;
  alt: string;
  class?: string;
}

export default function CardImage(props: RenderableProps<ICardImageProps>) {
  const classes = classname("image", props.class);

  return (
    <div class="card-image">
      <figure class={classes}>
        <img src={props.src} alt={props.alt} />
      </figure>
    </div>
  );
}
