import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { FormContainer } from '../../components/FormElements/WrappedFormElements';
import Input from '../../components/Input/Input';
import Layout from '../../components/Layout/Layout';
import Loader from '../../components/Loader/Loader';
import { createNewTodo } from '../../services/api';

const AddTodoScreen = () => {
  const history = useHistory();

  const [todo, setTodo] = useState({
    title: '',
    isDone: false,
    user: '',
  });
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // checks validation

    setLoading(true);
    setError('');

    try {
      const { data } = await createNewTodo(todo);
      console.log(data);
      history.push('/todos');
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Layout>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          name="todo[title]"
          placeholder="Title"
          autoComplete="off"
          value={todo.title}
          onChange={(event) => {
            setTodo({
              ...todo,
              title: event.target.value,
            });
          }}
        />

        <Input
          type="text"
          name="post[body]"
          placeholder="Body"
          autoComplete="off"
          value={todo.user}
          onChange={(event) => {
            setTodo({
              ...post,
              isDone:false,
              user: event.target.value,
            });
          }}
        />

        <Button text="Create" type="submit" />
      </FormContainer>
    </Layout>
  );
};

export default AddTodoScreen;
