import classnames from "classnames";
import { h, JSX, RenderableProps } from "preact";

interface IPaginationProps extends JSX.HTMLAttributes {
  pages: number[];
  current: number;

  onPageChange?(page: number): void;
}

function generatePages(pages: number[], current: number, onPageChange: (page: number) => void) {
  return pages.map(page => {
    if (typeof page === "number") {
      return (
        <li>
          <a
            class={classnames("pagination-link", {
              "is-current": page === current
            })}
            aria-label={`Page ${page}`}
            onClick={_ev => onPageChange && page !== current && onPageChange(page)}
          >
            {page}
          </a>
        </li>
      );
    } else {
      return (
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
      );
    }
  });
}

function generatePagination(props: IPaginationProps) {
  const pages = generatePages(props.pages, props.current, props.onPageChange);
  return <ul class="pagination-list">{pages}</ul>;
}

export default function Pagination({ pages, current, onPageChange, class: klass, children: _, ...props }: RenderableProps<IPaginationProps>) {
  const classes = classnames("pagination", klass);
  return (
    <nav class={classes} role="pagination" aria-label="pagination">
      {generatePagination({ pages, current, onPageChange })}
    </nav>
  );
}
