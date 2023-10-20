import React, {useState} from 'react';
import ExpensesDate from './ExpensesDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // function clickHandle() {}
    const [title, setTitle] = useState(props.title);
    // let title = props.title;
    const clickHandle = () => {
        setTitle('Update!!');
        console.log(title);
    }
    return (
    <Card className="expense-item">
        <ExpensesDate date ={props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandle}>Change title</button>
    </Card>    
    );
}
export default ExpenseItem;