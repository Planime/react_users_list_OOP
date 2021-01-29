import './App.css';
import Form1 from "./Components/Form1"
import Users_list from "./Components/Users_list"
import User_info from "./Components/User_info"

import React, {Component} from "react"

class App extends Component {

    state = {
        usersList: []
    };


    componentDidMount() {
        fetch("https://5fec128e573752001730b0f1.mockapi.io/users")
            .then(res => res.json())
            .then(res => this.setState({usersList: res}))
    }

    postForm = (res) => {
        this.setState((prevState) => {
            return {usersList: [res, ...prevState.usersList]}
        })
    };

    showUserInfo = (e) => {
        // console.log(e.target.closest("[data-id]").dataset.id)
        console.log(this.state.usersList)
        // console.log(this.props.usersList)

        let userID = e.target.closest("[data-id]").dataset.id

        console.log(this.state.usersList.find( (user) => {
           return user.id === userID

        }))

    };


    render() {
        return (
            <div>
                <Form1
                    postForm={this.postForm}
                    usersList={this.state.usersList}
                />
                <div className="users_main">
                    <Users_list
                        showUserInfo={this.showUserInfo}
                        usersList={this.state.usersList}/>

                    <User_info
                        showUserInfo={this.showUserInfo}
                        usersList={this.state.usersList}/>
                </div>

            </div>

        );
    }
}

export default App;
