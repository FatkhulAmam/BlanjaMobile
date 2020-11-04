import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Container, Header, Text, Left, Body, Right, Button, Title, Card, CardItem } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'
import NotifImg from '../../assets/images/notification.svg'

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
                <NotifImg width={120} height={120}/>
                <Text note>No notification yet</Text>
            </View>
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
    }
})
