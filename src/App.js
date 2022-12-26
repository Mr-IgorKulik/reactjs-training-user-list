import React from 'react'
import Header from './components/Header'
import Users from './components/Users'
import AddUser from './components/AddUser'
import axios from 'axios'

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
    constructor(props) {
        super(props)

        axios.get(baseUrl).then((response) => {
            this.setState({users: response.data.data})
        })

        this.state = {
            users: []
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
        let index = allUsers.findIndex((el) => el.id === user.id)
        allUsers[index] = user

        this.setState({users: []}, () => {
            this.setState({users: [...allUsers]})
        })
    }
}

export default App