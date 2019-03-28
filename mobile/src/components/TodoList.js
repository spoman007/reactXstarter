import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => (
    <View style={styles.container}>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />
        )}
    </View>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: '70%',
        marginTop: 20

    },
});

export default TodoList
