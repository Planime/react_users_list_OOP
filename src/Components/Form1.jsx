import React, {Component} from "react"




class Form1 extends Component {

    state = {
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        email: "",
        company: ""
    };

     onSubmitAddUser = () => {

        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                "address": this.state.address,
                "phone": this.state.phone,
                "email": this.state.email,
                "company": this.state.company,
            })

        };

        fetch("https://5fec128e573752001730b0f1.mockapi.io/users", options)
            .then(res => res.json())
            .then(this.props.postForm)
    };


    onChangeHandler = (e) => {

        let value = e.target.value;
        let name = e.target.name;

        this.setState({
            [name]: value
        })
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        this.onSubmitAddUser()
    };


    render() {
        console.log()
        const {
            firstName,
            lastName,
            address,
            phone,
            email,
            company
        } = this.state;


        return (
            <form
                onSubmit={this.onSubmitForm}
                className="form_container">


                <h2>Add User</h2>
                <div>First Name</div>
                <input
                    onChange={this.onChangeHandler}
                    name="firstName"
                    value={firstName}
                    type="text"/>

                <div>Last Name</div>
                <input
                    onChange={this.onChangeHandler}
                    name="lastName"
                    value={lastName}
                    type="text"/>

                <div>Address</div>
                <input
                    onChange={this.onChangeHandler}
                    name="address"
                    value={address}
                    type="text"/>

                <div>Phone</div>
                <input
                    onChange={this.onChangeHandler}
                    name="phone"
                    value={phone}
                    type="text"/>


                <div>Email</div>
                <input
                    onChange={this.onChangeHandler}
                    name="email"
                    value={email}
                    type="text"/>

                <div>Company</div>
                <input
                    onChange={this.onChangeHandler}
                    name="company"
                    value={company}
                    type="text"/>

                <button>Submit</button>
            </form>
        )
    }

};

export default Form1