import classnames from "classnames";
import { h, RenderableProps } from "preact";

import Delete from "./delete";

interface INotificationProps {
  color?: string;
  persistent?: boolean;
  onClose?: () => void;
}
export default function Notification(props: RenderableProps<INotificationProps>) {
  return (
    <div class={classnames("notification", { [`is-${props.color}`]: !!props.color })}>
      {!props.persistent && <Delete onClick={props.onClose} />}
      {props.children}
    </div>
  );
}
