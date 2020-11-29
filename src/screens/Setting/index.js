import React, { useState, createRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, View, ScrollView, Switch, TextInput, TouchableOpacity, Image } from 'react-native'
import { Header, Left, Right, Button, Text, Card, CardItem, Body, Item, Input, Form, Label } from 'native-base';
import { Formik } from 'formik'
import * as yup from 'yup'
import ActionSheet from "react-native-actions-sheet";

import Icon from 'react-native-vector-icons/FontAwesome'

const actionSheetRef = createRef();
import { getProfile } from '../../redux/actions/profile'
import { editProfile } from '../../redux/actions/profile'

const loginValidationSchema = yup.object().shape({
    user_name: yup
        .string()
        .matches(/(\w.+\s).+/, 'Enter at least 2 names')
        .required('user name is required'),
    birth: yup
        .string()
        .required('birth date is required'),
})

const Setting = ({ navigation }) => {
    const [isEnabledSales, setIsEnabledSales] = useState(false);
    const [isEnabledNew, setIsEnabledNew] = useState(false);
    const [isEnabledDeliver, setIsEnabledDeliver] = useState(false);
    const toggleSwitchSales = () => setIsEnabledSales(previousState => !previousState);
    const toggleSwitchNew = () => setIsEnabledNew(previousState => !previousState);
    const toggleSwitchDeliver = () => setIsEnabledDeliver(previousState => !previousState);

    const token = useSelector(state => state.auth.token)
    const profile = useSelector(state => state.profile)
    const editUser = useSelector(state => state.editUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfile(token))
    }, [dispatch, token])

    return (
        <>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ user_name: '', birth: ''}}
                onSubmit={values => dispatch(editProfile(token, values.user_name, values.birth)) }>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                }) => (
                        <View>
                            <Header style={styles.header} transparent>
                                <Left>
                                    <Button transparent onPress={() => navigation.goBack()}>
                                        <Icon name='angle-left' size={30} />
                                    </Button>
                                </Left>
                                <Right>
                                    <Button transparent onPress={handleSubmit} disabled={!isValid}>
                                        <Text style={styles.info}>save</Text>
                                    </Button>
                                </Right>
                            </Header>
                            <ScrollView>
                                <View style={styles.parent}>
                                    <Text style={styles.tittle}>Settings</Text>
                                    <Text style={styles.info}>Personal Information</Text>
                                    {Object.keys(profile.data[0]).length && (
                                        <Form>
                                            <Card>
                                                <CardItem>
                                                    <Body>
                                                        <TextInput
                                                            name="user_name"
                                                            placeholder="user name"
                                                            style={styles.textInput}
                                                            onChangeText={handleChange('user_name')}
                                                            onBlur={handleBlur('user_name')}
                                                            value={values.user_name}
                                                        />
                                                        {errors.user_name &&
                                                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.user_name}</Text>
                                                        }
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                            <Card>
                                                <CardItem>
                                                    <Body>
                                                        <TextInput
                                                            name="birth"
                                                            placeholder="birth date"
                                                            style={styles.textInput}
                                                            onChangeText={handleChange('birth')}
                                                            onBlur={handleBlur('birth')}
                                                            value={values.birth}
                                                        />
                                                        {errors.birth &&
                                                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.birth}</Text>
                                                        }
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </Form>
                                    )}
                                    <View style={styles.labelPass}>
                                        <Text style={styles.textPass}>Password</Text>
                                        <Left />
                                        <TouchableOpacity
                                            onPress={() => {
                                                actionSheetRef.current?.setModalVisible();
                                            }}
                                        >
                                            <Text style={styles.textPass} note>change</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Card>
                                        <CardItem>
                                            <Body>
                                                <TextInput
                                                    placeholder="Password"
                                                    style={styles.textInput}
                                                    secureTextEntry
                                                />
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
                        </View>
                    )}
            </Formik>
            <ActionSheet styles={styles.actionSheet} ref={actionSheetRef}>
                <View style={styles.border}></View>
                <View>
                    <Text style={styles.change}>Password Change</Text>
                    <Card transparent>
                        <CardItem>
                            <Body>
                                <TextInput
                                    value={profile.data[0].email}
                                    style={styles.textInput}
                                />
                            </Body>
                        </CardItem>
                    </Card>
                    <Text style={styles.new} note>New Password</Text>
                    <Card transparent>
                        <CardItem>
                            <Body>
                                <TextInput
                                    placeholder="password"
                                    style={styles.textInput}
                                />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card transparent>
                        <CardItem>
                            <Body>
                                <TextInput
                                    placeholder="Confirm Password"
                                    style={styles.textInput}
                                />
                            </Body>
                        </CardItem>
                    </Card>
                    <Button
                        style={styles.btnLogin}
                        block>
                        <Text style={styles.btntext}>confirm</Text>
                    </Button>
                </View>
            </ActionSheet>
        </>
    )
}

export default Setting

const styles = StyleSheet.create({
    parent: {
        padding: 15
    },
    info: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
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
    },
    textInput: {
        width: 300,
        fontSize: 18
    },
    actionSheet: {
        flex: 1,
        height: 1000
    },
    border: {
        borderBottomWidth: 5,
        width: 100,
        marginTop: 20,
        marginLeft: 125,
        marginBottom: 20,
        borderRadius: 50,
        borderColor: '#e8e8e8'
    },
    change: {
        fontSize: 20,
        paddingLeft: 90
    },
    btnLogin: {
        borderRadius: 25,
        backgroundColor: 'green',
        margin: 10,
    },
    btntext: {
        color: "#FFFFFF",
    },
    new: {
        fontSize: 18,
        fontWeight: 'bold',
        left: 240
    }
})
