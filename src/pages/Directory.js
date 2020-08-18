import React from "react";
import API from "../utils/API";
import UserTable from "../components/UserTable";
import SearchForm from "../components/SearchForm";
import {Container, Card} from "react-bootstrap";



class Directory extends React.Component {
    state = {
        name: "",
        role: "",
        manager: "",
        users: [],
        search: "",
        searchType: "name",
        sort: ""
    }

    updateSearch = (search) => {
        console.log(search)
        this.setState( {search} )
    }

    // updateSearchType = (searchtype) => {
    //     this.setState({searchType})
    // }

    updateSort = (sort) => {
        this.setState({sort})
    }

    componentDidMount() {
        API.getUsers()
        .then( res => this.setState({users: res.data.results}) )
        .catch( err => console.log(err) )
    }



    render() {
        return (
            <Container>
                <Card body>
                    <SearchForm onChange={this.updateSearch}/>
                </Card>
                <UserTable users={this.state.users} search={this.state.search} updateSort={this.updateSort}/>
            </Container>
            )
    }
}

export default Directory;