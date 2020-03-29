import React from 'react';
import SpecialSelector from './SpecialSelector';
import PerkSelector from './PerkSelector';
import DerivedStats from './DerivedStats';
import HelpText from './HelpText';
import SkillSelector from './SkillSelector';
import Health from './Health';
import { getHelpText } from '../helpers';



class App extends React.Component {
    state = {
        attributes: [5, 5, 5, 5, 5, 5, 5],
        charPoints: 5,
        skills: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
        tagSkills: 3,
        perks: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        perksTaken: 0,
        helpText: "Click on Something to Learn More",
        derivedStats: {
            actionPoints: 7,
            armorClass: 5,
            carryWeight: 150,
            critChance: 5,
            damageResistance: 0,
            healRate: 1,
            hitPoints: 30,
            meleeDamage: 1,
            partyLimit: 2,
            perkRate: 3,
            poisonRes: 25,
            radRes: 10,
            seq: 10,
            skillRate: 15
        }
    };

    changeHelpDisplay = (thing) => {
        let helpText = getHelpText(thing);
        this.setState({
            helpText: helpText
        });
    }

    changeAttribute = (att, operation) => {
        const attributes = { ...this.state.attributes };
        const skills = { ...this.state.skills };
        const derivedStats ={ ...this.state.derivedStats};
        let charPoints = this.state.charPoints;
        if (operation === 'plus' && charPoints > 0) {
            attributes[att] = attributes[att] + 1;
            charPoints = charPoints - 1;
            switch(att) {
                case 0: //Strength
                  skills[3]+=2; //Unarmed
                  skills[4]+=2; //Melee
                  derivedStats.carryWeight+=25;
                  break;
                case 1:
                  // code block
                  break;
                  case 2:
                  // code block
                  break;
                case 3:
                  // code block
                  break;
                case 4:
                  // code block
                  break;
                case 5:
                  // code block
                  break;
                case 6:
                    // code block
                    break;
                default:
                  // code block
              } 

        } else if (operation === 'minus') {
            attributes[att] = attributes[att] - 1;
            charPoints = charPoints + 1;
            switch(att) {
                case 0: //Strength
                  skills[3]-=2; //Unarmed
                  skills[4]-=2; //Melee
                  break;
                case 1:
                  // code block
                  break;
                  case 2:
                  // code block
                  break;
                case 3:
                  // code block
                  break;
                case 4:
                  // code block
                  break;
                case 5:
                  // code block
                  break;
                case 6:
                    // code block
                    break;
                default:
                  // code block
              } 
        }
        this.setState({
            attributes: attributes,
            charPoints: charPoints
        });
    };

    perkChange = (takenOrRemoved, perkID) => {
        const perksCopy = { ...this.state.perks };
        let perksTaken = this.state.perksTaken;
        if (takenOrRemoved === 1) {
            perksCopy[perkID] = true;
            perksTaken++;
        } else if (takenOrRemoved === -1) {
            perksCopy[perkID] = false;
            perksTaken--;
        }
        this.setState({
            perks: perksCopy,
            perksTaken: perksTaken
        });
        this.triggerCharacterRebuild();
    }

    tagASkill = (skillID) => {
        const skills = { ...this.state.skills };
        let tagSkills = this.state.tagSkills;
        if (tagSkills > 0) {
            skills[skillID] += 20;
            tagSkills--;
        }
        this.setState({
            skills: skills,
            tagSkills: tagSkills
        });
    };

    unTagASkill = (skillID) => {
        const skills = { ...this.state.skills };
        let tagSkills = this.state.tagSkills;

        skills[skillID] -= 20;
        tagSkills++;

        this.setState({
            skills: skills,
            tagSkills: tagSkills
        });
    };














































    render() {
        return (
            <div className="character-creation">
                <div className="leftSide">
                    <div className="leftUpper">
                        <div className="leftUpperLeft">
                            <SpecialSelector
                                changeHelpDisplay={this.changeHelpDisplay}
                                changeAttribute={this.changeAttribute}
                                attributes={this.state.attributes}
                                charPoints={this.state.charPoints} />
                        </div>
                        <div className="leftUpperRight">
                            <Health derivedStats={this.state.derivedStats} changeHelpDisplay={this.changeHelpDisplay} />

                            <DerivedStats derivedStats={this.state.derivedStats} changeHelpDisplay={this.changeHelpDisplay} />
                        </div>




                    </div>

                    <div className="leftLower">
                        <PerkSelector perks={this.state.perks} perksTaken={this.state.perksTaken} perkChange={this.perkChange}
                            changeHelpDisplay={this.changeHelpDisplay} />
                    </div>
                </div>




                <div className="rightSide">
                    <SkillSelector
                        skills={this.state.skills}
                        tagSkills={this.state.tagSkills}
                        tagASkill={this.tagASkill}
                        unTagASkill={this.unTagASkill}
                        changeHelpDisplay={this.changeHelpDisplay}
                    />

                    <HelpText helpText={this.state.helpText} />
                </div>



            </div>
        );
    }
}

export default App;