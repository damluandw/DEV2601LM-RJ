import React, { Component } from 'react'

export default class EventParameter extends Component {
    eventHandlerClick1 = (param1) => {
        console.log('event Handler Click1', param1)
    }
    eventHandlerClick2 = (param2) => {
        console.log('event Handler Click2', param2)
    }
    render() {
        return (
            <div>
                {/* <button onClick={this.eventHandlerClick1('Parameter 1')}>Click Me</button> */}
                <button onClick={() => this.eventHandlerClick2('Parameter 2')}>Click Me Too</button>
            </div>
        )
    }
}
