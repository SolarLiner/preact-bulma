import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Pagination from "../../src/components/Pagination";

storiesOf("Components/Pagination", module)
  .add("Few pages", () => (
    <div>
      <Pagination pages={[1, 2, 3]} current={1} />
      <Pagination pages={[1, 2, 3]} current={2} />
      <Pagination pages={[1, 2, 3]} current={3} />
    </div>
  ))
  .add("Many pages", () => (
    <div>
      <Pagination pages={[1, null, 245, 246, 247, null, 349]} current={246} />
      <Pagination pages={[1, null, 245, 246, 247, null, 349]} current={246} />
      <Pagination pages={[1, null, 245, 246, 247, null, 349]} current={246} />
    </div>
  ))
  .add("Rounded", () => (
    <div>
      <Pagination pages={[1, 2, 3, 4, 5, null]} current={4} class="is-rounded" />
    </div>
  ));
