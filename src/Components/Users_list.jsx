import React, {Component} from "react"


class Users_list extends Component {


    render() {
        return (
            <div className="users_list_container">
                <h2>List of users</h2>
                <div onClick={this.props.showUserInfo}
                >{
                    this.props.usersList.map(user => {
                        return (
                            <div
                                className='user_name'
                                key={user.id}
                                data-id={user.id}>
                                <div>{user.firstName}</div>
                                <div>{user.lastName}</div>
                            </div>
                        )
                    })
                }</div>
            </div>

        )
    }
}


export default Users_list