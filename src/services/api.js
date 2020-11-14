import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://5fa97367c9b4e90016e6a7ec.mockapi.io/api',
});

export const getTodos = () => {
  return instance.get('/todos');
};

export const getTodoById = (todoId) => {
  return instance.get(`/todos/${todoId}`);
};

export const createNewTodo = (todo) => {
  
axios.post('/todos', {
    title: todo.title,
    isDone:todo.isDone,
    user:title.user
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  return instance.post(`/todos`, todo);
};


export const updateTodo = (todo) => {
  
  axios.post('/todos', {
      title: todo.title,
      isDone:todo.isDone,
      user:title.user
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
    return instance.post(`/todos`, todo);
  };

  export const deleteTodo = (todoId) => {
    axios.delete(`/todos/${todoId}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

export default instance;
