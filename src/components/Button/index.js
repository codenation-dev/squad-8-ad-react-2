import React from "react";
import { Button } from "./styles"
import { MdSearch, MdLoop } from "react-icons/md";
import { FaSpinner } from 'react-icons/fa';
export default (props) => {
    return(
        <Button {...props}>
        {props.loading? <FaSpinner>oi</FaSpinner>:<MdSearch size={18} color="rgba(8, 81, 145, 0.7)" />}
        </Button>
    )
}