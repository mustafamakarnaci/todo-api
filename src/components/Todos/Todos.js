import React from 'react';

import { Wrapper, List, ListItem } from './Todos.styles';

const Todos = ({ todos, onItemClick ,onDeleteClick}) => {

  return (
    <Wrapper>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} onClick={() => onItemClick(todo)}>
            {todo.title}
            <span onClick={()=> onDeleteClick(todo.id)}> X </span>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default Todos;
