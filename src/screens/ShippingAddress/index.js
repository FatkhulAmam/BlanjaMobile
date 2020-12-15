import React, {useEffect} from 'react';
import {StyleSheet, View, TextInput, FlatList, StatusBar} from 'react-native';
import {Header, Left, Body, Title, Text, Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getAddressAction} from '../../redux/actions/address';
import CardAddress from '../../components/CardAddress';
import LoadingIndicator from '../../components/ModalLoading';

const ShippingAddress = ({navigation}) => {
  const token = useSelector((state) => state.auth.token);
  const address = useSelector((state) => state.address);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAddressAction(token));
  }, [dispatch, token]);

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
          <Title style={styles.textHead}>Shipping Address</Title>
        </Body>
      </Header>
      <View style={styles.parent}>
        <View style={styles.searchCont}>
          <TextInput style={styles.search} placeholder="Search" />
          <Icon style={styles.icon} name="search" size={20} />
        </View>
        <View>
          <Text style={styles.textPass}>Shipping Address</Text>
        </View>
        <View>
          {address.isLoading === false ? (
            <FlatList
              data={address.dataAddress}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <CardAddress
                  name={item.recipients_name}
                  home={item.home}
                  city={item.city}
                  phone={item.recipients_phone}
                  address={item.address}
                  movePage={() => navigation.navigate('ChangeAddress', item.id)}
                />
              )}
            />
          ) : (
            <LoadingIndicator />
          )}
        </View>
        <Button
          style={styles.btn}
          block
          transparent
          onPress={() => {
            navigation.navigate('AddAddress');
          }}>
          <Text style={styles.addText}>ADD NEW ADDRESS</Text>
        </Button>
      </View>
    </>
  );
};

export default ShippingAddress;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    marginTop: 25,
  },
  textHead: {
    color: '#000000',
  },
  parent: {
    padding: 15,
  },
  search: {
    height: 40,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 50,
    paddingLeft: 35,
    fontSize: 20,
    marginTop: 5,
  },
  searchCont: {
    position: 'relative',
  },
  icon: {
    color: '#a3a3a3',
    position: 'absolute',
    top: 14,
    left: 10,
  },
  textPass: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
  tittle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  btn: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 50,
  },
  addText: {
    color: '#000000',
  },
});
