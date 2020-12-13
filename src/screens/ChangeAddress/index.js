import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, TextInput, ScrollView} from 'react-native';
import {
  Header,
  Left,
  Title,
  Button,
  Text,
  Card,
  CardItem,
  Body,
  Form,
  StatusBar,
} from 'native-base';
import {Formik} from 'formik';
import * as yup from 'yup';

import Icon from 'react-native-vector-icons/FontAwesome';
import {getAddressIdAction} from '../../redux/actions/address';

const loginValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Recipient name is required'),
  home: yup.string().required('home is required'),
  address: yup.string().required('address is required'),
  city: yup.string().required('city is required'),
  state: yup.string().required('state is required'),
  zipCode: yup
    .number()
    .integer('Please provide integer')
    .required('zipCode is required'),
  phone: yup.number().required('phone is required'),
});

const AddAddress = ({navigation, route}) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const AddressId = useSelector((state) => state.addressId.data[0]);

  useEffect(() => {
    dispatch(getAddressIdAction(token, route.params));
  }, [dispatch, token, route.params]);

  return (
    <>
      <Header style={styles.header}>
        <StatusBar backgroundColor={'green'} />
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={30} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.textHead}>Change Address</Title>
        </Body>
      </Header>
      <View style={styles.parent}>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{
            name: '',
            address: '',
            home: '',
            zipCode: '',
            city: '',
            state: '',
            phone: '',
          }}
          onSubmit={(values) => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <ScrollView>
              <Form>
                <Card>
                  <CardItem>
                    <Body>
                      <TextInput
                        name="home"
                        placeholder="home/ office"
                        style={styles.textInput}
                        onChangeText={handleChange('home')}
                        onBlur={handleBlur('home')}
                        value={AddressId.home}
                      />
                      {errors.home && (
                        <Text style={styles.textError}>{errors.home}</Text>
                      )}
                      <TextInput
                        name="name"
                        placeholder="Recipient name"
                        style={styles.textInput}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={AddressId.recipients_name}
                      />
                      {errors.name && (
                        <Text style={styles.textError}>{errors.name}</Text>
                      )}
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
                        value={AddressId.address}
                      />
                      {errors.address && (
                        <Text style={styles.textError}>{errors.address}</Text>
                      )}
                      <TextInput
                        name="city"
                        placeholder="city"
                        style={styles.textInput}
                        onChangeText={handleChange('city')}
                        onBlur={handleBlur('city')}
                        value={AddressId.city}
                      />
                      {errors.city && (
                        <Text style={styles.textError}>{errors.city}</Text>
                      )}
                      <TextInput
                        name="zipCode"
                        placeholder="zipCode"
                        style={styles.textInput}
                        onChangeText={handleChange('zipCode')}
                        onBlur={handleBlur('zipCode')}
                        value={parseInt(AddressId.postal_code)}
                      />
                      {errors.zipCode && (
                        <Text style={styles.textError}>{errors.zipCode}</Text>
                      )}
                    </Body>
                  </CardItem>
                </Card>
                <Card>
                  <CardItem>
                    <Body>
                      <TextInput
                        name="phone"
                        placeholder="phone"
                        style={styles.textInput}
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        value={AddressId.recipients_phone}
                      />
                      {errors.phone && (
                        <Text style={styles.textError}>{errors.phone}</Text>
                      )}
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
            </ScrollView>
          )}
        </Formik>
      </View>
    </>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  textHead: {
    color: '#000000',
  },
  parent: {
    padding: 10,
  },
  btn: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: 'green',
  },
  textInput: {
    fontSize: 18,
    borderBottomWidth: 1,
    width: 300,
    borderColor: '#8E8E8E',
  },
  textError: {
    fontSize: 10,
    color: 'red',
  },
});
