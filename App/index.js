import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import data from './data'
import Item from './Item'
import styles from './style'

class Home extends Component {
    render() {
        return(
            <View style={styles.wrapper}>
                <View>
                    <Text style={styles.title}>My Crush</Text>
                </View>
                <FlatList
                    ref={"flatList"}
                    data={ data }
                    renderItem={({ item }) => (
                        <Item item={ item } />
                    )}
                    keyExtractor={(item) => item.id }
                    parentFlatList={this}
                />
            </View>
        )
    }
}

export default Home
