import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Button, Header, Text, Left, Body, Right, Title, Card, CardItem } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'
import Bags from '../../assets/images/bags.svg'

const Notification = ({navigation}) => {
    return (
        <>
            <View>
            <Header style={styles.header} transparent>
                <Left>
                    <Button transparent onPress={()=>navigation.goBack()}>
                        <Icon name='angle-left' size={30} />
                    </Button>
                </Left>
                <Body>
                    <Title style={styles.text}>Notification</Title>
                </Body>
            </Header>
            </View>
            <View style={styles.parent}>
                <Bags />
                <Text style={styles.success}>Success!</Text>
                <Text note>Your order be delivered soon.</Text>
                <Text note>Thank you for choosing our app!</Text>
            </View>
            <Button style={styles.btn} block onPress={()=>navigation.navigate("MainApp")}><Text>Continue Shoping</Text></Button>
        </>
    )
}

export default Notification

const styles = StyleSheet.create({
    text: {
        color: '#000000',
    },
    parent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    success: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: 'green',
        borderRadius: 25,
        margin: 20
        
    }
})
