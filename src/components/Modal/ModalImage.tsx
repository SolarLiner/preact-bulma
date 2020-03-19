import classnames from "classnames";
import { Component, h, JSX } from "preact";
import Modal from "./Modal";

interface IModalImageProps extends JSX.HTMLAttributes {
  active?: boolean;
  src: string;
  alt: string;

  onClose?(): void;
}

export default class ModalImage extends Component<IModalImageProps, {}> {
  public render() {
    const { active, src, alt, onClose: _, class: klass, children, ...props } = this.props;
    const imgClasses = classnames("image", klass);
    return (
      <Modal {...props} active={active} onClose={this.handleClose.bind(this)}>
        <p class={imgClasses}>
          <img src={src} alt={alt}/>
        </p>
      </Modal>
    );
  }

  private handleClose(_ev) {
    if (this.props.onClose) this.props.onClose();
  }
}
