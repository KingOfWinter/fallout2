import React from 'react';

class CharacterCreator extends React.Component{
    render(){
        return (
            <form className="team-creator">
                 <h2>Please enter a character name</h2>   
                <input type="text" required placeholder="John Miller"></input>
                <button type="submit">Create Your Team</button>
            </form>


        )
    }
}

export default CharacterCreator;