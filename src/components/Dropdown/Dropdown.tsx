import classnames from "classnames";
import { Component, h, JSX, RenderableProps } from "preact";
import "../../utils/array_include";
import randomString from "../../utils/rndString";

export const ALIGNMENT = {
  left: "",
  right: "is-right"
};

interface IDropdownProps extends JSX.HTMLAttributes {
  active?: boolean;
  hoverable?: boolean;
  dropup?: boolean;
  align?: keyof typeof ALIGNMENT;
  title: string;
  icon?: string;
}

interface IDropdownState extends JSX.HTMLAttributes {
  active: boolean;
  menuID: string;
}

export default class Dropdown extends Component<IDropdownProps, IDropdownState> {
  private triggerWhitelist: Element[];
  private menu?: HTMLDivElement;
  private trigger?: HTMLDivElement;
  state = { active: false, menuID: `dropdown-${randomString(8)}` };

  componentWillReceiveProps(props: Readonly<IDropdownProps>): void {
    this.setState({ active: !!props.active });
  }

  public render({ active, hoverable, dropup, align, title, icon, children, ...props }: RenderableProps<IDropdownProps>, state: IDropdownState) {
    const classes = classnames("dropdown", {
      "is-active": state.active,
      [ALIGNMENT[align]]: !!align,
      "is-hoverable": hoverable,
      "is-up": dropup
    });
    return (
      <div {...props} class={classes}>
        <div class="dropdown-trigger" ref={el => (this.trigger = el)}>
          <a class="button" aria-haspopup="true" aria-controls={state.menuID} onClick={_ev => this.toggleActive()}>
            <span>{title}</span>
            {icon && (
              <span class="icon is-small">
                <i class={icon}/>
              </span>
            )}
          </a>
        </div>
        <div class="dropdown-menu" id={state.menuID} ref={el => (this.menu = el)} role="menu">
          <div class="dropdown-content">{children}</div>
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
    if (!this.triggerWhitelist.includes(ev.target as HTMLElement)) this.toggleActive(false);
  }
}

interface IDropdownItemProps extends JSX.HTMLAttributes {
  active?: boolean;
  href?: string;
  isContent?: boolean;

  onClick?(ev: MouseEvent): void;
}

export function DropdownItem({ active, href, isContent, onClick, children, ...props }: RenderableProps<IDropdownItemProps>) {
  const classes = classnames("dropdown-item", { "is-active": active });
  if (isContent) {
    return (
      <div {...props} class={classes}>
        <div class="content">{children}</div>
      </div>
    );
  } else {
    return (
      <a {...props} href={href || "#"} class={classes} onClick={ev => onClick && onClick(ev)}>
        {children}
      </a>
    );
  }
}

export function DropdownDivider({ class: klass, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <hr {...props} class={classnames("dropdown-divider", klass)}/>;
}
