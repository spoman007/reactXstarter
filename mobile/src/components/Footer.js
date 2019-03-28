import React from 'react'
import { View, StyleSheet } from 'react-native'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from 'core'

const Footer = () => (
    <View style={styles.container}>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
    </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
    </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
    </FilterLink>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 40,
        width: '70%',
    },
});

export default Footer
