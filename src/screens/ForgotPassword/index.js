import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Alert, TextInput} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  Button,
  Header,
  Left,
  Body,
  Right,
  Card,
  CardItem,
  Text,
} from 'native-base';
import {loginAction} from '../../redux/actions/auth';

import Icon from 'react-native-vector-icons/FontAwesome';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
});

class Login extends Component {
  state = {
    email: '',
    password: '',
    message: '',
  };

  login = () => {
    const {email, password} = this.state;
    this.props.loginAction(email, password);
  };

  showAlert = () => {
    const {message} = this.props.auth;
    if (message !== this.state.message) {
      this.setState({message});
      Alert.alert(message);
    }
  };

  componentDidUpdate() {
    this.showAlert();
  }

  render() {
    return (
      <View style={styles.parent}>
        <View>
          <Header transparent>
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
        <View>
          <Text style={styles.text}>Forgot Password</Text>
        </View>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={(values) => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <View style={styles.register}>
              <Text style={styles.warning}>
                Please, Enter your email address. You will receive a link to
                creat a new password via email
              </Text>
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
                    {errors.email && (
                      <Text style={styles.textError}>{errors.email}</Text>
                    )}
                  </Body>
                </CardItem>
              </Card>
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
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
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
  warning: {
    fontSize: 17,
    marginBottom: 15,
  },
  textInput: {
    width: 300,
  },
  textError: {
    fontSize: 10,
    color: 'red',
  },
});
