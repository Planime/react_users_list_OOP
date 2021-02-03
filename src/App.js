import './App.css';
import Form1 from "./Components/Form1"
import Users_list from "./Components/Users_list"
import User_info from "./Components/User_info"

import React, {Component} from "react"

class App extends Component {

    state = {
        usersList: [],
        selectedUser: {},
        editable: false,
        formData: {
            firstName: "",
            lastName: "",
            address: "",
            phone: "",
            email: "",
            company: ""
        }
    };

    onChangeHandler = (e) => {

        let value = e.target.value;
        let name = e.target.name;

        this.setState((prev) => {
            return {
                formData: {
                    ...prev.formData,
                    [name]: value
                }
            }
        })
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

        let userID = e.target.closest("[data-id]")?.dataset.id;

        if (!userID) return;

        this.setState({
            selectedUser: this.state.usersList.find((user) => {
                return user.id === userID
            })
        })

    };

    hideUserInfo = () => {
        this.setState({selectedUser: {}})
    };

    deleteUser = () => {
        let options = {
            method: "DELETE"
        };
        fetch(`https://5fec128e573752001730b0f1.mockapi.io/users/${this.state.selectedUser.id}`, options)
            .then(res => res.json())
            .then(res => this.setState((prev) => {
                    return {
                        usersList: prev.usersList.filter(user => user.id !== res.id),
                        selectedUser: {}
                    }
                }
            ))
    };

    editUserInfo = () => {
        this.setState({
            formData: this.state.selectedUser,
            editable: true
        });

    };


    render() {
        return (
            <div>
                <Form1
                    editable={this.state.editable}
                    postForm={this.postForm}
                    usersList={this.state.usersList}
                    selectedUser={this.state.selectedUser}
                    formData={this.state.formData}
                    onChangeHandler={this.onChangeHandler}
                />
                <div className="users_main">
                    <Users_list
                        showUserInfo={this.showUserInfo}
                        usersList={this.state.usersList}/>

                    <User_info
                        editUserInfo={this.editUserInfo}
                        deleteUser={this.deleteUser}
                        hideUserInfo={this.hideUserInfo}
                        selectedUser={this.state.selectedUser}
                        usersList={this.state.usersList}/>
                </div>

            </div>

        );
    }
}

export default App;
