import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { setVisibilityFilter } from 'core'
import Link from '../components/Link'

export default (props) => {
    const active = useSelector(state => props.filter === state.visibilityFilter)
    const dispatch = useDispatch()
    const onClick = () => dispatch(setVisibilityFilter(props.filter))

    return <Link {...props} active={active} onClick={onClick} />
}