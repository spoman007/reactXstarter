import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { toggleTodo as toggleTodoAction } from "core";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "core";

const selectTodos = (state) => state.todos;
const selectFilter = (state) => state.visibilityFilter;

const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
      default:
        throw new Error("Unknown filter: " + filter);
    }
  }
);

export default () => {
  const todos = useSelector(selectVisibleTodos);
  const dispatch = useDispatch();
  const toggleTodo = (id) => dispatch(toggleTodoAction(id));

  return <TodoList todos={todos} toggleTodo={toggleTodo} />;
};
