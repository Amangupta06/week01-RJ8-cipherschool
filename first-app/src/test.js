import React,{Component} from "react";
import "./test.css";
// const Test = () => {
//   return (
//     <div>
//       <h1 id="testId">Hello, I am Aditya</h1>
//     </div>
//   );
// };


// class Test extends Component{
//     state={
//         isloggedin:false
//     };
//     render(){
//         console.log("Hello");
//         return (
//           <div>
//             {!this.state.isloggedin ? (
//               <h1>you are not logged in</h1>
//             ) : (
//               <h1>congrats, you are logged in</h1>
//             )}
//             <button onClick={(e) =>this.setState({isloggedin :!this.state.isloggedin})}>Login
//             </button>
//           </div>
//         );
//     }
// }

class Test extends Component{
    state = { isloggedIn : false };
    
    render() {
        return (
            <div>
                {!this.state.isloggedIn ? (
                    <h1>You are not Logged In!</h1>
                ) : (
                    <h1>Congratulations, you are logged In!</h1>
                )}
                <button onClick={(e) => this.setState({ isloggedIn: true })}>
                    Login!
                </button>
            </div>
        )
    }
}
export default Test;