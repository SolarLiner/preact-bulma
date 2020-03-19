import classnames from "classnames";
import { h, JSX, RenderableProps } from "preact";
import Delete from "./delete";

interface ITagProps extends Omit<JSX.HTMLAttributes, "size"> {
  color?: string;
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  delete?: boolean;
  canClose?: boolean;
  onClose?: () => void;
}

export default function Tag({ color, size, rounded, delete: _delete, canClose, onClose, children, class: klass, ...props }: RenderableProps<ITagProps>) {
  if (!!_delete) {
    return <div {...props} class={genClasses(props)}/>;
  } else {
    if (!!canClose) {
      return (
        <div {...props} class={genClasses(props)}>
          {children}
          <Delete onClick={() => onClose()}/>
        </div>
      );
    }
    return <div {...props} class={genClasses(props)}>{children}</div>;
  }
}

function genClasses(props: ITagProps) {
  return classnames("tag", {
    [`is-${props.color}`]: !!props.color,
    [`is-${props.size}`]: !!props.size,
    "is-delete": !!props.delete,
    "is-rounded": !!props.rounded
  }, props.class);
}

interface ITagsProps extends Omit<JSX.HTMLAttributes, "size"> {
  hasAddons?: boolean;
  size?: "small" | "medium" | "large";
}

export function Tags({ hasAddons, size, class: klass, children, ...props }: RenderableProps<ITagsProps>) {
  return (
    <div {...props} class={classnames("tags", { "has-addons": !!hasAddons, [`are-${size}`]: !!size })}>
      {children}
    </div>
  );
}
