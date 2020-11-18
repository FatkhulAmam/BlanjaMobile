import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import { Header, Left, Body, Title, Text, Card, Button, CardItem, Right } from 'native-base';
import {useSelector} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import runningImage from '../../assets/images/running.png'
import photo from '../../assets/images/photo.png'
class Item extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.movePage}>
                <View style={styles.renderParent}>
                    <Card transparent>
                        <CardItem>
                            <Body style={styles.cardItem}>
                                <Image source={photo} />
                                <View style={styles.star}>
                                    <Icon name='star-o' size={18} />
                                    <Icon name='star-o' size={18} />
                                    <Icon name='star-o' size={18} />
                                    <Icon name='star-o' size={18} />
                                    <Icon name='star-o' size={18} />
                                </View>
                                <Text note>{this.props.category}</Text>
                                <Text style={styles.renderText}>{this.props.name}</Text>
                                <Text>{this.props.price}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </TouchableOpacity>
        )
    }
}

const DetailProduct = ({ navigation }) => {
    const [count, setCount] = useState(0);
    const onPressInc = () => setCount(prevCount => prevCount + 1);
    const onPressDec = () => setCount(prevCount => prevCount - 1);
    const product = useSelector(state => state.product)

    return (
        <>
            <Header style={styles.header} transparent>
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
            <ScrollView nestedScrollEnabled={true}>
                <View>
                    <ScrollView horizontal>
                        <Image style={styles.productImage} source={runningImage} />
                        <Image style={styles.productImage} source={runningImage} />
                    </ScrollView>
                    <View style={styles.descProduct}>
                        <View>
                            <ScrollView nestedScrollEnabled={true}>
                                <View style={styles.descHead}>
                                    <View>
                                        <Text>Colors</Text>
                                        <View style={styles.sz}>
                                            <TouchableOpacity style={styles.btnColor}></TouchableOpacity>
                                        </View>
                                    </View>
                                    <Right />
                                    <View>
                                        <Text>Size</Text>
                                        <View style={styles.btnCount}>
                                            <TouchableOpacity style={styles.btn} onPress={onPressDec}>
                                                <Icon name="minus" size={15} color="#8f8f8f" />
                                            </TouchableOpacity>
                                            <Text style={styles.counter}>{count}</Text>
                                            <TouchableOpacity style={styles.btn} onPress={onPressInc}>
                                                <Icon name="plus" size={15} color="#8f8f8f" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.productDetail}>
                                    <Text style={styles.merk}>H&M</Text>
                                    <Left />
                                    <Text style={styles.price}>$ 50.0</Text>
                                </View>
                                <Text note>Short black dress</Text>
                                <Text>Ratting</Text>
                                <Text>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Text>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <Button style={styles.btnCart} block onPress={() => navigation.navigate('Bag')}><Text>add to cart</Text></Button>
                        <View>
                            <TouchableOpacity style={styles.AddRatting} onPress={()=> navigation.navigate('RatingReview')}>
                                <Text>Add Ratting</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.border}></View>
                        <Text note>Sleeves wirh a small trill trim</Text>
                        <View style={styles.title}>
                            <Text style={styles.like}>You Can Also Like This</Text>
                            <Left />
                            <Text note>12 item</Text>
                        </View>
                    </View>
                    <FlatList
                                horizontal
                                data={product.data}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => (
                                    <Item 
                                    date={item.input_date}
                                    category={item.category_name}
                                    name={item.name} price={item.price}
                                    movePage={()=>navigation.navigate("DetailProduct")} />
                                )}
                            />
                </View>
            </ScrollView>
        </>
    )
}

export default DetailProduct

const styles = StyleSheet.create({
    renderParent: {
        borderBottomWidth: 1,
        borderColor: '#e8e8e8'
    },
    header: {
        backgroundColor: '#FFFFFF',
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
    descHead: {
        flexDirection: 'row'
    },
    btnCount: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
        borderRadius: 50,
        width: 30,
        height: 30,
        marginLeft: 10,
        marginRight: 10
    },
    btnColor: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 50,
        borderColor: '#A10000',
        borderWidth: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productDetail: {
        flexDirection: "row"
    },
    merk: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#A10000'
    },
    footer: {
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
    btnCart: {
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: 'green'
    },
    border: {
        borderBottomWidth: 5,
        width: 100,
        marginTop: 20,
        marginLeft: 125,
        marginBottom: 20,
        borderRadius: 50,
    },
    title: {
        marginTop: 10,
        flexDirection: 'row',
        marginTop: 25
    },
    like: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    star:{
        flexDirection: 'row',
        marginTop: 5
    },
    AddRatting:{
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    }
})

