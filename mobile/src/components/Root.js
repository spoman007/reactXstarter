import { StyleSheet, View } from 'react-native';
import React from 'react';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer'

const Root = () => (
    <View style={styles.container}>
        <AddTodo />
        <VisibleTodoList/>
        <Footer />
    </View>
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingTop: 100,
        paddingBottom: 50,
        backgroundColor: '#f97272'
    },
});

export default Root;