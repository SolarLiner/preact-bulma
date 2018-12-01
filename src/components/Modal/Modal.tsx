import classnames from "classnames";
import { Component, h, RenderableProps } from "preact";

interface IModalProps {
  active?: boolean;
  onClose?(): void;
}

export default class Modal extends Component<IModalProps, {}> {
  public render(props: RenderableProps<IModalProps>) {
    return (
      <div class={classnames("modal", { "is-active": props.active })}>
        <div class="modal-background" onClick={this.handleClick.bind(this)} />
        <div class="modal-content">{props.children}</div>
        <div
          class="modal-close is-large"
          aria-label="close"
          onClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }

  private handleClick(ev: MouseEvent) {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
}


