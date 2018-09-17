import { h } from "preact";
import { storiesOf, action } from "@storybook/react";

import Pagination from "../../src/components/Pagination";

storiesOf("Pagination", module)
  .add("Few pages", () => (
    <div>
      <Pagination pages={3} current={1} onPageChange={action("pageChanged")} />
      <Pagination pages={3} current={2} onPageChange={action("pageChanged")} />
      <Pagination pages={3} current={3} onPageChange={action("pageChanged")} />
    </div>
  ))
  .add("Many pages", () => (
    <div>
      <Pagination pages={349} current={2} onPageChange={action("pageChanged")} />
      <Pagination pages={349} current={36} onPageChange={action("pageChanged")} />
      <Pagination pages={349} current={348} onPageChange={action("pageChanged")} />
    </div>
  ));
