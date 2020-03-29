import React from 'react';
import Perk from './Perk';

class PerkSelector extends React.Component {
    render() {
        return (
            <div className="perks">
                <h3>Traits</h3>
                <div className="perkDisplay">
                    <div className="perkLeft">
                        <Perk perkName="Fast Metabolism" perksTaken={this.props.perksTaken} perkID={0} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>
                        <Perk perkName="Bloody Mess" perksTaken={this.props.perksTaken} perkID={1} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>
                        <Perk perkName="Bruiser" perksTaken={this.props.perksTaken} perkID={2} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>
                        <Perk perkName="Jinxed" perksTaken={this.props.perksTaken} perkID={3} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>
                        <Perk perkName="Small Frame" perksTaken={this.props.perksTaken} perkID={4} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>
                        <Perk perkName="Good Natured" perksTaken={this.props.perksTaken} perkID={5} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>
                        <Perk perkName="One Hander" perksTaken={this.props.perksTaken} perkID={6} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>
                        <Perk perkName="Chem Reliant" perksTaken={this.props.perksTaken} perkID={7} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>
                    </div>
                    <div className="perkRight">
                        <Perk perkName="Finesse" perksTaken={this.props.perksTaken} perkID={8} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>
                        <Perk perkName="Chem Resistant" perksTaken={this.props.perksTaken} perkID={9} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>
                        <Perk perkName="Kamikaze" perksTaken={this.props.perksTaken} perkID={10} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>
                        <Perk perkName="Sex Appeal" perksTaken={this.props.perksTaken} perkID={11} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>
                        <Perk perkName="Heavy Handed" perksTaken={this.props.perksTaken} perkID={12} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>
                        <Perk perkName="Skilled" perksTaken={this.props.perksTaken} perkID={13} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>
                        <Perk perkName="Fast Shot" perksTaken={this.props.perksTaken} perkID={14} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>
                        <Perk perkName="Gifted" perksTaken={this.props.perksTaken} perkID={15} perkChange={this.props.perkChange} changeHelpDisplay={this.props.changeHelpDisplay}></Perk>

                    </div>
                </div>

            </div>
        )
    }
}

export default PerkSelector;