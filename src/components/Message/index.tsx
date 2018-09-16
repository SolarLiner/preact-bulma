import { h, RenderableProps, Component } from "preact";
import classnames from "classnames";

interface IMessageProps {
  canClose?: boolean;
  onClose?(): void;
  title?: string;
  class?: string;
}

export default class Message extends Component<IMessageProps, {}> {
  public render(props: RenderableProps<IMessageProps>) {
    const classes = classnames("message", props.class);
    if (props.title) {
      return (
        <article class={classes}>
          <div class="message-header">
            <p>{props.title}</p>
            {props.canDelete && (
              <button
                class="delete"
                aria-label="delete"
                onClick={this.handleDelete.bind(this)}
              />
            )}
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
