import React from 'react';

class HelpText extends React.Component{
    render(){
        return (<div className="help">
            <h3>Help Text</h3>
            <p>{this.props.helpText}</p>
            </div>
        )
    }
}

export default HelpText;