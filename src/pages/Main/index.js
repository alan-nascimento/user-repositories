import React, { useState } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  const [newUser, setNewUser] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = e => setNewUser(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true);

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
    };

    setUsers([...users, data]);
    setNewUser('');
    setLoading(false);
    console.log(users);
  };

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Users
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add repository"
          value={newUser}
          onChange={handleInputChange}
        />

        <SubmitButton loading={loading}>
          {loading ? (
            <FaSpinner loading={loading} color="#fff" size={14} />
          ) : (
            <FaPlus color="#fff" size={14} />
          )}
        </SubmitButton>
      </Form>
    </Container>
  );
}
