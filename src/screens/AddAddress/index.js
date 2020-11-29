import React from 'react'
import { StyleSheet, View, ScrollView, TextInput, Alert } from 'react-native'
import { Header, Left, Body, Title, Text, Form, Button, Card, CardItem } from 'native-base';
import { connect } from 'react-redux'
import * as yup from 'yup'
import { Formik } from 'formik'
import Icon from 'react-native-vector-icons/FontAwesome'

import { makeAddress } from '../../redux/actions/address'
const loginValidationSchema = yup.object().shape({
    home: yup
        .string()
        .required('home is required'),
    recipientsPhone: yup
        .number()
        .integer('Please provide integer')
        .required('postal code is required'),
    address: yup
        .string()
        .required('address is required'),
    city: yup
        .string()
        .required('city is required'),
    postalCode: yup
        .number()
        .integer('Please provide integer')
        .required('postal code is required'),
    recipientsName: yup
        .string()
        .matches(/(\w.+\s).+/, 'Enter at least 2 names')
        .required('Name is required'),
})

class AddAddress extends React.Component {
    state = {
        message: ''
    }
    
    showAlert = () => {
        const { message } = this.props.addAddressData
        if (message !== this.state.message) {
            this.setState({ message })
            Alert.alert(message)
        }
    }
    async componentDidUpdate() {
        await this.showAlert()
    }

    render() {
        const { token } = this.props.auth
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
                    <Formik
                        validationSchema={loginValidationSchema}
                        initialValues={{ home: '', recipientsName: '', recipientsPhone: '', address: '', city: '', postalCode: '' }}
                        onSubmit={values => this.props.makeAddress(token, values.home, values.recipientsName, values.recipientsPhone, values.address, values.city, values.postalCode)}>
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            isValid,
                        }) => (
                                <View style={styles.parent}>
                                    <Form>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <TextInput
                                                        name="home"
                                                        placeholder="home"
                                                        style={styles.textInput}
                                                        onChangeText={handleChange('home')}
                                                        onBlur={handleBlur('home')}
                                                        value={values.home}
                                                    />
                                                    {errors.home &&
                                                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.home}</Text>
                                                    }
                                                </Body>
                                            </CardItem>
                                        </Card>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <TextInput
                                                        name="recipientsName"
                                                        placeholder="recipients name"
                                                        style={styles.textInput}
                                                        onChangeText={handleChange('recipientsName')}
                                                        onBlur={handleBlur('recipientsName')}
                                                        value={values.recipientsName}
                                                    />
                                                    {errors.recipientsName &&
                                                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.recipientsName}</Text>
                                                    }
                                                </Body>
                                            </CardItem>
                                        </Card>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <TextInput
                                                        name="recipientsPhone"
                                                        placeholder="recipients phone"
                                                        style={styles.textInput}
                                                        onChangeText={handleChange('recipientsPhone')}
                                                        onBlur={handleBlur('recipientsPhone')}
                                                        value={values.recipientsPhone}
                                                    />
                                                    {errors.recipientsPhone &&
                                                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.recipientsPhone}</Text>
                                                    }
                                                </Body>
                                            </CardItem>
                                        </Card>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <TextInput
                                                        name="address"
                                                        placeholder="address"
                                                        style={styles.textInput}
                                                        onChangeText={handleChange('address')}
                                                        onBlur={handleBlur('address')}
                                                        value={values.address}
                                                    />
                                                    {errors.address &&
                                                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.address}</Text>
                                                    }
                                                </Body>
                                            </CardItem>
                                        </Card>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <TextInput
                                                        name="city"
                                                        placeholder="city"
                                                        style={styles.textInput}
                                                        onChangeText={handleChange('city')}
                                                        onBlur={handleBlur('city')}
                                                        value={values.city}
                                                    />
                                                    {errors.city &&
                                                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.city}</Text>
                                                    }
                                                </Body>
                                            </CardItem>
                                        </Card>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <TextInput
                                                        name="postalCode"
                                                        placeholder="postal code"
                                                        style={styles.textInput}
                                                        onChangeText={handleChange('postalCode')}
                                                        onBlur={handleBlur('postalCode')}
                                                        value={values.postalCode}
                                                    />
                                                    {errors.postalCode &&
                                                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.postalCode}</Text>
                                                    }
                                                </Body>
                                            </CardItem>
                                        </Card>
                                        <Button
                                            style={styles.btn}
                                            onPress={handleSubmit}
                                            disabled={!isValid}
                                            block>
                                            <Text style={styles.btntext}>Add Address</Text>
                                        </Button>
                                    </Form>
                                </View>
                            )}
                    </Formik>
                </ScrollView>
            </>
        )
    }
}

const mapStateToProps = state => ({
    addAddressData: state.addAddress,
    auth: state.auth
})
const mapDispatchToProps = {
    makeAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress)

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        marginTop: 20
    },
    textHead: {
        color: '#000000',
    },
    parent: {
        padding: 10
    },
    btn: {
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: 'green'
    },
    textInput: {
        fontSize: 18,
        width: 300
    }
})
