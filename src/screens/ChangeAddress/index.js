import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, TextInput, ScrollView, Alert} from 'react-native';
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
} from 'native-base';
import {Formik} from 'formik';
import * as yup from 'yup';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
  getAddressIdAction,
  updateAddrress,
  getAddressAction,
} from '../../redux/actions/address';
import LoadingIndicator from '../../components/ModalLoading';

const loginValidationSchema = yup.object().shape({
  recipients_name: yup.string().matches(/(\w.+\s).+/, 'Enter at least 2 names'),
  home: yup.string(),
  address: yup.string(),
  city: yup.string(),
  state: yup.string(),
  postal_code: yup.number().integer('Please provide integer'),
  recipients_phone: yup.number().integer('Please provide integer'),
});

const ChangeAddress = ({navigation, route}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddressIdAction(token, route.params));
  }, [dispatch, token, route.params]);

  const token = useSelector((state) => state.auth.token);
  const addressData = useSelector((state) => state.address.dataAddressById[0]);
  const addressIndex = useSelector((state) => state.address);

  const onUpdateAddress = async (data) => {
    await dispatch(updateAddrress(token, data, addressData.id));
    if (addressIndex.isError === true) {
      Alert.alert(addressIndex.message);
    } else {
      Alert.alert(addressIndex.message);
      navigation.navigate('ShippingAddress');
      return dispatch(getAddressAction(token));
    }
  };

  return (
    <>
      <Header style={styles.header} transparent>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={30} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.textHead}>Change Address</Title>
        </Body>
      </Header>
      {addressIndex.isLoading === false ? (
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{
            recipients_name: addressData.recipients_name,
            address: addressData.address,
            home: addressData.home,
            postal_code: `${addressData.postal_code}`,
            city: addressData.city,
            recipients_phone: `${addressData.recipients_phone}`,
          }}
          onSubmit={(values) => onUpdateAddress(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <View style={styles.parent}>
              <ScrollView>
                <Form>
                  <Card transparent>
                    <CardItem>
                      <Body>
                        <TextInput
                          name="home"
                          placeholder="home/ office"
                          style={styles.textInput}
                          onChangeText={handleChange('home')}
                          onBlur={handleBlur('home')}
                          value={values.home}
                        />
                        {errors.home && touched.home && (
                          <Text style={styles.textError}>{errors.home}</Text>
                        )}
                        <TextInput
                          name="recipients_name"
                          placeholder="Recipient name"
                          style={styles.textInput}
                          onChangeText={handleChange('recipients_name')}
                          onBlur={handleBlur('recipients_name')}
                          value={values.recipients_name}
                        />
                        {errors.recipients_name && touched.recipients_name && (
                          <Text style={styles.textError}>
                            {errors.recipients_name}
                          </Text>
                        )}
                      </Body>
                    </CardItem>
                  </Card>
                  <Card transparent>
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
                        {errors.address && touched.address && (
                          <Text style={styles.textError}>{errors.address}</Text>
                        )}
                        <TextInput
                          name="city"
                          placeholder="city"
                          style={styles.textInput}
                          onChangeText={handleChange('city')}
                          onBlur={handleBlur('city')}
                          value={values.city}
                        />
                        {errors.city && touched.city && (
                          <Text style={styles.textError}>{errors.city}</Text>
                        )}
                        <TextInput
                          name="postal_code"
                          placeholder="postal_code"
                          style={styles.textInput}
                          onChangeText={handleChange('postal_code')}
                          onBlur={handleBlur('postal_code')}
                          value={values.postal_code}
                        />
                        {errors.postal_code && touched.postal_code && (
                          <Text style={styles.textError}>
                            {errors.postal_code}
                          </Text>
                        )}
                      </Body>
                    </CardItem>
                  </Card>
                  <Card transparent>
                    <CardItem>
                      <Body>
                        <TextInput
                          name="recipients_phone"
                          placeholder="recipients_phone"
                          style={styles.textInput}
                          onChangeText={handleChange('phrecipients_phoneone')}
                          onBlur={handleBlur('recipients_phone')}
                          value={values.recipients_phone}
                        />
                        {errors.recipients_phone &&
                          touched.recipients_phone && (
                            <Text style={styles.textError}>
                              {errors.recipients_phone}
                            </Text>
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
            </View>
          )}
        </Formik>
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};

export default ChangeAddress;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
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
