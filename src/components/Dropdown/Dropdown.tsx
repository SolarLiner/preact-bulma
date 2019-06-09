import classnames from "classnames";
import { Component, h, RenderableProps } from "preact";
import "../../utils/array_include";
import randomString from "../../utils/rndString";

export const ALIGNMENT = {
  left: "",
  right: "is-right"
};

interface IDropdownProps {
  active?: boolean;
  hoverable?: boolean;
  dropup?: boolean;
  align?: keyof typeof ALIGNMENT;
  title: string;
  icon?: string;
}

interface IDropdownState {
  active: boolean;
  menuID: string;
}

export default class Dropdown extends Component<IDropdownProps, IDropdownState> {
  private triggerWhitelist: Element[];
  private menu?: HTMLDivElement;
  private trigger?: HTMLDivElement;
  constructor(props?: IDropdownProps, context?: any) {
    super(props, context);
    this.setState({
      active: !!props.active,
      menuID: `dropdown-${randomString(8)}`
    });
  }

  public render(props: RenderableProps<IDropdownProps>, state: IDropdownState) {
    const classes = classnames("dropdown", {
      "is-active": state.active,
      [ALIGNMENT[props.align]]: !!props.align,
      "is-hoverable": props.hoverable,
      "is-up": props.dropup
    });
    return (
      <div class={classes}>
        <div class="dropdown-trigger" ref={el => (this.trigger = el)}>
          <a class="button" aria-haspopup="true" aria-controls={state.menuID} onClick={_ev => this.toggleActive()}>
            <span>{props.title}</span>
            {props.icon && (
              <span class="icon is-small">
                <i class={props.icon} />
              </span>
            )}
          </a>
        </div>
        <div class="dropdown-menu" id={state.menuID} ref={el => (this.menu = el)} role="menu">
          <div class="dropdown-content">{props.children}</div>
        </div>
      </div>
    );
  }

  public componentDidMount() {
    if (window.document) document.addEventListener("click", this.clickedOutside.bind(this));
    this.triggerWhitelist = [
      ...this.trigger.querySelectorAll("*").values(),
      ...this.menu.querySelectorAll("*").values(),
      this.trigger,
      this.menu
    ];
  }

  public componentWillUnmount() {
    if (window.document) document.removeEventListener("click", this.clickedOutside.bind(this));
  }

  private toggleActive(override?: boolean) {
    let active = override;
    if (typeof active === "undefined") {
      active = !this.state.active;
    }
    this.setState({ active });
  }

  private clickedOutside(ev: MouseEvent) {
    if (!this.triggerWhitelist.includes(ev.srcElement as HTMLElement)) this.toggleActive(false);
  }
}

interface IDropdownItemProps {
  active?: boolean;
  href?: string;
  isContent?: boolean;
  onClick?(ev: MouseEvent): void;
}

export function DropdownItem({ children, ...props }: RenderableProps<IDropdownItemProps>) {
  const classes = classnames("dropdown-item", { "is-active": props.active });
  if (props.isContent) {
    return (
      <div class={classes}>
        <div class="content">{children}</div>
      </div>
    );
  } else {
    return (
      <a href={props.href || "#"} class={classes} onClick={ev => props.onClick && props.onClick(ev)}>
        {children}
      </a>
    );
  }
}

export function DropdownDivider() {
  return <hr class="dropdown-divider" />;
}
