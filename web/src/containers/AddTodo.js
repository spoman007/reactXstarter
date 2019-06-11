import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from 'core'

export default () => {
  let input
  const dispatch = useDispatch()
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
