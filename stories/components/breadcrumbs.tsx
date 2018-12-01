import { storiesOf } from "@storybook/react";
import { h } from "preact";

import Breadcrumbs from "../../src/components/Breadcrumbs";

storiesOf("Components/Breadcrumbs", module).add("Simple", () => (
  <Breadcrumbs.Breadcrumb>
    <Breadcrumbs.Link>Blogs</Breadcrumbs.Link>
    <Breadcrumbs.Link>Infinite Series</Breadcrumbs.Link>
    <Breadcrumbs.Link active>
      Anti-realism: How mathematicians think math is invented, and not
      discovered
    </Breadcrumbs.Link>
  </Breadcrumbs.Breadcrumb>
)).add("With bullet separators", () => (
  <Breadcrumbs.Breadcrumb separator="bullet">
    <Breadcrumbs.Link>Blogs</Breadcrumbs.Link>
    <Breadcrumbs.Link>Infinite Series</Breadcrumbs.Link>
    <Breadcrumbs.Link active>
      Anti-realism: How mathematicians think math is invented, and not
      discovered
    </Breadcrumbs.Link>
  </Breadcrumbs.Breadcrumb>
))
