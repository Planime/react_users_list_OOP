import React, {Component} from "react"


class User_info extends Component {


    render() {

        return (
            <div className='users_info_wrapper'>
                <h2>User Info</h2>
                {Object.keys(this.props.selectedUser).length !== 0 ? (
                        <>
                            <div>
                                <div>First Name: {this.props.selectedUser.firstName}</div>
                                <div>Last Name: {this.props.selectedUser.lastName}</div>
                                <div>Phone: {this.props.selectedUser.phone}</div>
                                <div>Email: {this.props.selectedUser.email}</div>
                                <div>Company: {this.props.selectedUser.company}</div>
                            </div>
                            <button
                                onClick={this.props.hideUserInfo}>Hide
                            </button>
                            <button
                                onClick={this.props.deleteUser}>Delete
                            </button>
                            <button
                                onClick={this.props.editUserInfo}>Edit
                            </button>
                        </>)
                    : <div></div>
                }
            </div>
        )
    }
}

export default User_info