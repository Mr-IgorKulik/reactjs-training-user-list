import React from 'react'

class AddUser extends React.Component {
    userAdd = {}

    constructor(props) {
        super(props)

        this.props.isEdit ?
            this.state = {
                first_name: this.props.user.first_name,
                last_name: this.props.user.last_name,
                email: this.props.user.email,
                avatar: this.props.user.avatar
            } : 
            this.state = {
                first_name: '',
                last_name: '',
                email: '',
                avatar: ''
            }
    }

    render() {
        return (
            <form ref={(el) => this.addForm = el}>
                <input placeholder='First Name' value={this.props.isEdit ? this.state.first_name : ''} onChange={(e) => this.setState({ first_name: e.target.value })} />
                <input placeholder='Last Name' value={this.props.isEdit ? this.state.last_name : ''} onChange={(e) => this.setState({ last_name: e.target.value })} />
                <textarea placeholder='Your email' value={this.props.isEdit ? this.state.email: ''} onChange={(e) => this.setState({ email: e.target.value })}></textarea>
                <input placeholder='Link to the avatar' value={this.props.isEdit ? this.state.avatar: ''} onChange={(e) => this.setState({ avatar: e.target.value })} />
                <button type='button' onClick={() => {
                    this.addForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        avatar: this.state.avatar
                    }
                    if(this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                }
                }>{this.props.isEdit ? 'Edit user' : 'Add user'}</button>
            </form>
        )
    }
}

export default AddUser