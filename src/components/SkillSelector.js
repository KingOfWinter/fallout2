import React from 'react';
import Skill from './Skill';

class SkillSelector extends React.Component{
    render(){
        return (<div className="skills">
            <h1>Skills</h1>
            <Skill skillName="Small Guns" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[0]} skillID={0} changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Big Guns" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[1]} skillID={1} changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Energy Weapons" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[2]} skillID={2}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Unarmed" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[3]} skillID={3}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Melee Weapons" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[4]} skillID={4}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Throwing" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[5]} skillID={5}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="First Aid" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[6]} skillID={6}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Doctor" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[7]} skillID={7}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Sneak" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[8]} skillID={8}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Lockpick" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[9]} skillID={9}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Steal" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[10]} skillID={10}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Traps" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[11]} skillID={11}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Repair" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[12]} skillID={12}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Science" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[13]} skillID={13}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Speech" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[14]} skillID={14}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Barter" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[15]} skillID={15}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Gambling" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[16]} skillID={16}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <Skill skillName="Outdoorsman" tagSkills={this.props.tagSkills} tagASkill={this.props.tagASkill} unTagASkill={this.props.unTagASkill} skillPercent = {this.props.skills[17]} skillID={17}changeHelpDisplay={this.props.changeHelpDisplay}/>
            <p>Tag Skills {this.props.tagSkills}</p>
            </div>
        )
    }
}

export default SkillSelector;