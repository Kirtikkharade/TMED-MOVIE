import React from 'react'
import {Button} from "../Button/index"
import "./index.css"

const index = ({ currentPage, totalPages, handleNext, handlePrev}) => {
  return (
    <div className="pagination">
        <Button onClick={handlePrev} disabled={currentPage === 1} text="prev"/>
        <span>{currentPage} / {totalPages}</span>
        <Button onClick={handleNext} disabled={currentPage === totalPages} text="next"/>
    </div>
  )
}

export default index