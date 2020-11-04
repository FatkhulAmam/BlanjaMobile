import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Switch } from 'react-native'
import { Header, Left, Right, Button, Text, Card, CardItem, Body, Item, Input, Form, Label } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'

const MyOrder = ({ navigation }) => {
    const [isEnabledSales, setIsEnabledSales] = useState(false);
    const [isEnabledNew, setIsEnabledNew] = useState(false);
    const [isEnabledDeliver, setIsEnabledDeliver] = useState(false);
    const toggleSwitchSales = () => setIsEnabledSales(previousState => !previousState);
    const toggleSwitchNew = () => setIsEnabledNew(previousState => !previousState);
    const toggleSwitchDeliver = () => setIsEnabledDeliver(previousState => !previousState);

    return (
        <>
            <Header style={styles.header} transparent>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='angle-left' size={30} />
                    </Button>
                </Left>
                <Right>
                    <Button transparent>
                        <Icon name='search' size={22} />
                    </Button>
                </Right>
            </Header>
            <ScrollView>
                <View style={styles.parent}>
                    <Text style={styles.tittle}>Settings</Text>
                    <Text style={styles.info}>Personal Information</Text>
                    <Form>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Item floatingLabel>
                                        <Label>Full name</Label>
                                        <Input />
                                    </Item>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Item floatingLabel>
                                        <Label>Date of birth</Label>
                                        <Input />
                                    </Item>
                                </Body>
                            </CardItem>
                        </Card>
                    </Form>
                    <View style={styles.labelPass}>
                        <Text style={styles.textPass}>Password</Text>
                        <Left />
                        <Text style={styles.textPass} note>change</Text>
                    </View>
                    <Card>
                        <CardItem>
                            <Body>
                                <Item floatingLabel>
                                    <Label>Password</Label>
                                    <Input />
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                    <Text style={styles.textPass}>Notifications</Text>
                    <View>
                        <Text style={styles.notif}>Sales</Text>
                        <Switch
                            trackColor={{ false: "#c9c9c9", true: "#c9c9c9" }}
                            thumbColor={isEnabledSales ? "#0ba600" : "#f4f3f4"}
                            onValueChange={toggleSwitchSales}
                            value={isEnabledSales}
                        />
                        <Text style={styles.notif}>New Arrivals</Text>
                        <Switch
                            trackColor={{ false: "#c9c9c9", true: "#c9c9c9" }}
                            thumbColor={isEnabledNew ? "#0ba600" : "#f4f3f4"}
                            onValueChange={toggleSwitchNew}
                            value={isEnabledNew}
                        />
                        <Text style={styles.notif}>Delivery Status Change</Text>
                        <Switch
                            trackColor={{ false: "#c9c9c9", true: "#c9c9c9" }}
                            thumbColor={isEnabledDeliver ? "#0ba600" : "#f4f3f4"}
                            onValueChange={toggleSwitchDeliver}
                            value={isEnabledDeliver}
                        />
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default MyOrder

const styles = StyleSheet.create({
    parent: {
        padding: 15
    },
    info: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    tittle: {
        fontSize: 40,
        fontWeight: "bold"
    },
    card: {
        height: 70
    },
    labelPass: {
        flexDirection: 'row'
    },
    textPass: {
        marginTop: 25,
        fontSize: 18,
        fontWeight: 'bold'
    },
    notif: {
        top: 20
    }
})
