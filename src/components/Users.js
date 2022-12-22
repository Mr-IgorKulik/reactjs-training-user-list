import React from 'react'

class Users extends React.Component {
    users = [
        {
            id: 1,
            firstname: 'admin',
            secondname: 'admin',
            bio: 'Just application SU',
            age: 0,
            isHappy: false
        },
        {
            id: 2,
            firstname: 'Ihor',
            secondname: 'Kulik',
            bio: 'Java developer in NIX family',
            age: 26,
            isHappy: true
        }
    ]

    render() {
        if(this.users.length > 0)
            return (
                <div>
                    {this.users.map((user) => (<div className='user' key={user.id}>
                        <h3>{user.firstname} {user.secondname}</h3>
                        <p>{user.bio}</p>
                        <b>{user.isHappy ? 'User is happy :)' : 'No happy life :('} </b>
                    </div>))}
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