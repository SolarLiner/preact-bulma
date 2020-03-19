import classnames from "classnames";
import { Component, h, JSX, RenderableProps } from "preact";

interface IModalCardProps extends JSX.HTMLAttributes {
  active?: boolean;
  title: string;

  onClose?(): void;
}

export class ModalCard extends Component<IModalCardProps, {}> {
  public render() {
    const { active, title, onClose: _, class: klass, children, ...props } = this.props;
    return (
      <div {...props} class={classnames("modal", { "is-active": active }, klass)}>
        <div class="modal-background" onClick={this.handleClose.bind(this)}/>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">{title}</p>
            <button class="delete" aria-label="delete" onClick={this.handleClose.bind(this)}/>
          </header>
          {children}
        </div>
        <div class="modal-close is-large" aria-label="close" onClick={this.handleClose.bind(this)}/>
      </div>
    );
  }
  private handleClose(_ev: MouseEvent) {
    if (this.props.onClose) this.props.onClose();
  }
}

export function ModalCardBody({ class: klass, children, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <section {...props} class={classnames("modal-card-body", klass)}>{children}</section>;
}

export function ModalCardFooter({ class: klass, children, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <footer {...props} class={classnames("modal-card-body", klass)}>{children}</footer>;
}
