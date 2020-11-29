import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert, StatusBar, ScrollView } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
    Button, Header, Left, Body,
    Right, Card, CardItem,
    Form, Item, Input
} from 'native-base';
import { registerAction } from '../../redux/actions/auth'

import Icon from 'react-native-vector-icons/FontAwesome'

const loginValidationSchema = yup.object().shape({
    name: yup
        .string()
        .matches(/(\w.+\s).+/, 'Enter at least 2 names')
        .required('Name is required'),
    email: yup
        .string()
        .email("Please enter valid email")
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
})

class SignUp extends React.Component {
    state = {
        message: ''
    }

    showAlert = () => {
        const { message } = this.props.registerData
        if (message !== this.state.message) {
            this.setState({ message })
            Alert.alert(message)
        }
    }

    async componentDidUpdate() {
        await this.showAlert()
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={styles.parent}>
                <View>
                    <Header transparent>
                        <StatusBar backgroundColor={'green'} />
                        <Left>
                            <Button transparent>
                                <Icon name='angle-left' size={30} />
                            </Button>
                        </Left>
                        <Right />
                    </Header>
                </View>
                <ScrollView>
                    <View>
                        <Text style={styles.text}>Sign Up</Text>
                    </View>
                    <Formik
                        validationSchema={loginValidationSchema}
                        initialValues={{ name: '', email: '', password: '' }}
                        onSubmit={values => this.props.registerAction(values.name, values.email, values.password)} >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            isValid,
                        }) => (
                                <View style={styles.register}>
                                    <Form>
                                        <Card transparent>
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
                                        <Card transparent>
                                            <CardItem>
                                                <Body>
                                                    <TextInput
                                                        name="email"
                                                        placeholder="Email Address"
                                                        style={styles.textInput}
                                                        onChangeText={handleChange('email')}
                                                        onBlur={handleBlur('email')}
                                                        value={values.email}
                                                        keyboardType="email-address"
                                                    />
                                                    {errors.email &&
                                                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                                                    }
                                                </Body>
                                            </CardItem>
                                        </Card>
                                        <Card transparent>
                                            <CardItem>
                                                <Body>
                                                    <TextInput
                                                        name="password"
                                                        placeholder="Password"
                                                        style={styles.textInput}
                                                        onChangeText={handleChange('password')}
                                                        onBlur={handleBlur('password')}
                                                        value={values.password}
                                                        secureTextEntry
                                                    />
                                                    {errors.password &&
                                                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                                                    }
                                                </Body>
                                            </CardItem>
                                        </Card>
                                        <TouchableOpacity>
                                            <Text style={styles.textLogin} onPress={() => this.props.navigation.navigate("Login")}>
                                                Already have a account?
                                        <Icon name="long-arrow-right" size={15} color="green" />
                                            </Text>
                                        </TouchableOpacity>
                                        <Button
                                            style={styles.btnLogin}
                                            onPress={handleSubmit}
                                            disabled={!isValid}
                                            block>
                                            <Text style={styles.btntext}>SIGN UP</Text>
                                        </Button>
                                    </Form>
                                </View>
                            )}
                    </Formik>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    registerData: state.register
})
const mapDispatchToProps = {
    registerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

const styles = StyleSheet.create({
    text: {
        paddingLeft: 15,
        fontSize: 40,
        fontWeight: "bold"
    },
    register: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 50
    },
    input: {
        height: 40
    },
    textLogin: {
        fontSize: 17,
        textAlign: "right",
        marginRight: 15,
        marginTop: 10
    },
    btnLogin: {
        borderRadius: 25,
        marginTop: 25,
        backgroundColor: 'green'
    },
    btntext: {
        color: "#FFFFFF",
    },
    textInput: {
        width: 300
    }
})
