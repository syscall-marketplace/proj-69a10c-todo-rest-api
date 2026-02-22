import { randomUUID } from 'crypto';
import { Todo } from '../types/todo.js';

const todos: Todo[] = [];

export function createTodo(title: string): Todo {
  const todo: Todo = {
    id: randomUUID(),
    title,
    completed: false,
    createdAt: new Date(),
  };
  todos.push(todo);
  return todo;
}

export function getAllTodos(): Todo[] {
  return todos;
}

export function getTodoById(id: string): Todo | undefined {
  return todos.find((todo) => todo.id === id);
}

export function updateTodo(
  id: string,
  updates: Partial<Pick<Todo, 'title' | 'completed'>>,
): Todo | undefined {
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return undefined;
  }
  if (updates.title !== undefined) {
    todo.title = updates.title;
  }
  if (updates.completed !== undefined) {
    todo.completed = updates.completed;
  }
  return todo;
}

export function deleteTodo(id: string): boolean {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return false;
  }
  todos.splice(index, 1);
  return true;
}
