import React from 'react';
import Attribute from './Attribute.js';

class SpecialSelector extends React.Component{
    render(){
        return (<div className="special">
            <h1>SPECIAL</h1>
            <p><Attribute changeAttribute={this.props.changeAttribute} attributeValue={this.props.attributes[0]} attributeName="Strength" attributeNumber={0} changeHelpDisplay={this.props.changeHelpDisplay}/></p>
            <p><Attribute changeAttribute={this.props.changeAttribute} attributeValue={this.props.attributes[1]} attributeName="Perception" attributeNumber={1} changeHelpDisplay={this.props.changeHelpDisplay}/></p>
            <p><Attribute changeAttribute={this.props.changeAttribute} attributeValue={this.props.attributes[2]} attributeName="Endurance" attributeNumber={2} changeHelpDisplay={this.props.changeHelpDisplay}/></p>
            <p><Attribute changeAttribute={this.props.changeAttribute} attributeValue={this.props.attributes[3]} attributeName="Charisma" attributeNumber={3} changeHelpDisplay={this.props.changeHelpDisplay}/></p>
            <p><Attribute changeAttribute={this.props.changeAttribute} attributeValue={this.props.attributes[4]} attributeName="Intelligence" attributeNumber={4} changeHelpDisplay={this.props.changeHelpDisplay}/></p>
            <p><Attribute changeAttribute={this.props.changeAttribute} attributeValue={this.props.attributes[5]} attributeName="Agility" attributeNumber={5} changeHelpDisplay={this.props.changeHelpDisplay}/></p>
            <p><Attribute changeAttribute={this.props.changeAttribute} attributeValue={this.props.attributes[6]} attributeName="Luck" attributeNumber={6} changeHelpDisplay={this.props.changeHelpDisplay}/></p>
            <p>CHAR POINTS : {this.props.charPoints}</p>
            </div>
        )
    }
}

export default SpecialSelector;