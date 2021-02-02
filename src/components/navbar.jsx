import React, { Component } from 'react';
class NavBar extends Component {
    // state = {  }
    render() { 
        return ( <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1"><strong>Navigation Bar <span className="badge badge-secondary sm m-2">{this.props.totalCounters}</span></strong></span>
      </nav>
         );
    }
}
 
export default NavBar;