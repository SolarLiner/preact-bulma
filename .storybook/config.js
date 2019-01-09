import React from "react";
import { configure, addDecorator } from "@storybook/preact";

import "bulma/css/bulma.min.css";

addDecorator(story => (
  <section className="section">
    <div className="container">{story()}</div>
  </section>
));

function loadStories() {
  require("../stories");
}

configure(loadStories, module);
