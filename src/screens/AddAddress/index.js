import React from 'react'
import { StyleSheet, View, ScrollView, TextInput } from 'react-native'
import { Header, Left, Body, Title, Text, Form, Label, Input, Item, Button, Card, CardItem } from 'native-base';
import { Formik } from 'formik'
import * as yup from 'yup'
import Icon from 'react-native-vector-icons/FontAwesome'

const loginValidationSchema = yup.object().shape({
    name: yup
        .string()
        .matches(/(\w.+\s).+/, 'Enter at least 2 names')
        .required('Name is required'),
    address: yup
        .string()
        .required('address is required'),
    city: yup
        .string()
        .required('city is required'),
    state: yup
        .string()
        .required('state is required'),
    zipCode: yup
        .number()
        .integer('Please provide integer')
        .required('zipCode is required'),
    country: yup
        .string()
        .required('country is required'),
})

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
                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={{ name: '', address: '', password: '', zipCode: '', city: '', state: '', country: '' }}
                    onSubmit={values => console.log(values)}
                >
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
                                                    name="name"
                                                    placeholder="name"
                                                    style={styles.textInput}
                                                    onChangeText={handleChange('name')}
                                                    onBlur={handleBlur('name')}
                                                    value={values.name}
                                                />
                                                {errors.name &&
                                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>
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
                                                    name="state"
                                                    placeholder="state"
                                                    style={styles.textInput}
                                                    onChangeText={handleChange('state')}
                                                    onBlur={handleBlur('state')}
                                                    value={values.state}
                                                />
                                                {errors.state &&
                                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.state}</Text>
                                                }
                                            </Body>
                                        </CardItem>
                                    </Card>
                                    <Card>
                                        <CardItem>
                                            <Body>
                                                <TextInput
                                                    name="zipCode"
                                                    placeholder="zipCode"
                                                    style={styles.textInput}
                                                    onChangeText={handleChange('zipCode')}
                                                    onBlur={handleBlur('zipCode')}
                                                    value={values.zipCode}
                                                />
                                                {errors.zipCode &&
                                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.zipCode}</Text>
                                                }
                                            </Body>
                                        </CardItem>
                                    </Card>
                                    <Card>
                                        <CardItem>
                                            <Body>
                                                <TextInput
                                                    name="country"
                                                    placeholder="country"
                                                    style={styles.textInput}
                                                    onChangeText={handleChange('country')}
                                                    onBlur={handleBlur('country')}
                                                    value={values.country}
                                                />
                                                {errors.country &&
                                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.country}</Text>
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

export default AddAddress

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF'
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
