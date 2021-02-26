/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import cn from 'classnames';
import style from './Paginator.module.scss';

const Paginator = ({
  totalItemCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 15,
}) => {
  const pagesCount = Math.ceil(totalItemCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={style.pagination}>
      {portionNumber > 1 && (
        <i
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
          className="fas fa-long-arrow-alt-left"
        ></i>
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((page, index) => (
          <span
            key={index}
            className={cn({
              [style.selected_page]: currentPage === page,
            })}
            onClick={() => {
              onPageChange(page);
            }}
          >
            {page}
          </span>
        ))}

      {portionCount > portionNumber && (
        <i
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
          className="fas fa-long-arrow-alt-right"
        ></i>
      )}
    </div>
  );
};

export default Paginator;
