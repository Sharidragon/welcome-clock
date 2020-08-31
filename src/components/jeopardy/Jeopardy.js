import React, { Component } from 'react';

//import our service
import JeopardyService from "../../jeopardyService";
import Submit from "./Submit";
import Display from "./Display";
    
class Jeopardy extends Component {
//set our initial state and set up our service as this.client on this component
    constructor(props){
        super(props);
            this.client = new JeopardyService();
            this.state = {
            data: {},
            score: 0,
            formData: {
            Answer: ''
            }
        }
    }

  //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
            data: result.data[0]
            })
        })
    }

    handleChange = (event) => {
        const formData = {...this.state.formData}
            formData[event.target.name] = event.target.value
            this.setState({formData: {
                Answer:event.target.value
            }});
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        let score = this.state.score
            if (this.state.formData.Answer === this.state.data.answer){
                this.setState ({
                    score: score += this.state.data.value
                })
            }
            else {
                this.setState ({
                    score: score -= this.state.data.value
                })
            }
            this.getNewQuestion()
      }

  //when the component mounts, get a the first question
    componentDidMount() {
        this.getNewQuestion();
    }

  //display the results on the screen
    render() {

    return (
        <div>
            <Submit handleChange = {this.handleChange}  
                    handleSubmit = {this.handleSubmit}/>
            <Display 
                    category = {this.state.data.category}
                    question = {this.state.data.question}
                    value = {this.state.data.value}
                    score = {this.state.score}
                />
                 {this.state.data.answer}           
            </div>
        )}
}

export default Jeopardy;