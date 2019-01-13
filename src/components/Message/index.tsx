import classnames from "classnames";
import { Component, h, RenderableProps } from "preact";
import Delete from "../../elements/delete";

interface IMessageProps {
  canClose?: boolean;
  title?: string;
  class?: string;
  onClose?(): void;
}

export default class Message extends Component<IMessageProps, {}> {
  public render(props: RenderableProps<IMessageProps>) {
    const classes = classnames("message", props.class);
    if (props.title) {
      return (
        <article class={classes}>
          <div class="message-header">
            <p>{props.title}</p>
            {props.canClose && <Delete onClick={this.handleDelete.bind(this)} />}
          </div>
          <div class="message-body">{props.children}</div>
        </article>
      );
    } else {
      return (
        <article class={classes}>
          <div class="message-body">{props.children}</div>
        </article>
      );
    }
  }

  private handleDelete() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
}
