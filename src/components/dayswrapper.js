import React, { Component } from 'react'

export default class DaysWrapper extends Component{
    constructor(props){
        super(props)

        const reminder = props.month ? props.month.reminders.filter(reminders => reminders.date === props.date)[0] : null

        this.state = {
            textInput: '',
            reminderExists: reminder ? reminder.text : ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        if (this.state.reminderExists && this.state.textInput !== '') {
            fetch('http://127.0.0.1:5000/reminder/add', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    text: this.state.textInput,
                    date: this.props.date,
                    month_id: this.props.month.id
                })
            })
            .then(response => response.json())
            .then(data => {
                if (typeof data === "string") {
                    console.log(data)
                }else {
                    this.setState({
                        reminderExists: true
                    })
                }
            })
            .catch(error => console.log('an error occured', error))
        } else if(this.state.reminderExists && this.state.textInput !== '') {
            fetch(`http://127.0.0.1:5000/reminder/update/${this.props.month.id}/${this.props.month.date}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    text: this.state.textInput,
                })
            })
        }
    }

    render(){
        return(
            <div className={this.props.overflow ? "day-overflow" : "day"}>
                <span className='date'>{this.props.date}</span>
                <textarea 
                className="reminderField"
                disabled={this.props.overflow}
                value={this.state.textInput}
                onChange={(event => 
                    this.setState({textInput: event.target.value})).bind(this)}
                ></textarea>
            </div>
        )
    }
}