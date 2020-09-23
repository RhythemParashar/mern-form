import React, { useState } from 'react';
import axios from 'axios';

const User = (props) => (
    <tr>
        <td>{props.user.username}</td>
        <td>{props.user.age}</td>
        <td>{props.user.height}</td>
        <td>{props.user.weight}</td>
    </tr>
);

const ShowUser = () => {
    const [user, setUser] = useState([]);

    React.useEffect(() => {
        axios
            .get('http://localhost:5000/users/')
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [user]);

    const userList = () => {
        return user.map((currentUser) => {
            return <User user={currentUser} />;
        });
    };

    return (
        <div>
            <table className='table'>
                <thead className='thead-light'>
                    <tr>
                        <th>Username</th>
                        <th>Age</th>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>{userList()}</tbody>
            </table>
        </div>
    );
};

export default ShowUser;
