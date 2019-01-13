import classnames from "classnames";
import { h, RenderableProps } from "preact";
import Delete from "./delete";

interface ITagProps {
  color?: string;
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  delete?: boolean;
  canClose?: boolean;
  onClose?: () => void;
}
export default function Tag(props: RenderableProps<ITagProps>) {
  if (!!props.delete) {
    return <div class={genClasses(props)} />;
  } else {
    if (!!props.canClose) {
      return (
        <div class={genClasses(props)}>
          {props.children}
          <Delete onClick={() => props.onClose()} />
        </div>
      );
    }
    return <div class={genClasses(props)}>{props.children}</div>;
  }
}

function genClasses(props: ITagProps) {
  return classnames("tag", {
    [`is-${props.color}`]: !!props.color,
    [`is-${props.size}`]: !!props.size,
    "is-delete": !!props.delete,
    "is-rounded": !!props.rounded
  });
}

interface ITagsProps {
  hasAddons?: boolean;
  size?: "small" | "medium" | "large";
}
export function Tags(props: RenderableProps<ITagsProps>) {
  return (
    <div class={classnames("tags", { "has-addons": !!props.hasAddons, [`are-${props.size}`]: !!props.size })}>
      {props.children}
    </div>
  );
}
