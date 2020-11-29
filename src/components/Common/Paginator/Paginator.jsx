import React, { useState } from 'react';
import style from './Paginator.module.css';

let Paginator = ({totalItemCount, pageSize, currentPage, onPageChange, portionSize=15}) => {

    let pagesCount = Math.ceil(totalItemCount / pageSize)

    let pages = []
    for (let i=1; i <= pagesCount; i++){
        pages.push(i)
    }

   let portionCount = Math.ceil(pagesCount / portionSize)
   let [portionNumber, setPortionNumber] = useState(1)
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
   let rightPortionPageNumber = portionNumber * portionSize 

    return (
        <div className={style.pagination}>

            {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((page, index) => {
                    return <span key={index} className={currentPage === page && style.selected_page} onClick={() => {onPageChange(page)}}>{page}</span>
                })}

            {portionCount > portionNumber && 
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>}

        </div>
    )
}

export default Paginator