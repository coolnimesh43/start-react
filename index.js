import React,{Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component{

 render() {
     return (
         <div>
                <p>Sano bhai</p>
         </div>);
 }
}

ReactDom.render(<App/>,document.getElementById("react-container"));