import { number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Pagination from "../../src/components/Pagination";

function pagination(current: number, last: number, delta = 2) {
  const left = current - delta;
  const right = current + delta + 1;
  const range = [];
  const rangeWithDots = [];
  let l: number;

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push(null);
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}

storiesOf("Components", module)
  .addDecorator(withKnobs)
  .add("Pagination", () => {
    const page = number("Page", 1, { range: true, min: 1, max: 500, step: 1 });
    const pages = number("Pages", 100, { range: true, min: 1, max: 500, step: 5 });

    return <Pagination pages={pagination(page, pages)} current={page} />;
  });
