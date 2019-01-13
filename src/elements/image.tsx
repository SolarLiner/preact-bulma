import classnames from "classnames";
import { h, RenderableProps } from "preact";

interface IImageProps {
  src: string;
  alt: string;
  size?: 16 | 24 | 32 | 48 | 64 | 96 | 128;
  ratio?:
    | "square"
    | "1by1"
    | "5by4"
    | "4by3"
    | "3by2"
    | "5by3"
    | "16by9"
    | "2by1"
    | "3by1"
    | "4by5"
    | "3by4"
    | "2by3"
    | "3by5"
    | "9by16"
    | "1by2"
    | "1by3";
}
export default function Image(props: RenderableProps<IImageProps>) {
  return (
    <figure
      class={classnames("image", {
        [`is-${props.ratio}`]: !!props.ratio,
        [`is-${props.size}x${props.size}`]: !!props.size
      })}
    >
      <img src={props.src} alt={props.alt} />
    </figure>
  );
}
