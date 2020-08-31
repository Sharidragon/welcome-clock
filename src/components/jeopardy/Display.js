import React from 'react'

function Display(props) {
    let category = "loading";

        if(props.category){
            category = props.category.title

        }
    return (

        <div>
        <strong>Users Score: </strong>{props.score} <br/>   
        <strong>Question: </strong>{props.question} <br/>
        <strong>Value: </strong>{props.value} <br/>
        <strong>Category: </strong>{category} <br/>
        </div>
    );
}

export default Display;