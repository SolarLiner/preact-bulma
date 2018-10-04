import { h } from "preact";
import { storiesOf } from "@storybook/react";

import { Level } from "../../src/layout";

storiesOf("Level", module)
  .add("Simple", () => (
    <Level.Level>
      <Level.Left>
        <Level.Item>
          <p class="subtitle is-5">
            <strong>123</strong> posts
          </p>
        </Level.Item>
        <Level.Item>
          <div class="field has-addons">
            <p class="control">
              <input class="input" type="text" placeholder="Find a post" />
            </p>
            <p class="control">
              <button class="button">Search</button>
            </p>
          </div>
        </Level.Item>
      </Level.Left>
      <Level.Item><p class="title">Preact Bulma</p></Level.Item>
      <Level.Right>
        <Level.Item>
          <strong>All</strong>
        </Level.Item>
        <Level.Item>
          <a>Published</a>
        </Level.Item>
        <Level.Item>
          <a>Drafts</a>
        </Level.Item>
        <Level.Item>
          <a>Deleted</a>
        </Level.Item>
        <Level.Item>
          <button class="button is-success">New</button>
        </Level.Item>
      </Level.Right>
    </Level.Level>
  ))
  .add("Centered", () => (
    <Level.Level>
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
  .add("Mobile", () => (
    <Level.Level mobile>
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
  ));
