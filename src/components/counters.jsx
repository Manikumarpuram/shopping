import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {

    render() {
        console.log("counters renderred");
        /*const { onReset, onDelete, onIncrement, counters} = this.props;
        
        // we can use this function using and replace this.props.function to function
        */return (
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset
                </button>
                {this.props.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        counter={counter}
                    // value= {counter.value} 
                    // id= {counter.id}
                    >
                        {/* <h4>Counter {counter.id}
                    </h4> */}
                    </Counter>)}
            </div>
        );
    }
}

export default Counters;