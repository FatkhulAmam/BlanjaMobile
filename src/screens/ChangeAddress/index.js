import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, Left, Title, Button, Text, Card, CardItem, Body, Item, Input, Form, Label } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'

const AddAddress = ({ navigation }) => {
    return (
        <>
            <Header style={styles.header}>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='angle-left' size={30} />
                    </Button>
                </Left>
                <Body>
                    <Title style={styles.textHead}>Change Address</Title>
                </Body>
            </Header>
            <View style={styles.parent}>
                <Form>
                    <Card>
                        <CardItem>
                            <Body>
                                <Item floatingLabel>
                                    <Label>Home / Office Address</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel>
                                    <Label>Recipient's name</Label>
                                    <Input />
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Item floatingLabel>
                                    <Label>Address</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel>
                                    <Label>city</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel>
                                    <Label>postal code</Label>
                                    <Input />
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Item floatingLabel>
                                    <Label>Recipient's Phone</Label>
                                    <Input />
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                        <Button style={styles.btn} block><Text>Continue Shoping</Text></Button>
                </Form>
            </View>
        </>
    )
}

export default AddAddress

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
    },
    textHead: {
        color: '#000000',
    },
    parent:{
        padding: 10
    },
    btn:{
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: 'green'
    }
})
