import classnames from "classnames";
import { Component, h, RenderableProps } from "preact";

interface IModalCardProps {
  active?: boolean;
  title: string;
  onClose?(): void;
}

export class ModalCard extends Component<IModalCardProps, {}> {
  public render() {
    const { children, ...props } = this.props;
    return (
      <div class={classnames("modal", { "is-active": props.active })}>
        <div class="modal-background" onClick={this.handleClose.bind(this)} />
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">{props.title}</p>
            <button class="delete" aria-label="delete" onClick={this.handleClose.bind(this)} />
          </header>
          {children}
        </div>
        <div class="modal-close is-large" aria-label="close" onClick={this.handleClose.bind(this)} />
      </div>
    );
  }
  private handleClose(_ev: MouseEvent) {
    if (this.props.onClose) this.props.onClose();
  }
}

export function ModalCardBody({ children }: RenderableProps<{}>) {
  return <section class="modal-card-body">{children}</section>;
}

export function ModalCardFooter({ children }: RenderableProps<{}>) {
  return <footer class="modal-card-foot">{children}</footer>;
}
