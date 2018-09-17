import { h, RenderableProps } from "preact";
import classnames from "classnames";

interface IPaginationProps {
  class?: string;
  pages: number;
  current: number;
  onPageChange?(page: number): void;
}

function generatePages(
  pages: number,
  current: number,
  onPageChange?: (page: number) => void
) {
  return [...new Array(pages)].map((_val, idx) => idx + 1).map(idx => (
    <li>
      <a
        class={classnames("pagination-link", {
          "is-current": idx == current
        })}
        aria-label={`Page ${idx}`}
        onClick={_ev => onPageChange && onPageChange(idx)}
      >
        {idx}
      </a>
    </li>
  ));
}

function generatePageRange(
  start: number,
  end: number,
  current: number,
  onPageChange?: (page: number) => void
) {
  return [...new Array(end - start + 1)]
    .map((_val, idx) => idx + start)
    .map(idx => (
      <li>
        <a
          class={classnames("pagination-link", {
            "is-current": idx == current
          })}
          aria-label={`Page ${idx}`}
          onClick={_ev => onPageChange && onPageChange(idx)}
        >
          {idx}
        </a>
      </li>
    ));
}

function generatePagination(props: IPaginationProps) {
  if (props.pages < 5) {
    const pages = generatePages(props.pages, props.current, props.onPageChange);
    return <ul class="pagination-list">{pages}</ul>;
  } else {
    if (props.current < 4) {
      const pages = generatePages(5, props.current, props.onPageChange);
      return (
        <ul class="pagination-list">
          {pages}
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
        </ul>
      );
    } else if (props.current < props.pages - 4) {
      const pages = generatePageRange(
        props.pages - 5,
        props.pages,
        props.current,
        props.onPageChange
      );
      return (
        <ul class="pagination-list">
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          {pages}
        </ul>
      );
    } else {
      const pages = generatePageRange(
        props.current - 2,
        props.current + 2,
        props.current,
        props.onPageChange
      );
      return (
        <ul class="pagination-list">
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          {pages}
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
        </ul>
      );
    }
  }
}

export default function Pagination(props: RenderableProps<IPaginationProps>) {
  const classes = classnames("pagination", props.class);
  return (
    <nav class={classes} role="pagination" aria-label="pagination">
      <a
        class="pagination-previous"
        disabled={props.current == 0}
        onClick={_ev =>
          props.onPageChange && props.onPageChange(props.current - 1)
        }
      >
        Previous
      </a>
      <a
        class="pagination-next"
        disabled={props.current == props.pages - 1}
        onClick={_ev =>
          props.onPageChange && props.onPageChange(props.current + 1)
        }
      >
        Next
      </a>
      {generatePagination(props)}
    </nav>
  );
}
