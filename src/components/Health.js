import React from 'react';
import Stat from './Stat';


class Health extends React.Component{
    render(){
        return (<div className="health">

            <h3>Health</h3>
            <Stat statName="Hit Points" statValue={this.props.derivedStats.hitPoints} changeHelpDisplay={this.props.changeHelpDisplay}></Stat>
            <p className="text">Poisoned</p>
            <p className="text">Radiated</p>
            <p className="text">Eye Damage</p>
            <p className="text">Crippled Left Leg</p>
            <p className="text">Crippled Right Leg</p>
            <p className="text">Crippled Left Arm</p>
            <p className="text">Crippled Right Arm</p>
            
            
            </div>
        )
    }
}

export default Health;