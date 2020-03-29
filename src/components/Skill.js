import React from 'react';

class Skill extends React.Component{

    handleNameClick=()=>{
        this.props.changeHelpDisplay(this.props.skillName);
    }

    handleCheck = (event) =>{
        console.log(event.target.checked);
        if(event.target.checked){
            if(this.props.tagSkills>0){
                this.props.tagASkill(this.props.skillID);
            }else{
                this.refs['checkBoxRef'].checked=!this.refs['checkBoxRef'].checked;
            }
        }else{
            this.props.unTagASkill(this.props.skillID);
        }
    };
    render(){
        return (<React.Fragment>
            <p className="text" onClick={this.handleNameClick}><input type="checkbox" ref={'checkBoxRef'} onChange={this.handleCheck}/> {this.props.skillName}  {this.props.skillPercent}% </p>
        
            </React.Fragment>
        )
    }
}

export default Skill;