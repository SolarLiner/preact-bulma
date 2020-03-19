import classnames from "classnames";
import { Component, h, JSX, RenderableProps } from "preact";
import Delete from "../../elements/delete";

interface IMessageProps extends JSX.HTMLAttributes {
  canClose?: boolean;
  title?: string;

  onClose?(): void;
}

export default class Message extends Component<IMessageProps, {}> {
  public render({ canClose, title, onClose: _, class: klass, ...props }: RenderableProps<IMessageProps>) {
    const classes = classnames("message", klass);
    if (title) {
      return (
        <article {...props} class={classes}>
          <div class="message-header">
            <p>{title}</p>
            {canClose && <Delete onClick={this.handleDelete.bind(this)}/>}
          </div>
          <div class="message-body">{props.children}</div>
        </article>
      );
    } else {
      return (
        <article {...props} class={classes}>
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
