import React, { Component } from 'react';



class Odometer extends Component {

    constructor(props) {
        super();
        this.state = {
            k: 0,
            h: 0,
            t: 0,
            s: 0,
            r: 0,
        }
    }

    incrementOne = () => {
        this.setState({ s: this.state.s + 1 })
        console.log(this.state.s)
    }
    incrementTen = () => {
        if (this.state.s === 9) { this.setState({ s: this.state.s - 9 }) }
        this.setState({ t: this.state.t + 1 })
        console.log(this.state.t)
    }
    incrementHundred = () => {
        if (this.state.t === 9) { this.setState({ t: this.state.t - 9 }) }
        this.setState({ h: this.state.h + 1 })
        console.log(this.state.h)
    }
    incrementThousand = () => {
        if (this.state.h === 9) { this.setState({ h: this.state.h - 9 }) }
        this.setState({ k: this.state.k + 1 })
        console.log(this.state.k)
    }

    remainder = () => {
        this.setState({ r: this.state.r + this.state.k * 1000 + this.state.h * 100 + this.state.t * 10 + this.state.s });
        this.setState({
            k: 0,
            h: 0,
            t: 0,
            s: 0,
        })
    }


    render() {

        return (
            <div>
                <p>This is the Odometer</p>
                <p>{this.state.k}{this.state.h}{this.state.t}{this.state.s}</p>
                <button onClick={this.state.s <= 8 ? this.incrementOne : this.incrementTen}>Increment by one</button>
                <button onClick={this.state.t <= 8 ? this.incrementTen : this.incrementHundred}>Increment by tens</button>
                <button onClick={this.state.h <= 8 ? this.incrementHundred : this.incrementThousand}>Increment by a hundred</button>
                <button onClick={this.state.k <= 8 ? this.incrementThousand : this.remainder}>Increment by a thousand</button>
                <p>Remainder: {this.state.r}</p>
            </div >
        )
    }
}



export default Odometer