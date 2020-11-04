import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Header, Left, Body, Title, Text, Form, Label, Input, Item, Button, Card, CardItem } from 'native-base';
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
                    <Title style={styles.textHead}>Adding Shipping Address</Title>
                </Body>
            </Header>
            <ScrollView>
                <View style={styles.parent}>
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
                                        <Label>Address</Label>
                                        <Input />
                                    </Item>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Item floatingLabel>
                                        <Label>City</Label>
                                        <Input />
                                    </Item>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Item floatingLabel>
                                        <Label>State/Province/Region</Label>
                                        <Input />
                                    </Item>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Item floatingLabel>
                                        <Label>Zip Code(Postal Code)</Label>
                                        <Input />
                                    </Item>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Item floatingLabel>
                                        <Label>Country</Label>
                                        <Input />
                                    </Item>
                                </Body>
                            </CardItem>
                        </Card>
                        <Button style={styles.btn} block><Text>Continue Shoping</Text></Button>
                    </Form>
                </View>
            </ScrollView>
        </>
    )
}

export default AddAddress

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        marginTop: 25
    },
    textHead: {
        color: '#000000',
    },
    parent: {
        padding: 10
    },
    btn:{
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: 'green'
    }
})
