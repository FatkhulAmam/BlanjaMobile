import React, { useState } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Text, Header, Left, Body, Right, Button, Card } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'

import photo from '../../assets/images/photo.png'

const Bag = ({navigation}) => {
    const [count, setCount] = useState(0);
    const onPressInc = () => setCount(prevCount => prevCount + 1);
    const onPressDec = () => setCount(prevCount => prevCount - 1);

    return (
        <>
            <Header style={styles.header} transparent>
                <Right>
                    <Button transparent>
                        <Icon name='search' size={22} />
                    </Button>
                </Right>
            </Header>
            <View style={styles.parent}>
                <ScrollView>
                <Text style={styles.tittle}>My Bag</Text>
                <Card style={styles.cardBag}>
                    <Image style={styles.cardImage} source={photo} />
                    <View>
                        <View style={styles.topCard}>
                            <Text style={styles.name}>Dress</Text>
                            <Icon name="ellipsis-v" size={22} color="#8f8f8f" style={{ marginTop: 10 }} />
                        </View>
                        <View style={styles.tipe}>
                            <Text note>color: <Text>red</Text>   </Text>
                            <Text note>sixe: <Text>s</Text></Text>
                        </View>
                        <View style={styles.btnCount}>
                            <TouchableOpacity style={styles.btn} onPress={onPressDec}>
                                <Icon name="minus" size={15} color="#8f8f8f" />
                            </TouchableOpacity>
                            <Text style={styles.counter}>{count}</Text>
                            <TouchableOpacity style={styles.btn} onPress={onPressInc}>
                                <Icon name="plus" size={15} color="#8f8f8f" />
                            </TouchableOpacity>
                            <Text style={styles.price}>$50</Text>
                        </View>
                    </View>
                    <Right />
                </Card>
                <Card style={styles.cardBag}>
                    <Image style={styles.cardImage} source={photo} />
                    <View>
                        <View style={styles.topCard}>
                            <Text style={styles.name}>Dress</Text>
                            <Icon name="ellipsis-v" size={22} color="#8f8f8f" style={{ marginTop: 10 }} />
                        </View>
                        <View style={styles.tipe}>
                            <Text note>color: <Text>red</Text>   </Text>
                            <Text note>sixe: <Text>s</Text></Text>
                        </View>
                        <View style={styles.btnCount}>
                            <TouchableOpacity style={styles.btn} onPress={onPressDec}>
                                <Icon name="minus" size={15} color="#8f8f8f" />
                            </TouchableOpacity>
                            <Text style={styles.counter}>{count}</Text>
                            <TouchableOpacity style={styles.btn} onPress={onPressInc}>
                                <Icon name="plus" size={15} color="#8f8f8f" />
                            </TouchableOpacity>
                            <Text style={styles.price}>$50</Text>
                        </View>
                    </View>
                    <Right />
                </Card>
                </ScrollView>
            </View>
            <View style={styles.btnCheck}>
                <View style={styles.amount}>
                    <Text note>Total Amout</Text>
                    <Left />
                    <Text>Amount</Text>
                </View>
                <Button block style={styles.check} onPress={()=>navigation.navigate("CheckOut")}><Text>Check out</Text></Button>
            </View>
        </>
    )
}

export default Bag

const styles = StyleSheet.create({
    parent: {
        padding: 10,
        position: 'relative'
    },
    tittle: {
        fontSize: 45,
        fontWeight: "bold"
    },
    cardBag: {
        flexDirection: 'row',
        paddingRight: 15,
        borderRadius: 10
    },
    cardImage: {
        marginRight: 10,
        height: 115,
        width: 115,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    topCard:{
        flexDirection: 'row',
    },
    name: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 140
    },
    tipe: {
        flexDirection: 'row',
    },
    btnCount: {
        flexDirection: 'row',
        marginTop: 10,
    },
    counter:{
        margin: 10
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
        borderRadius: 50,
        width: 40,
        height: 40,
    },
    price: {
        fontSize: 20,
        marginLeft: 60,
        marginTop: 10
    },
    btnCheck:{
        position: 'absolute',
        padding: 10,
        bottom: 0,
        width: 360,
        backgroundColor: '#f2f2f2'
    },
    amount:{
        flexDirection: 'row',
        marginBottom: 10
    },
    check:{
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: 'green'
    }
})
