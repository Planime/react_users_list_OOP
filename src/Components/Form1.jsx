import React, {Component} from "react"



class Form1 extends Component {

    createUser = () => {

        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "firstName": this.props.formData.firstName,
                "lastName": this.props.formData.lastName,
                "address": this.props.formData.address,
                "phone": this.props.formData.phone,
                "email": this.props.formData.email,
                "company": this.props.formData.company,
            })

        };

        fetch("https://5fec128e573752001730b0f1.mockapi.io/users", options)
            .then(res => res.json())
            .then(this.props.postForm)
    };

    editUser = () => {
        let options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "firstName": this.props.formData.firstName,
                "lastName": this.props.formData.lastName,
                "address": this.props.formData.address,
                "phone": this.props.formData.phone,
                "email": this.props.formData.email,
                "company": this.props.formData.company,
            })
        };

        console.log(options.body)

        fetch(`https://5fec128e573752001730b0f1.mockapi.io/users/${this.props.formData.id}`, options)
            .then(res => res.json())
            .then(this.props.postEdit)
    };


    onSubmitForm = (e) => {
        e.preventDefault();

        !this.props.editable ?
            this.createUser()
            :
            this.editUser()
    };


    render() {
        const {
            firstName,
            lastName,
            address,
            phone,
            email,
            company
        } = this.props.formData;


        return (
            <form
                onSubmit={this.onSubmitForm}
                className="form_container">


                <h2>Add User</h2>
                <div>First Name</div>
                <input
                    onChange={this.props.onChangeHandler}
                    name="firstName"
                    value={firstName}
                    type="text"/>

                <div>Last Name</div>
                <input
                    onChange={this.props.onChangeHandler}
                    name="lastName"
                    value={lastName}
                    type="text"/>

                <div>Address</div>
                <input
                    onChange={this.props.onChangeHandler}
                    name="address"
                    value={address}
                    type="text"/>

                <div>Phone</div>
                <input
                    onChange={this.props.onChangeHandler}
                    name="phone"
                    value={phone}
                    type="text"/>


                <div>Email</div>
                <input
                    onChange={this.props.onChangeHandler}
                    name="email"
                    value={email}
                    type="text"/>

                <div>Company</div>
                <input
                    onChange={this.props.onChangeHandler}
                    name="company"
                    value={company}
                    type="text"/>

                <button>Submit</button>
            </form>
        )
    }

};

export default Form1