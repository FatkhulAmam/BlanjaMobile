import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { Text, Right, Card } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'

class Item extends React.Component {
    state = {
        count : 0
    }
    onPressInc = () => this.setState(prevCount => prevCount + 1);
    onPressDec = () => this.setState(prevCount => prevCount - 1);

    render() {
        return (
            <View style={styles.parent}>
                <Card style={styles.cardBag}>
                    <Image style={styles.cardImage} source={this.props.image} />
                    <View>
                        <View style={styles.topCard}>
                            <Text style={styles.name}>{this.props.name}</Text>
                            <TouchableOpacity onPress={() => { setModalVisible(!modalVisible); }}>
                                <Icon name="ellipsis-v" size={22} color="#8f8f8f" style={{ marginTop: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.tipe}>
                            <Text note>color: <Text>red</Text>   </Text>
                            <Text note>sixe: <Text>s</Text></Text>
                        </View>
                        <View style={styles.btnCount}>
                            <TouchableOpacity style={styles.btn} onPress={this.onPressDec}>
                                <Icon name="minus" size={15} color="#8f8f8f" />
                            </TouchableOpacity>
                            <Text style={styles.counter}>{this.props.amount}</Text>
                            <TouchableOpacity style={styles.btn} onPress={this.onPressInc}>
                                <Icon name="plus" size={15} color="#8f8f8f" />
                            </TouchableOpacity>
                            <Text style={styles.price}>{this.props.price}</Text>
                        </View>
                    </View>
                    <Right />
                </Card>
            </View>
        )
    }
}

export default Item
const styles = StyleSheet.create({
    parent: {
        padding: 7,
        position: 'relative',
    },
    cardBag: {
        flexDirection: 'row',
        paddingRight: 15,
        borderRadius: 10,
    },
    cardImage: {
        marginRight: 10,
        height: 115,
        width: 115,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    topCard: {
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
    counter: {
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
        marginLeft: 25,
        marginTop: 10
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