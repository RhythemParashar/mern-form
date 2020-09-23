import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: username,
            age: age,
            height: height,
            weight: weight,
        };

        axios
            .post('http://localhost:5000/users/add', user)
            .then((res) => console.log(res.data));

        setUsername('');
        setWeight(0);
        setHeight(0);
        setAge(0);

        window.location = '/';
    };

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Username:</label>
                    <input
                        type='text'
                        required
                        className='form-control'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Age:</label>
                    <input
                        type='text'
                        required
                        className='form-control'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Height:</label>
                    <input
                        type='text'
                        required
                        className='form-control'
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Weight:</label>
                    <input
                        type='text'
                        required
                        className='form-control'
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='submit'
                        value='Create User'
                        className='btn btn-primary'
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateUser;
