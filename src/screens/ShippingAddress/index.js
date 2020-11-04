import React from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { Header, Left, Body, Title, Text, Right, Button, Card, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'

const ShippingAddress = ({ navigation }) => {
    return (
        <>
            <Header style={styles.header}>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='angle-left' size={30} />
                    </Button>
                </Left>
                <Body>
                    <Title style={styles.textHead}>Shipping Address</Title>
                </Body>
            </Header>
            <View style={styles.parent}>
                <View style={{ position: 'relative' }}>
                    <TextInput style={styles.search} placeholder="Search" />
                    <Icon style={styles.icon} name="search" size={20} />
                </View>
                <View>
                    <Text style={styles.textPass}>Shipping Address</Text>
                </View>
                <Card style={styles.card}>
                    <CardItem style={styles.cardItem}>
                        <Body>
                            <View style={styles.text}>
                                <Text>Jane Ane</Text>
                                <Left />
                                <TouchableOpacity onPress={()=>navigation.navigate("ChangeAddress")}>
                                    <Text style={styles.change}>Change</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text>3 New Bridge cout</Text>
                            </View>
                            <View>
                                <Text>Chino Hill, CA 154678, United State</Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
            <Button style={styles.btn} block transparent onPress={()=>{navigation.navigate("AddAddress")}}>
                <Text style={{color: "#000000"}}>ADD NEW ADDRESS</Text>
            </Button>
            </View>
        </>
    )
}

export default ShippingAddress

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        marginTop: 25
    },
    textHead: {
        color: '#000000',
    },
    parent: {
        padding: 15
    },
    search: {
        height: 40,
        borderWidth: 1,
        borderColor: "#C8C8C8",
        borderRadius: 50,
        paddingLeft: 35,
        fontSize: 20,
        marginTop: 5
    },
    icon: {
        color: '#a3a3a3',
        position: 'absolute',
        top: 14,
        left: 10,
    },
    textPass: {
        marginTop: 25,
        fontSize: 20,
        fontWeight: 'bold'
    },
    card: {
        marginTop: 20,
        borderRadius: 15,
        padding: 5
    },
    cardItem:{
        borderRadius: 15,
    },
    tittle: {
        fontSize: 40,
        fontWeight: "bold"
    },
    text: {
        flexDirection: 'row',
        marginBottom: 10
    },
    change: {
        color: "#bf000d"
    },
    btn:{
        marginTop: 10,
        borderWidth:2,
        borderColor: "#000000",
        borderRadius: 50
    }
})

