import React from 'react'
import { StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Header, Left, Body, Title, Text, Card, Button, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'

import runningImage from '../../assets/images/running.png'
import photo from '../../assets/images/photo.png'

const DetailProduct = ({ navigation }) => {
    return (
        <>
            <Header style={styles.header}>
                <Button transparent onPress={() => navigation.goBack()}>
                    <Icon name='angle-left' size={30} />
                </Button>
                <Body>
                    <Title style={styles.text}>product name</Title>
                </Body>
                <Button transparent onPress={() => navigation.navigate("Search")}>
                    <Icon name='share-alt' size={22} />
                </Button>
            </Header>
            <ScrollView>
                <View>
                    <ScrollView horizontal>
                        <Image style={styles.productImage} source={runningImage} />
                        <Image style={styles.productImage} source={runningImage} />
                    </ScrollView>
                    <View style={styles.descProduct}>
                        <View>
                            <ScrollView>
                                <Text>Button</Text>
                                <View style={styles.productDetail}>
                                    <Text style={styles.merk}>H&M</Text>
                                    <Left />
                                    <Text style={styles.merk}>harga</Text>
                                </View>
                                <Text note>Short black dress</Text>
                                <Text>Ratting</Text>
                                <Text>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Text>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <Button style={styles.btn} block onPress={()=>navigation.navigate()}><Text>add to cart</Text></Button>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>Shipping Info</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>Support</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <View style={styles.title}>
                            <Text style={styles.like}>You Can Also Like This</Text>
                            <Left />
                            <Text note>12 item</Text>
                        </View>
                    </View><ScrollView horizontal>
                        <TouchableOpacity onPress={() => navigation.navigate('DetailProduct')}>
                            <Card transparent>
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
                        </TouchableOpacity>
                        <Card transparent>
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
                        <Card transparent>
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
                        <Card transparent>
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
                    </ScrollView>
                </View>
            </ScrollView>
        </>
    )
}

export default DetailProduct

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        marginTop: 20
    },
    text: {
        color: '#000000',
        paddingLeft: 90,
    },
    productImage: {
        height: 300,
        width: 350
    },
    descProduct: {
        width: 358,
        height: 150,
        backgroundColor: '#FFFFFF',
        padding: 10
    },
    productDetail: {
        flexDirection: "row"
    },
    merk: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    footer: {
        padding: 10
    },
    btn: {
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: 'green'
    },
    title:{
        marginTop: 10,
        flexDirection: 'row',
    },
    like:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})

