import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";
import Content from "../../src/elements/content";

const SIZES = {
  Small: "small",
  Normal: "",
  Medium: "medium",
  Large: "large"
};

const LISTS_TYPES = ["1", "A", "a", "I", "i"];

storiesOf("Elements", module)
  .addDecorator(withKnobs)
  .add("Content", () => (
    <Content size={select("Size", SIZES, "")}>
      <h1>Lorem ipsum</h1>
      <p>by Some Latin Guy</p>
      <hr/>
      <p>
        <b>Lorem ipsum dolor sit</b> amet consectetur adipisicing elit. Ut delectus harum voluptatem, molestiae
        recusandae dolore blanditiis eos inventore dignissimos ea, <i>cupiditate iure consequatur</i>, voluptatum
        quisquam reiciendis deserunt iusto reprehenderit quaerat!
      </p>
      <ol type={select("Ordered list type", LISTS_TYPES)}>
        <li>Lorem</li>
        <li>Ipsum</li>
        <li>Dolor</li>
        <li>Sit</li>
      </ol>
    </Content>
  ));
