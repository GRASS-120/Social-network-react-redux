import React, { useState } from 'react';
import style from './Paginator.module.css';

let Paginator = ({totalItemCount, pageSize, currentPage, onPageChange, portionSize=15}) => {

    let pagesCount = Math.ceil(totalItemCount / pageSize)

    let pages = []
    for (let i=1; i <= pagesCount; i++){
        pages.push(i)
    };

   let portionCount = Math.ceil(pagesCount / portionSize)
   let [portionNumber, setPortionNumber] = useState(1)
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
   let rightPortionPageNumber = portionNumber * portionSize 

    return (
        <div className={style.pagination}>

            {portionNumber > 1 &&
            <i onClick={() => {setPortionNumber(portionNumber - 1)}} className="fas fa-long-arrow-alt-left"></i>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((page, index) => {
                    return <span key={index} className={currentPage === page && style.selected_page} onClick={() => {onPageChange(page)}}>{page}</span>
                })}

            {portionCount > portionNumber && 
            <i onClick={() => {setPortionNumber(portionNumber + 1)}} className="fas fa-long-arrow-alt-right"></i>}

        </div>
    )
};

export default Paginator;