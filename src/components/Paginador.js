import React from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import "../stylesheets/container.css"

const Paginador = ({ onLeftClick, onRightClick, page, totalPages }) => {


    return (
        <div className="paginador">
            <button onClick={onLeftClick}><BsChevronDoubleLeft /> </button>
            <div> {page} de {totalPages} </div>
            <button onClick={onRightClick}><BsChevronDoubleRight /> </button>
        </div>
    )
}

export default Paginador;