import React from 'react'
import User from './User'

class Users extends React.Component {
    render() {
        if (this.props.users.length > 0)
            return (
                <div>
                    {this.props.users.map((user) => (
                        <User key={user.id} user={user} onEdit={this.props.onEdit} onDelete={this.props.onDelete} />
                    ))}
                </div>)
        else
            return (
                <div>
                    <h3>There is no users</h3>
                </div>
            )

    }
}

export default Users