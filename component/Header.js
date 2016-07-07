import React from 'react';
import ReactDom from 'react-dom';

export default class Header extends React.Component{
    content(){
        if(this.props.changingVar){
            return <div>This is a div from function</div>
        }

    }
    render(){
        return (<div onClick={() => this.props.changeValue()}>
                    <div>Passing value: {this.props.passingValue}</div>
                    <div>Changing variable {this.props.changingVar}</div>
            {this.content()}
        </div>)
    }
}
