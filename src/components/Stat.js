import React from 'react';

class Stat extends React.Component{

    handleNameClick=()=>{
        this.props.changeHelpDisplay(this.props.statName);
    }


    render(){
        return (<React.Fragment>
            <div className="stat"> <div className="text" onClick={this.handleNameClick}>{this.props.statName}</div> <div>{this.props.statValue} </div></div>
           
        
            </React.Fragment>
        )
    }
}

export default Stat;