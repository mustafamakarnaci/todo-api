import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import Posts from '../../components/Posts/Posts';
import { deleteTodo, getTodos } from '../../services/api';


const TodosScreen = () => {
  const history = useHistory();

  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await getTodos();
        setTodos(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };

    init();
  }, []);

  const handleAddTodo = () => {
    history.push(`/todo/new`);
  };
  const handleDeleteTodo = (todoId) => {
    e.preventDefault();

  /*   setLoading(true);
    setError(''); */
    try {
      const { data } = await deleteTodo(todoId);
      console.log(data);
      history.push('/todos');
    } catch (err) {
      setError(err);
    }
 /*    setLoading(false); */
  }

  const handleItemClick = (todo) => {
    // todo
    console.log(todo);
    history.push(`/todos/${todo.id}`);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }



  return (
    <div>
      <h2>Todos</h2>
      <Button onClick={handleAddTodo} text="Add new todo" />
      <Todos todos={todos} onDeleteClick={handleDeleteTodo} onItemClick={handleItemClick} />
    </div>
  )
}

export default TodosScreen
