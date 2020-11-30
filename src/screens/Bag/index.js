import React, { useState, useEffect } from 'react'
import { Alert, StyleSheet, View, Image, TouchableOpacity, ScrollView, Modal, TouchableHighlight, FlatList } from 'react-native'
import { Text, Header, Left, Body, Right, Button, Card } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { API_URL } from '@env'

import { showMyCart } from '../../redux/actions/product'

import Icon from 'react-native-vector-icons/FontAwesome'
import photo from '../../assets/images/photo.png'
import CardProduct from '../../components/cardBag'

const Bag = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [modalVisible, setModalVisible] = useState(false);
    const token = useSelector(state => state.auth.token)
    const detailCart = useSelector(state => state.myCart.data)

    useEffect(() => {
        dispatch(showMyCart(token))
        console.log(detailCart);
    }, [dispatch])

    return (
        <>
            <Header style={styles.header} transparent>
                <Right>
                    <Button transparent onPress={() => navigation.navigate('Search')}>
                        <Icon name='search' size={22} />
                    </Button>
                </Right>
            </Header>
            <View style={styles.parent}>
                <Text style={styles.tittle}>My Bag</Text>
                <View>
                <FlatList
                    data={detailCart}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <CardProduct
                            image={item.url ? { uri: `${API_URL}${item.url}` } : photo}
                            name={item.name}
                            price={item.price}
                            amount={item.amount}
                        />
                    )}
                />
                </View>
            </View>
            <View style={styles.btnCheck}>
                <View style={styles.amount}>
                    <Text note>Total Amout</Text>
                    <Left />
                    <Text>Amount</Text>
                </View>
                <Button block style={styles.check} onPress={() => navigation.navigate("CheckOut")}><Text>Check out</Text></Button>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#ffffff" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text>Delete from the list</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default Bag

const styles = StyleSheet.create({
    parent: {
        padding: 7,
        position: 'relative',
    },
    tittle: {
        fontSize: 45,
        fontWeight: "bold"
    },
    btnCheck: {
        position: 'absolute',
        padding: 10,
        bottom: 0,
        width: 360,
        backgroundColor: '#f2f2f2'
    },
    amount: {
        flexDirection: 'row',
        marginBottom: 10
    },
    check: {
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: 'green'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
})
