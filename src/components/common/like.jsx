// import React, { Component } from 'react';

// Input: liked: boolean
// Output: onClick

// class Like extends Component {
//     // state = {  }
//     render() {
//         let classes = 'fa fa-heart';
//         if(!this.props.liked) classes += '-o';
//         return (
//             <i 
//               onClick={this.props.onClick} 
//               style={{ cursor: 'pointer'}} 
//               className={classes} 
//               aria-hidden="true" 
//             />
//         );
//     }
// }
 
const Like = (props) => {
    let classes = 'fa fa-heart';
        if(!props.liked) classes += '-o';
        return (
            <i 
              onClick={props.onClick} 
              style={{ cursor: 'pointer'}} 
              className={classes} 
              aria-hidden="true" 
            />
        );
}
 
// export default Like;
export default Like;