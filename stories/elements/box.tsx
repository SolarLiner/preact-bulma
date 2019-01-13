import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import { Box } from "../../src/elements";

storiesOf("Elements", module).add("Box", () => (
  <Box>
    <p className="content">
      <b>Lorem ipsum dolor.</b> Sit amet consectetur adipisicing elit. Ad aperiam, itaque voluptatum sapiente quo
      numquam laborum, beatae doloremque minima laudantium et qui error, deserunt voluptate. Possimus animi quam dolorem
      tenetur.
    </p>
  </Box>
));
