import React from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import { Text, Header, Left, Body, Right, Button, Title, Card, CardItem } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'

class Item extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.renderParent}>
                    <Text style={styles.renderText}>{this.props.category}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

class Shop extends React.Component {
    state = {
        data: [
            {
                category: 'Tops'
            },
            {
                category: 'Shirt'
            },
            {
                category: 'Clotes'
            },
            {
                category: 'Blazers'
            },
            {
                category: 'Pants'
            },
        ]
    }

    render() {
        return (
            <>
                <Header style={styles.header} transparent>
                    <Left>
                        <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name='angle-left' size={30} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.text}>Categories</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => navigation.navigate("Search")}>
                            <Icon name='search' size={22} />
                        </Button>
                    </Right>
                </Header>
                <View style={styles.parent}>
                    <Button
                        style={styles.btnAll}
                        block>
                        <Text style={styles.btntext}>VIEW ALL ITEM</Text>
                    </Button>
                    <Text style={styles.choose} note>Choose category</Text>
                    <View>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item, index }) => (
                                <Item category={item.category} />
                            )}
                        />
                    </View>
                </View>
            </>
        )
    }
}

export default Shop

const styles = StyleSheet.create({
    renderParent: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#e8e8e8'
    },
    renderText: {
        fontSize: 20
    },
    header: {
        backgroundColor: '#FFFFFF',
    },
    text: {
        color: '#000000',
        paddingLeft: 65,
    },
    parent: {
        margin: 10,
    },
    btnAll: {
        borderRadius: 25,
        backgroundColor: 'green'
    },
    btntext: {
        color: "#FFFFFF",
    },
    choose: {
        marginTop: 15,
        fontSize: 18
    }
})