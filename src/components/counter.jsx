import React, { Component } from 'react';
// import ReactDom from 'react-dom';


class Counter extends Component {
    state = { 
        value : this.props.value,
        tags: ["tag1", "tag2", "tag3", "tag4"],

        // imageUrl : 'https://picsum.photos/200'
     };
    //  styles = {
    //      fontSize : 20,
    //      fontWeight : "bold"
    //  };
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    handleIncrement = product => {
        console.log(product); 
        this.setState({ value: this.state.value + 1});
    };
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
                <h4>Counter: {this.props.id}</h4>
                {/* <img src={this.state.imageUrl} alt="image"/> */}
                {/* <span style={this.styles}className="badge badge-primary m-2">{this.formatCount()}</span> */}
                {/* <span style={{fontSize:30}}className="badge badge-primary m-2">{this.formatCount()}</span> */}
                {/* <span className="badge badge-primary m-2">{this.formatCount()}</span> */}
                 <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={(product) => 
        this.handleIncrement( product )} 
                className="btn btn-secondary sm">
                    Increment
                    </button>
                {/* <h1 >hello</h1> */}
                {/* {this.state.tags.length === 0 && "please enter a tag."}
                {this.renderTags()} */}
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.state;
        return count === 0?'zero': count;
    }
}

export default Counter;