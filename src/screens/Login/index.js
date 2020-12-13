import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Button, Header, Left, Body, Right, Card, CardItem} from 'native-base';
import {loginAction} from '../../redux/actions/auth';

import Icon from 'react-native-vector-icons/FontAwesome';
import LoadingIndicator from '../../components/ModalLoading';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

class Login extends Component {
  state = {
    message: '',
  };

  doLogin = async (data) => {
    await this.props.loginAction(data.email, data.password);
    const {message, isError} = this.props.auth;
    if (isError === false && message !== this.state.message) {
      this.setState({message});
      Alert.alert(message);
    } else {
      this.setState({message});
      Alert.alert(message);
    }
  };

  render() {
    return (
      <View style={styles.parent}>
        <View>
          <Header transparent>
            <StatusBar backgroundColor={'green'} />
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}>
                <Icon name="angle-left" size={30} />
              </Button>
            </Left>
            <Right />
          </Header>
        </View>
        {this.props.isLoading === false ? (
          <ScrollView>
            <View>
              <Text style={styles.text}>Login</Text>
            </View>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{email: '', password: ''}}
              onSubmit={(values) => this.doLogin(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
                touched,
              }) => (
                <View style={styles.register}>
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
                        {touched.email && errors.email && (
                          <Text style={styles.textError}>{errors.email}</Text>
                        )}
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
                        {touched.password && errors.password && (
                          <Text style={styles.textError}>
                            {errors.password}
                          </Text>
                        )}
                      </Body>
                    </CardItem>
                  </Card>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('ForgotPassword')
                    }>
                    <Text style={styles.textLogin}>
                      Forgot your password
                      <Icon name="long-arrow-right" size={15} color="green" />
                    </Text>
                  </TouchableOpacity>
                  <Button
                    style={styles.btnLogin}
                    onPress={handleSubmit}
                    disabled={!isValid}
                    block>
                    <Text style={styles.btntext}>LOGIN</Text>
                  </Button>
                </View>
              )}
            </Formik>
          </ScrollView>
        ) : (
          <LoadingIndicator />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isLoading: state.auth.isLoading,
});
const mapDispatchToProps = {
  loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  text: {
    paddingLeft: 15,
    fontSize: 40,
    fontWeight: 'bold',
  },
  register: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
  },
  textLogin: {
    fontSize: 17,
    textAlign: 'right',
    marginRight: 15,
    marginTop: 10,
  },
  btnLogin: {
    borderRadius: 25,
    marginTop: 25,
    backgroundColor: 'green',
  },
  btntext: {
    color: '#FFFFFF',
  },
  textInput: {
    width: 300,
  },
  textError: {
    fontSize: 10,
    color: 'red',
  },
});
