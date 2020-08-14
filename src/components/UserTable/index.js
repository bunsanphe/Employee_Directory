import {Table} from "react-bootstrap";
import React from "react";

function UserTable(props) {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone # </th>
                    <th>Address </th>
                    <th>Email </th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(info => {
                    return (
                        <tr key={info.id.value}>
                        <td>{info.name.first}</td>
                        <td>{info.name.last}</td>
                        <td>{info.phone}</td>
                        <td>{info.email}</td>
                        <td>{info.location.city}, {info.location.state}</td>
                        </tr>
                        )
                })}
            </tbody>
        </Table>
    )
}

export default UserTable;