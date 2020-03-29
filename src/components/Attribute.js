import React from 'react';

class Attribute extends React.Component{
    handleClickPlus= (event)=>{
        if(this.props.attributeValue === 10){
            return;
        }
       
        this.props.changeAttribute(this.props.attributeNumber,'plus');
    }
    handleClickMinus= (event)=>{
        if(this.props.attributeValue === 1){
            return;
        }
        this.props.changeAttribute(this.props.attributeNumber,'minus');
    }

    handleNameClick=()=>{
        this.props.changeHelpDisplay(this.props.attributeName);
    }

    render(){
        return (<>
            <p className="text" onClick={this.handleNameClick}>{this.props.attributeName}
            <button className="text" onClick={this.handleClickMinus}>-</button>
            {this.props.attributeValue}
            <button className="text" onClick={this.handleClickPlus}>+</button>
            </p>   
            </>
        )
    }
}

export default Attribute;