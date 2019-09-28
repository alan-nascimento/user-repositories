import React, { useState } from 'react';
import { FaGithubAlt, FaSearch, FaSpinner, FaStar } from 'react-icons/fa';

import api from '../../services/api';
import { Container, Form, SubmitButton, List, Error } from './styles';

export default function Main() {
  const [user, setUser] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = e => setUser(e.target.value);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError(false);
      setLoading(true);

      const response = await api.get(`/users/${user}/repos`);
      const { data } = response;

      setRepositories(data);
      setUser('');
      setLoading(false);
    } catch (err) {
      setError(true);
      setRepositories([]);
      setLoading(false);

      console.error(err);
    }
  }

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositories
      </h1>

      <Form onSubmit={handleSubmit}>
        <div>
          <Error error={error}>Unable to get this user!</Error>
          <input
            type="text"
            placeholder="Search for a user"
            value={user}
            onChange={handleInputChange}
          />
        </div>

        <SubmitButton loading={loading}>
          {loading ? (
            <FaSpinner loading={loading} color="#fff" size={14} />
          ) : (
            <FaSearch color="#fff" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="blank">
              {repo.name}
            </a>
            <div>
              <span>{repo.stargazers_count}</span>
              <FaStar color="#1e2434" size={14} />
            </div>
          </li>
        ))}
      </List>
    </Container>
  );
}
