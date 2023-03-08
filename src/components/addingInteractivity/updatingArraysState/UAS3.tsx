import React from 'react';

import { useState } from 'react';
import { useImmer } from 'use-immer';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

let nextId = 3;

export interface TodoProps {
  id: number;
  title: string;
  done: boolean;
}
const initialTodos: TodoProps[] = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];


// In this example, all of the event handlers in App.js use mutation. 
// As a result, editing and deleting todos doesn’t work. 
// Rewrite handleAddTodo, handleChangeTodo, and handleDeleteTodo to use the non-mutative methods:
export default function UAS3() {
  const [todos, setTodos] = useImmer(
    initialTodos
  );

  function handleAddTodo(title: string) {
    setTodos(draft => {
      draft.push({id: nextId++,
        title: title,
        done: false});
    });
  }

  function handleChangeTodo(nextTodo: TodoProps) {
    setTodos(draft => {
      const todo = draft.find(t =>
        t.id === nextTodo.id
      );
      // nullpass
      todo!.title = nextTodo.title;
      todo!.done = nextTodo.done;
      
        // like this..
      // setTodos(todos.map(todo => {
      //   if (todo.id === nextTodo.id) {
      //     return nextTodo;
      //   } else {
      //     return todo;
      //   }
      // }));
    })
  }

  function handleDeleteTodo(todoId: number) {
    setTodos(todos.filter(todo => todo.id !== todoId));
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
