import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import { Level } from "../../src/layout";

storiesOf("Layout/Level", module)
  .addDecorator(withKnobs)
  .add("Level", () => (
    <Level.Level mobile={boolean("Mobile", false)}>
      <Level.Item>
        <div class="has-text-centered">
          <p className="heading">Tweets</p>
          <p className="title">3,456</p>
        </div>
      </Level.Item>
      <Level.Item>
        <div class="has-text-centered">
          <p className="heading">Following</p>
          <p className="title">123</p>
        </div>
      </Level.Item>
      <Level.Item>
        <div class="has-text-centered">
          <p className="heading">Followers</p>
          <p className="title">456K</p>
        </div>
      </Level.Item>
      <Level.Item>
        <div class="has-text-centered">
          <p className="heading">Likes</p>
          <p className="title">789</p>
        </div>
      </Level.Item>
    </Level.Level>
  ))
  .add("Level with sides", () => (
    <Level.Level mobile={boolean("Mobile", false)}>
      <Level.Left>
        <Level.Item>
          <a href="#">Left 1</a>
        </Level.Item>
        <Level.Item>
          <a href="#">Left 2</a>
        </Level.Item>
        <Level.Item>
          <a href="#">Left 3</a>
        </Level.Item>
      </Level.Left>
      <Level.Item>
        <a href="#">Center</a>
      </Level.Item>
      <Level.Right>
        <Level.Item>
          <a href="#">Right 1</a>
        </Level.Item>
        <Level.Item>
          <a href="#">Right 2</a>
        </Level.Item>
        <Level.Item>
          <a href="#">Right 3</a>
        </Level.Item>
      </Level.Right>
    </Level.Level>
  ));
