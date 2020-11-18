import React from 'react'
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { Text, Card, CardItem, Body, Button, Right } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

import BigBanner from '../../assets/images/BigBanner.png'
import photo from '../../assets/images/photo.png'
import BellIcon from '../../assets/images/bell.svg'

import { getNewProductAction } from '../../redux/actions/product'

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

class Home extends React.Component {
    componentDidMount() {
        this.props.getNewProductAction()
    }


    render() {
        const { isLoading, data, isError, message } = this.props.productState
        return (
            <>
                <ScrollView>
                    <View style={styles.banner}>
                        <Image style={styles.image} source={BigBanner} />
                        <Button style={styles.notifIcon} onPress={() => navigation.navigate("Notification")}>
                            <BellIcon />
                        </Button>
                        <Text style={styles.textBanner}>Fashion Sale</Text>
                    </View>
                    <View style={styles.parent}>
                        <Text style={styles.bigText}>New</Text>
                        <View style={styles.tagText}>
                            <Text note>You never seen it before</Text>
                            <Right />
                            <Text>View All</Text>
                        </View>
                        <View>
                            <FlatList
                                horizontal
                                data={data}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => (
                                    <Item 
                                    date={item.input_date}
                                    category={item.category_name}
                                    name={item.name} price={item.price}
                                    movePage={()=>this.props.navigation.navigate("DetailProduct")} />
                                )}
                            />
                        </View>
                        <Text style={styles.bigText}>Popular</Text>
                        <View style={styles.tagText}>
                            <Text note>You never seen it before</Text>
                            <Right />
                            <Text>View All</Text>
                        </View>
                        <View>
                            <FlatList
                                horizontal
                                data={data}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => (
                                    <Item 
                                    date={item.input_date} 
                                    category={item.category_name} 
                                    name={item.name} price={item.price} 
                                    movePage={()=>this.props.navigation.navigate("DetailProduct")} />
                                )}
                            />
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    }
}

const mapStateToProps = state => ({
    productState: state.product
})
const mapDispatchToProps = {
    getNewProductAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    renderParent: {
        borderBottomWidth: 1,
        borderColor: '#e8e8e8'
    },
    renderText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardItem:{
        marginLeft: -15
    },
    banner: {
        position: 'relative'
    },
    image: {
        height: 450,
    },
    notifIcon: {
        top: 40,
        right: 25,
        position: 'absolute',
        width: 45,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'rgba(225,220,220,0.2)'
    },
    textBanner: {
        fontSize: 75,
        fontWeight: 'bold',
        color: '#FFFFFF',
        position: 'absolute',
        bottom: 50,
        left: 15
    },
    parent: {
        paddingLeft: 10,
        backgroundColor: '#FFFFFF'
    },
    bigText: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    tagText: {
        flexDirection: 'row',
        marginRight: 10
    },
    star:{
        flexDirection: 'row',
        marginTop: 5
    }
})

