import classnames from "classnames";
import { h, JSX, RenderableProps } from "preact";

import Delete from "./delete";

interface INotificationProps extends JSX.HTMLAttributes {
  color?: string;
  persistent?: boolean;
  onClose?: () => void;
}

export default function Notification({ color, persistent, onClose, class: klass, children, ...props }: RenderableProps<INotificationProps>) {
  return (
    <div {...props} class={classnames("notification", { [`is-${color}`]: !!color }, klass)}>
      {!persistent && <Delete onClick={onClose}/>}
      {children}
    </div>
  );
}
