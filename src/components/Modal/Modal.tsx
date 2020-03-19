import classnames from "classnames";
import { Component, h, JSX, RenderableProps } from "preact";

interface IModalProps extends JSX.HTMLAttributes {
  active?: boolean;

  onClose?(): void;
}

export default class Modal extends Component<IModalProps, {}> {
  public render({ active, onClose: _, class: klass, ...props }: RenderableProps<IModalProps>) {
    return (
      <div {...props} class={classnames("modal", { "is-active": active }, klass)}>
        <div class="modal-background" onClick={this.handleClick.bind(this)}/>
        <div class="modal-content">{props.children}</div>
        <div class="modal-close is-large" aria-label="close" onClick={this.handleClick.bind(this)}/>
      </div>
    );
  }

  private handleClick(ev: MouseEvent) {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
}
