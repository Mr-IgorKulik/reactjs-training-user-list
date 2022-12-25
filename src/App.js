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
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }

    render() {
        return (<div>
            <Header title="USER LIST" />
            <main>
                <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
            </main>
            <aside>
                <AddUser onAdd={this.addUser} isEdit={false}/>
            </aside>
        </div>)
    }

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, { id, ...user }] })
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((user) => user.id !== id)
        })
    }

    editUser(user) {
        let allUsers = this.state.users
        let index = allUsers.findIndex((el) => el.id == user.id)
        allUsers[index] = user

        this.setState({users: []}, () => {
            this.setState({users: [...allUsers]})
        })
    }

    makeNewUserForEdit(newUser, oldUser) {}
}

export default App