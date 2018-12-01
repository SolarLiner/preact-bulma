import classnames from "classnames";
import { Component, h, RenderableProps } from "preact";
import Modal from "./Modal";

interface IModalImageProps {
  active?: boolean;
  class?: string;
  src: string;
  alt: string;
  onClose?(): void;
}

export default class ModalImage extends Component<IModalImageProps, {}> {
  public render() {
    const { children, ...props } = this.props;
    const imgClasses = classnames("image", props.class);
    return (
      <Modal active={props.active} onClose={this.handleClose.bind(this)}>
        <p class={imgClasses}>
          <img src={props.src} alt={props.alt} />
        </p>
      </Modal>
    );
  }

  private handleClose(_ev) {
    if (this.props.onClose) this.props.onClose();
  }
}
