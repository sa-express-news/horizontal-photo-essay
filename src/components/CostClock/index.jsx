

import React, { Component } from 'react';

import './CostClock.css';

class CostClock extends Component {
    props: {
        startDate: Date,
        costPerSecond: number,
        title: string,
    };

    state = {
        totalCost: ((new Date().getTime() / 1000) - (this.props.startDate.getTime() / 1000)) * this.props.costPerSecond
    };

    componentDidMount() {
        this.timerID = setInterval(
        	() => this.incrementCost(),
        	100
        );
    }

    componentWillUnmount(){
    	clearInterval(this.timerID);
    }

    incrementCost() {
        this.setState(prevState => ({
            totalCost: prevState.totalCost + (this.props.costPerSecond /10)
        }));
    }

    render(){
    	//Round the total cost down to two digits for dollars
    	let costAsString = this.state.totalCost.toFixed(2);

    	//Split the string into an array of characters
    	let arrayOfDigits = costAsString.split('');

    	arrayOfDigits.unshift('$');

    	let digitElements = arrayOfDigits.map((digit, index)=>{
    		return <div className='digit' key={index}>{digit}</div>
    	})

    	let day =  1 + Math.floor((new Date() - this.props.startDate) / 86400000);

    	return(
    		<div className='CostClockContainer'>
    			<h4>{this.props.title}</h4>
    			<div className='CostClock'>
    				{digitElements}
    			</div>
    			<p>Day {day}</p>
    		</div>
    	)
    }
}

export default CostClock;