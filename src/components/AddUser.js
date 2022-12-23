import React from 'react'

class AddUser extends React.Component {
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
            <form>
                <input placeholder='First Name' onChange={(e) => this.setState({ firstname: e.target.value })}/>
                <input placeholder='Second Name' onChange={(e) => this.setState({ secondname: e.target.value })}/>
                <textarea placeholder='Your bio' onChange={(e) => this.setState({ bio: e.target.value })}></textarea>
                <input placeholder='Age' onChange={(e) => this.setState({ age: e.target.value })}/>
                <label htmlFor="isHappy">Are you happy?</label>
                <input type="checkbox" id='isHappy' onChange={(e) => this.setState({ isHappy: e.target.checked })}/>
                <button type='button' onClick={() => this.props.onAdd({
                    firstname: this.state.firstname,
                    secondname: this.state.secondname,
                    bio: this.state.bio,
                    age: this.state.age,
                    isHappy: this.state.isHappy
                })}>Add user</button>
            </form>
        )
    }
}

export default AddUser