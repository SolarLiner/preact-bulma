import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Breadcrumbs from "../../src/components/Breadcrumbs";
import { ALIGNMENT, SEPARATORS } from "../../src/components/Breadcrumbs/Breadcrumbs";

storiesOf("Components", module)
  .addDecorator(withKnobs)
  .add("Breadcrumbs", () => (
    <Breadcrumbs.Breadcrumb
      separator={select("Separator", Object.keys(SEPARATORS), "bullet")}
      align={select("Align", Object.keys(ALIGNMENT), "left")}
    >
      <Breadcrumbs.Link>Blogs</Breadcrumbs.Link>
      <Breadcrumbs.Link>Infinite Series</Breadcrumbs.Link>
      <Breadcrumbs.Link active>
        Anti-realism: How mathematicians think math is invented, and not discovered
      </Breadcrumbs.Link>
    </Breadcrumbs.Breadcrumb>
  ));
