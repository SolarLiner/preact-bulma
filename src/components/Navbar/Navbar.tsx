import { h, RenderableProps, AnyComponent, Component } from "preact";
import classnames from "classnames";

interface INavbarProps {
  navbarBrand: AnyComponent | JSX.Element;
  class?: string;
}

interface INavbarState {
  expanded: boolean;
}

export default class Navbar extends Component<INavbarProps, INavbarState> {
  constructor() {
    super();
    this.setState({ expanded: false });
  }
  public render() {
    const { children, ...props } = this.props;
    const { expanded } = this.state;
    return (
      <nav class={classnames("navbar", props.class)}>
        <div class="navbar-brand">
          {props.navbarBrand}
          {children}
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded={expanded.toString()}
            onClick={_ev => this.setState({ expanded: !expanded })}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
      </nav>
    );
  }
}
