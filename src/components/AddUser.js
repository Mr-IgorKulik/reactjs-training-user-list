import React from 'react'

class AddUser extends React.Component {
    userAdd = {}

    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            secondname: '',
            bio: '',
            age: 1,
            isHappy: true
        }
    }

    render() {
        return (
            <form ref={(el) => this.addForm = el}>
                <input placeholder='First Name' value={this.props.isEdit ? this.props.user.firstname : ''} onChange={(e) => this.setState({ firstname: e.target.value })} />
                <input placeholder='Second Name' value={this.props.isEdit ? this.props.user.secondname : ''} onChange={(e) => this.setState({ secondname: e.target.value })} />
                <textarea placeholder='Your bio' value={this.props.isEdit ? this.props.user.bio : ''} onChange={(e) => this.setState({ bio: e.target.value })}></textarea>
                <input placeholder='Age' value={this.props.isEdit ? this.props.user.age : ''} onChange={(e) => this.setState({ age: e.target.value })} />
                <label htmlFor="isHappy">Are you happy?</label>
                <input type="checkbox" id='isHappy' checked={this.props.isEdit ? this.props.user.isHappy : false} onChange={(e) => this.setState({ isHappy: e.target.checked })} />
                <button type='button' onClick={() => {
                    this.addForm.reset()
                    this.userAdd = {
                        firstname: this.state.firstname,
                        secondname: this.state.secondname,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy
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