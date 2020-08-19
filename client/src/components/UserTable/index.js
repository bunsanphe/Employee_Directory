import {Table} from "react-bootstrap";
import React from "react";
import useLocationSort from "../../utils/hooks/useLocationSort"

function UserTable( {users, search, sort, updateSort} ) {

    const filterBySearch = user => {
        const fullName = `${user.name.first} ${user.name.last}`; 
        return !search || fullName.toLowerCase().includes(search.toLowerCase()) 
    }

    const sortByLocation = useLocationSort(sort);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone # </th>
                    <th>Email </th>
                    <th>Location
                        <button onClick={() => updateSort("asc")}>Asc</button>
                        <button onClick={() => updateSort("des")}>Des</button>
                        </th>
                </tr>
            </thead>
            <tbody>
                {users.filter(filterBySearch).sort(sortByLocation).map(user => {
                    return (
                        <tr key={user.id.value}>
                        <td>{user.name.first}</td>
                        <td>{user.name.last}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.location.city}, {user.location.state}</td>
                        </tr>
                        )
                })}
            </tbody>
        </Table>
    )
}

export default UserTable;