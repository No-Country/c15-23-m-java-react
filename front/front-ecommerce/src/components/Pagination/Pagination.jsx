/* eslint-disable react/prop-types */

import './styles.css';
import _ from 'lodash'
 
const Pagination = (products) => {
const returnPaginationRange = (totalPage, page, limit, siblings) => {
    let totalPageNoInArray = 7 + siblings;
    if(totalPageNoInArray >= totalPage){
        return _.range(1, totalPage + 1);
    }

    let leftSiblingsIndex = Math.max(page - siblings, 1);
    let rightSiblingsIndex = Math.min(page + siblings, totalPage);

    let showLeftDots = leftSiblingsIndex > 2;
    let showRightDots = rightSiblingsIndex < totalPage - 2;

    if(!showLeftDots && showRightDots){
        let leftItemsCount = 3 + 2 * siblings;
        let leftRange = _.range(1, leftItemsCount + 1)
        return [...leftRange, "...", totalPage]
    } 
    else if(showLeftDots && showRightDots){
        let rigthItemsCount = 3 + 2 * siblings;
        let rigthRange = _.range(totalPage - rigthItemsCount + 1, totalPage)
        return [1, "...", ...rigthRange]
    }
    else{
        let middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
        return [1, "...", ...middleRange, " ...", totalPage]
    }
}

let array = returnPaginationRange(products.totalPage, products.page, products.limit, products.siblings)
  return (
    <ul className="pagination pagination-md pagination-lg justify-content-center">
      <li className="page-item"><span onClick={() => products.onPageChange("&laquo;")} className="page-link">&laquo;</span></li>
      <li className="page-item"><span onClick={() => products.onPageChange("&lsaquo;")} className="page-link">&lsaquo;</span></li>
      {array.map(value => (
       (value === products.page ? 
       <li key={value} className="page-item active"><span onClick={() => products.onPageChange(value)} className="page-link">{value}</span></li>
        : <li key={value} className="page-item"><span onClick={() => products.onPageChange(value)} className="page-link">{value}</span></li>)

      ))}
      <li className="page-item"><span onClick={() => products.onPageChange("&rsaquo;")} className="page-link">&rsaquo;</span></li>
      <li className="page-item"><span onClick={() => products.onPageChange("&raquo;")} className="page-link">&raquo;</span></li>   
    </ul>
  )
}

export default Pagination
