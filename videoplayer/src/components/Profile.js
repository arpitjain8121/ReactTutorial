import React from 'react';


class Profile extends React.Component{
    render(){
        
        return(
            <div>
                <h1>You are requested profile with id: {this.props.match.params.profile_id}</h1>

            </div>
        )
    }
}

export default Profile