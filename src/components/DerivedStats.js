import React from 'react';
import Stat from './Stat';

class DerivedStats extends React.Component{
    render(){
        return (<div className="derived">

            <h3>Derived Stats</h3>
            <Stat statName="Armor Class" statValue={this.props.derivedStats.armorClass} changeHelpDisplay={this.props.changeHelpDisplay}></Stat>
            <Stat statName="Action Points" statValue={this.props.derivedStats.actionPoints} changeHelpDisplay={this.props.changeHelpDisplay}></Stat>
            <Stat statName="Carry Weight" statValue={this.props.derivedStats.carryWeight} changeHelpDisplay={this.props.changeHelpDisplay}></Stat>
            <Stat statName="Melee Damage" statValue={this.props.derivedStats.meleeDamage} changeHelpDisplay={this.props.changeHelpDisplay}></Stat>
            <Stat statName="Damage Resistance" statValue={this.props.derivedStats.damageResistance} changeHelpDisplay={this.props.changeHelpDisplay}></Stat>
            <Stat statName="Poison Resistance" statValue={this.props.derivedStats.poisonRes} changeHelpDisplay={this.props.changeHelpDisplay}></Stat>
            <Stat statName="Radiation Resistance" statValue={this.props.derivedStats.radRes} changeHelpDisplay={this.props.changeHelpDisplay}></Stat>
            <Stat statName="Sequence" statValue={this.props.derivedStats.seq} changeHelpDisplay={this.props.changeHelpDisplay}></Stat>
            <Stat statName="Healing Rate" statValue={this.props.derivedStats.healRate} changeHelpDisplay={this.props.changeHelpDisplay}></Stat>
            <Stat statName="Critical Chance" statValue={this.props.derivedStats.critChance} changeHelpDisplay={this.props.changeHelpDisplay}></Stat>
            </div>
        )
    }
}

export default DerivedStats;