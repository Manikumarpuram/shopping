import React, { Component } from 'react';
// import ReactDom from 'react-dom';


class Counter extends Component {
    // state = { 
    //     value : this.props.counter.value,
    //     // tags: ["tag1", "tag2", "tag3", "tag4"],

    //     // imageUrl : 'https://picsum.photos/200'
    //  };    
    //  styles = {
    //      fontSize : 20,
    //      fontWeight : "bold"
    //  };
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // handleIncrement = product => {
    //     // console.log(product); 
    //     this.setState({ value: this.state.value + 1});
    // };
    // doHandleIncrement = () => {
    //     this.handleIncrement({ id: 1});
    // };
//     renderTags(){
//         if (this.state.tags.length === 0) return<p> there are no tags !</p>;
//      return <ul>
//      {this.state.tags.map(tag => <li key={tag}>{ tag  }</li>)}
     
//  </ul>
//     }

    render() {
        // console.log("props", this.props);
        
        return (
            <div>
                <h4>Counter: {this.props.counter.id}</h4>
                {/* <img src={this.state.imageUrl} alt="image"/> */}
                {/* <span style={this.styles}className="badge badge-primary m-2">{this.formatCount()}</span> */}
                {/* <span style={{fontSize:30}}className="badge badge-primary m-2">{this.formatCount()}</span> */}
                {/* <span className="badge badge-primary m-2">{this.formatCount()}</span> */}
                 <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() =>this.props.onIncrement(this.props.counter )} 
                className="btn btn-secondary btn-sm m-2">
                    Increment
                    </button>
                <button  onClick={()=>this.props.onDelete(this.props.counter.id) }
                className="btn btn-danger btn-sm m-2">
                    Delete
                    </button>
                {/* <h1 >hello</h1> */}
                {/* {this.state.tags.length === 0 && "please enter a tag."}
                {this.renderTags()} */}
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0?'zero': value;
    }
}

export default Counter;