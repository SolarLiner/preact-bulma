import { h } from "preact";
import { storiesOf, action } from "@storybook/react";

import Pagination from "../../src/components/Pagination";

storiesOf("Components/Pagination", module)
  .add("Few pages", () => (
    <div>
      <Pagination
        pages={[1, 2, 3]}
        current={1}
        onPageChange={action("pageChanged")}
      />
      <Pagination
        pages={[1, 2, 3]}
        current={2}
        onPageChange={action("pageChanged")}
      />
      <Pagination
        pages={[1, 2, 3]}
        current={3}
        onPageChange={action("pageChanged")}
      />
    </div>
  ))
  .add("Many pages", () => (
    <div>
      <Pagination
        pages={[1, null, 245, 246, 247, null, 349]}
        current={246}
        onPageChange={action("pageChanged")}
      />
      <Pagination
        pages={[1, null, 245, 246, 247, null, 349]}
        current={246}
        onPageChange={action("pageChanged")}
      />
      <Pagination
        pages={[1, null, 245, 246, 247, null, 349]}
        current={246}
        onPageChange={action("pageChanged")}
      />
    </div>
  ))
  .add("Rounded", () => (
    <div>
      <Pagination
        pages={[1, 2, 3, 4, 5, null]}
        current={4}
        class="is-rounded"
        onPageChange={action("pageChange")}
      />
    </div>
  ));
