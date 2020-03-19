import classnames from "classnames";
import { h, JSX, RenderableProps } from "preact";

interface IContainerProps extends JSX.HTMLAttributes {
  fluid?: boolean;
  fullwidth?: string;
}

export function Container({ fluid, fullwidth, class: klass, children, ...props }: RenderableProps<IContainerProps>) {
  const classes = classnames("container", {
    "is-fluid": !!fluid,
    [`is-${fullwidth}`]: !!fullwidth
  }, klass);
  return <div {...props} class={classes}>{children}</div>;
}

interface ILevelProps extends JSX.HTMLAttributes {
  mobile?: boolean;
}

function LevelWidget({ mobile, class: klass, children, ...props }: RenderableProps<ILevelProps>) {
  const classes = classnames("level", { "is-mobile": mobile }, klass);
  return <div {...props} class={classes}>{children}</div>;
}

function LevelItem({ class: klass, children, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <div {...props} class={classnames("level-item", klass)}>{children}</div>;
}

interface ILevelSideProps extends JSX.HTMLAttributes {
  side: "left" | "right";
}

function LevelSide({ side, class: klass, children, ...props }: RenderableProps<ILevelSideProps>) {
  const classes = classnames(`level-${side}`, klass);
  return <div {...props} class={classes}>{children}</div>;
}

// tslint:disable-next-line:variable-name
export const Level = {
  Level: LevelWidget,
  Item: LevelItem,
  Left: ({ children }) => <LevelSide side="left">{children}</LevelSide>,
  Right: ({ children }) => <LevelSide side="right">{children}</LevelSide>,
  Side: LevelSide
};

function MediaWidget({ class: klass, children, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <article {...props} class={classnames("media", klass)}>{children}</article>;
}

function MediaLeft({ children, class: klass, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <figure {...props} class={classnames("media-left", klass)}>{children}</figure>;
}

function MediaRight({ children, class: klass, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <div {...props} class={classnames("media-right", klass)}>{children}</div>;
}

function MediaContent({ children, class: klass, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <div {...props} class={classnames("media-content", klass)}>{children}</div>;
}

// tslint:disable-next-line:variable-name
export const Media = {
  Media: MediaWidget,
  Content: MediaContent,
  Left: MediaLeft,
  Right: MediaRight
};

interface IHeroProps extends Omit<JSX.HTMLAttributes, "size"> {
  color?: string;
  bold?: boolean;
  size?: "medium" | "large" | "fullHeight";
}

function HeroWidget({ color, bold, size, class: klass, children, ...props }: RenderableProps<IHeroProps>) {
  const classes = classnames("hero", {
    "is-bold": bold,
    [`is-${color}`]: !!color,
    [`is-${size && size.toLowerCase()}`]: !!size
  }, klass);
  return <section {...props} class={classes}>{children}</section>;
}

function HeroHead({ class: klass, children, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <div {...props} class={classnames("hero-head", klass)}>{children}</div>;
}

function HeroBody({ class: klass, children, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <div {...props} class={classnames("hero-body", klass)}>{children}</div>;
}

function HeroFoot({ class: klass, children, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <div {...props} class={classnames("hero-foot", klass)}>{children}</div>;
}

// tslint:disable-next-line:variable-name
export const Hero = {
  Hero: HeroWidget,
  Body: HeroBody,
  Header: HeroHead,
  Footer: HeroFoot
};

interface ISectionProps extends Omit<JSX.HTMLAttributes, "size"> {
  size?: "medium" | "large";
}

export function Section({ size, children, class: klass, ...props }: RenderableProps<ISectionProps>) {
  const classes = classnames("section", { [`is-${size}`]: !!size }, klass);
  return <section {...props} class={classes}>{children}</section>;
}

export function Footer({ class: klass, children, ...props }: RenderableProps<JSX.HTMLAttributes>) {
  return <footer {...props} class={classnames("footer", klass)}>{children}</footer>;
}

interface ITileProps extends Omit<JSX.HTMLAttributes, "size"> {
  ancestor?: boolean;
  parent?: boolean;
  child?: boolean;
  vertical?: boolean;
  color?: string;
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
}

export function Tile({ ancestor, parent, child, vertical, color, size, class: klass, children, ...props }: RenderableProps<ITileProps>) {
  const classes = classnames("tile", {
    "is-ancestor": ancestor,
    "is-parent": parent,
    "is-child": child,
    "is-vertical": vertical,
    [`is-${color}`]: !!color,
    [`is-${size}`]: !!size
  }, klass);

  return <div {...props} class={classes}>{children}</div>;
}
