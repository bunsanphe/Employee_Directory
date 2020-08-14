import React from "react";
import API from "../utils/API";
import UserTable from "../components/UserTable"

class Directory extends React.Component {
    state = {
        name: "",
        role: "",
        manager: "",
        users: []
    }

    componentDidMount() {
        API.getUsers()
        .then( res => this.setState({users: res.data.results}) )
        .catch( err => console.log(err) )
    }



    render() {
        return <UserTable users={this.state.users} />
    }
}

export default Directory;