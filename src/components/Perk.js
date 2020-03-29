import React from 'react';

class Perk extends React.Component{

    handleNameClick=()=>{
        this.props.changeHelpDisplay(this.props.perkName);
    }

    handleChange = (event) =>{
        if(event.target.checked){
            if(this.props.perksTaken<2){
                this.props.perkChange(1,this.props.perkID);
            }else{
                this.refs['checkBoxRef'].checked=!this.refs['checkBoxRef'].checked;
            }
        }else{
            this.props.perkChange(-1,this.props.perkID);
        }
    };

    render(){
        return (<React.Fragment>
            <p className="text" onClick={this.handleNameClick}>{this.props.perkName} <input type="checkbox" ref={'checkBoxRef'} onChange={this.handleChange}/>  </p>
        
            </React.Fragment>
        )
    }
}

export default Perk;