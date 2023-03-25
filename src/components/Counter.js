import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increaseCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }
    decreaseCount = () => {
        this.setState(prevState => {
            return {count: prevState.count - 1}
        })
    }

    render () {
        return (
            <div className="outerDiv">
                <p className="message">{this.props.message}</p>
                <p className="counter">{this.state.count}</p>
                <div className="innerDiv">
                    <button className="increaseButton" onClick={this.increaseCount}>+1</button>
                    <button className="decreaseButton" onClick={this.decreaseCount}>-1</button>
                </div>
            </div>
    )
    }
}