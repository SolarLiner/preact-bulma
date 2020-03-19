import classname from "classnames";
import { h, JSX, RenderableProps } from "preact";

interface ICardImageProps extends JSX.HTMLAttributes {
  src: string;
  alt: string;
  figClass?: string;
}

export default function CardImage({ src, alt, figClass, children: _, ...props }: RenderableProps<ICardImageProps>) {
  const figClasses = classname("image", figClass);
  const classes = classname("card-image", props.class);

  return (
    <div {...props} class={classes}>
      <figure class={figClasses}>
        <img src={src} alt={alt}/>
      </figure>
    </div>
  );
}
