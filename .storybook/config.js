/** @jsx h */
import { withOptions } from "@storybook/addon-options";
import { configure, addDecorator } from "@storybook/preact";

import { h } from "preact";

import "bulma/css/bulma.min.css";

addDecorator(story => (
  <section className="section">
    <div className="container">{story()}</div>
  </section>
));
addDecorator(withOptions({
  name: "Preact Bulma",
  url: "https://github.com/solarliner/preact-bulma",
  addonPanelInRight: true,
}));

function loadStories() {
  require("../stories");
}

configure(loadStories, module);
