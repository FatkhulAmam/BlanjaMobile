import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Title, Card, CardItem } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'
import photo from '../../assets/images/photo.png'

const Shop = ({navigation}) => {
    return (
        <>
            <Header style={styles.header}>
                <Left>
                    <Button transparent onPress={()=>navigation.goBack()}>
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
            <Card transparent>
                <CardItem>
                    <Body>
                        <Text></Text>
                    </Body>
                </CardItem>
            </Card>
            <View style={styles.parent}>
                <Card style={styles.card}>
                    <CardItem style={styles.cardColor}>
                        <Body style={styles.content}>
                            <Text style={styles.saleText}>SUMMER SALES</Text>
                            <Text style={{color: "#fff"}}>Up to 50% off</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card  style={styles.card}>
                    <CardItem style={styles.card}>
                        <Body style={styles.cardCategory}>
                            <Text style={styles.label}>New</Text>
                            <Right/>
                            <Image style={styles.image} source={photo} />
                        </Body>
                    </CardItem>
                </Card>
                <Card  style={styles.card}>
                    <CardItem style={styles.card}>
                        <Body style={styles.cardCategory}>
                            <Text style={styles.label}>New</Text>
                            <Right/>
                            <Image style={styles.image} source={photo} />
                        </Body>
                    </CardItem>
                </Card>
                <Card  style={styles.card}>
                    <CardItem style={styles.card}>
                        <Body style={styles.cardCategory}>
                            <Text style={styles.label}>New</Text>
                            <Right/>
                            <Image style={styles.image} source={photo} />
                        </Body>
                    </CardItem>
                </Card>
            </View>
        </>
    )
}

export default Shop

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        marginTop: 20
    },
    text: {
        color: '#000000',
        paddingLeft: 65,
    },
    parent: {
        margin: 10,
    },
    card: {
        borderRadius: 10,
    },
    cardColor:{
        height: 100,
        backgroundColor: '#00b500',
        borderRadius: 10,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    saleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF'
    },
    cardCategory: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    image: {
        width: 75,
        height: 75
    }
})