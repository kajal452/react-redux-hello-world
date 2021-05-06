import React from 'react'
import '../App.css';
const Home = () => {
    return (
        <div className="App">
            <table border="2">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Prince</td>
                    <td>Kajalkrdas452@gmail.com</td>
                    <td>7548745874</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Home
