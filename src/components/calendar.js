import React, { Component } from 'react'

import Header from './header'
import Weeks from './weeks'
import Footer from './footer'

export default class Calender extends Component {
    constructor(props){
        super(props)

        this.monthList = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

        this.now = this.calculateDateData()

        this.state = {
            month: {},
            monthData: []
        }
    }

    calculateDateData() {
        const now = new Date()
        const month = this.monthList[now.getMonth()]
        const year = now.getFullYear()
        return { month, year }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/months')
            .then((response) => response.json())
            .then((data) => {
                console.log("API Data:", data),
                    this.setState({
                        monthData: data,
                        month: data.filter(
                            (month) =>
                                month.name === this.now.month &&
                                month.year === this.now.year
                        )[0],
                    });
            });
    }

    render(){
        return(
            <div className='calendar-container'>
                <h2>calendar by spencer</h2>
                <Header monthName={this.state.month.name} />
                <Weeks month={this.state.month} />
                <Footer year={this.state.month.year} />
            </div>
        )
    }
}