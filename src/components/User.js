import React from 'react'
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

class User extends React.Component {
constructor(props) {
        super(props)
        this.state = {
            users: [
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
        }
    }

    user = this.props.user
    render() {
        return (
            <div className='user' > 
                <IoCloseCircleSharp className='delete-icon' />
                <IoHammerSharp className='edit-icon' />
                <h3>{this.user.firstname} {this.user.secondname}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? 'User is happy :)' : 'No happy life :('} </b>
            </div>
        )
    }
}

export default User