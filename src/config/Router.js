import Home from '../screens/Home/Home';
import TodosScreen from '../screen/TodosScreen/TodosScreen';
import AddTodoScreen from '../screen/AddTodoScreen/AddTodoScreen';
import TodoDetail from '../screen/TodoDetail/TodoDetail';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
    title: 'Home',
    isLink: true,
  },
  {
    path: '/Todos',
    component: () => <TodosScreen />,
    title: 'Test',
    isLink: true,
    exact: true,
  },
  {
    path: '/todos/new',
    component: () => <AddTodoScreen />,
    title: 'Add a new todo',
    exact: true,
  },
  {
    path: '/todos/:todoId',
    component: () => <TodoDetail />,
    title: 'Todo Detail',
  },
];
