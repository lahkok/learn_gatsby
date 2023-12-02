import React, { useState } from 'react';
import Layout from '../components/layout';

const CrudForm = () => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, formData]);
        setFormData({ name: '', email: '', phone: '' });
    };

    return (
        <Layout pageTitle="CRUD Form">
            <div>
                <h2>CRUD Form</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Phone:
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <button type="submit">Add</button>
                </form>
                <h3>Data:</h3>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.email} - {item.phone}
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default CrudForm;
