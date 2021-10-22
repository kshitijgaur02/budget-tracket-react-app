import React from "react";
import {TiDelete} from 'react-icons/ti';
import {Badge} from 'react-bootstrap';
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) =>{
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch ({
            type: 'DELETE_EXPENSE' ,
            payload: props.id,
        })
    }

    return(
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='me-3'>
                    <Badge pill bg="primary">${props.cost}</Badge>
                </span>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;