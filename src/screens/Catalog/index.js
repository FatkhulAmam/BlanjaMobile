import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Text, Header, Left, Body, Right, Button, Title, Card, CardItem, Item } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'
import photo from '../../assets/images/photo.png'

const Catalog = ({navigation}) => {
    return (
        <>
            <Header style={styles.header} noLeft>
                <Button transparent>
                    <Icon name='angle-left' size={30}  onPress={()=>navigation.goBack()}/>
                </Button>
                <Body>
                    <Title style={styles.text}>Women's Top</Title>
                </Body>
                <Button transparent onPress={() => navigation.navigate("Search")}>
                    <Icon name='search' size={22} />
                </Button>
            </Header>
            <View style={styles.menu}>
                <Text>Filter</Text>
                <Text>Sort</Text>
                <Text>Menu</Text>
            </View>
            <ScrollView>
                <View style={styles.parent}>
                    <View style={styles.CardProduct}>
                        <Card style={styles.cardItem} transparent>
                            <CardItem>
                                <Body>
                                    <Image source={photo} />
                                    <Text>Bintang</Text>
                                    <Text note>Toko</Text>
                                    <Text>Nama Barang</Text>
                                    <Text>Rp. Harga</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={styles.cardItem} transparent>
                            <CardItem>
                                <Body>
                                    <Image source={photo} />
                                    <Text>Bintang</Text>
                                    <Text note>Toko</Text>
                                    <Text>Nama Barang</Text>
                                    <Text>Rp. Harga</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={styles.CardProduct}>
                        <Card style={styles.cardItem} transparent>
                            <CardItem>
                                <Body>
                                    <Image source={photo} />
                                    <Text>Bintang</Text>
                                    <Text note>Toko</Text>
                                    <Text>Nama Barang</Text>
                                    <Text>Rp. Harga</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={styles.cardItem} transparent>
                            <CardItem>
                                <Body>
                                    <Image source={photo} />
                                    <Text>Bintang</Text>
                                    <Text note>Toko</Text>
                                    <Text>Nama Barang</Text>
                                    <Text>Rp. Harga</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Catalog

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF'
    },
    text: {
        color: '#000000',
        paddingLeft: 90,
    },
    menu:{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    parent: {
        padding: 10,
    },
    cardItem: {
        width: 180,
    },
    CardProduct:{
        flexDirection: 'row'
    }
})
