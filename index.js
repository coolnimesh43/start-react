import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Header from './component/Header';
import Sidebar from './component/Sidebar';

class App extends Component{

    constructor(){
        super();
        this.state={
            a: false
        }
        this.changeValue=this.changeValue.bind(this);
    }

    changeValue(value){
        this.setState({
            a: true
        });
    }


    render() {
     let attribute="This is hello world!!";
     return (
         <div>
                <Header passingValue={attribute} changingVar={this.state.a} changeValue={this.changeValue}/>
         </div>);
 }
}

ReactDom.render(<App/>,document.getElementById("react-container"));