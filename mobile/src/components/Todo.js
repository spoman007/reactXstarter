import React from 'react'
import PropTypes from 'prop-types'
import { Text } from "react-native"

const Todo = ({ onClick, completed, text }) => (
    <Text
        onPress={onClick}
        style={{
            fontSize: 20,
            textDecorationLine: completed ? 'line-through' : 'none'
        }}>
        {text}
    </Text>


)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo