import React from "react";
import { configure, addDecorator } from "@storybook/react";

import "bulma/css/bulma.min.css";

addDecorator(story => (
  <section className="section">
    <div className="container">
      <div className="level">
        <div className="level-item">{story()}</div>
      </div>
    </div>
  </section>
));

function loadStories() {
  require("../stories");
}

configure(loadStories, module);
