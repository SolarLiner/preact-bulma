import classnames from "classnames";
import { h, RenderableProps } from "preact";

interface IContainerProps {
  fluid?: boolean;
  fullwidth?: string;
}

export function Container({ children, ...props }: RenderableProps<IContainerProps>) {
  const classes = classnames("container", {
    "is-fluid": !!props.fluid,
    [`is-${props.fullwidth}`]: !!props.fullwidth
  });
  return <div class={classes}>{children}</div>;
}

interface ILevelProps {
  mobile?: boolean;
}

function LevelWidget({ children, mobile }: RenderableProps<ILevelProps>) {
  const classes = classnames("level", { "is-mobile": mobile });
  return <div class={classes}>{children}</div>;
}

function LevelItem({ children }: RenderableProps<{}>) {
  return <div class="level-item">{children}</div>;
}

interface ILevelSideProps {
  side: "left" | "right";
}

function LevelSide({ children, side }: RenderableProps<ILevelSideProps>) {
  const classes = classnames(`level-${side}`);
  return <div class={classes}>{children}</div>;
}

// tslint:disable-next-line:variable-name
export const Level = {
  Level: LevelWidget,
  Item: LevelItem,
  Left: ({ children }: RenderableProps<{}>) => <LevelSide side="left">{children}</LevelSide>,
  Right: ({ children }: RenderableProps<{}>) => <LevelSide side="right">{children}</LevelSide>,
  Side: LevelSide
};

function MediaWidget({ children }: RenderableProps<{}>) {
  return <article class="media">{children}</article>;
}

function MediaLeft({ children }: RenderableProps<{}>) {
  return <figure class="media-left">{children}</figure>;
}

function MediaRight({ children }: RenderableProps<{}>) {
  return <div class="media-right">{children}</div>;
}

function MediaContent({ children }: RenderableProps<{}>) {
  return <div class="media-content">{children}</div>;
}

// tslint:disable-next-line:variable-name
export const Media = {
  Media: MediaWidget,
  Content: MediaContent,
  Left: MediaLeft,
  Right: MediaRight
};

interface IHeroProps {
  color?: string;
  bold?: boolean;
  size?: "medium" | "large" | "fullHeight";
}

function HeroWidget({ children, ...props }: RenderableProps<IHeroProps>) {
  const classes = classnames("hero", {
    "is-bold": props.bold,
    [`is-${props.color}`]: !!props.color,
    [`is-${props.size && props.size.toLowerCase()}`]: !!props.size
  });
  return <section class={classes}>{children}</section>;
}

function HeroHead({ children }: RenderableProps<{}>) {
  return <div class="hero-head">{children}</div>;
}

function HeroBody({ children }: RenderableProps<{}>) {
  return <div class="hero-body">{children}</div>;
}

function HeroFoot({ children }: RenderableProps<{}>) {
  return <div class="hero-foot">{children}</div>;
}

// tslint:disable-next-line:variable-name
export const Hero = {
  Hero: HeroWidget,
  Body: HeroBody,
  Header: HeroHead,
  Footer: HeroFoot
};

interface ISectionProps {
  size?: "medium" | "large";
}

export function Section({ children, ...props }: RenderableProps<ISectionProps>) {
  const classes = classnames("section", { [`is-${props.size}`]: !!props.size });
  return <section class="section">{children}</section>;
}

export function Footer({ children }: RenderableProps<{}>) {
  return <footer class="footer">{children}</footer>;
}

interface ITileProps {
  ancestor?: boolean;
  parent?: boolean;
  child?: boolean;
  vertical?: boolean;
  color?: string;
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
}

export function Tile({ children, ...props }: RenderableProps<ITileProps>) {
  const classes = classnames("tile", {
    "is-ancestor": props.ancestor,
    "is-parent": props.parent,
    "is-child": props.child,
    "is-vertical": props.vertical,
    [`is-${props.color}`]: !!props.color,
    [`is-${props.size}`]: !!props.size
  });

  return <div class={classes}>{children}</div>;
}
