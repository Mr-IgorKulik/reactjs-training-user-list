import React from 'react'
import Header from './components/Header'
import Users from './components/Users'
import AddUser from './components/AddUser'

class App extends React.Component {
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
        this.addUser = this.addUser.bind(this)
    }

    render() {
        return (<div>
            <Header title="USER LIST"/>
            <main>
                <Users users={this.state.users}/>
            </main>
            <aside>
                <AddUser onAdd={this.addUser}/>
            </aside>
        </div>)
    }

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, { id, ...user }] })
    }
}

export default App