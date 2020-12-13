import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Text, Header, Left, Right, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {API_URL} from '@env';

import {showMyCart} from '../../redux/actions/product';

import Icon from 'react-native-vector-icons/FontAwesome';
import photo from '../../assets/images/photo.png';
import CardProduct from '../../components/cardBag';

const Bag = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const detailCart = useSelector((state) => state.cart.data);

  useEffect(() => {
    dispatch(showMyCart(token));
  }, [dispatch, token]);

  return (
    <>
      <Header style={styles.header} transparent>
        <Right>
          <Button transparent onPress={() => navigation.navigate('Search')}>
            <Icon name="search" size={22} />
          </Button>
        </Right>
      </Header>
      <Text style={styles.tittle}>My Bag</Text>
      <View style={styles.parent}>
        <FlatList
          style={styles.flat}
          data={detailCart}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <CardProduct
              image={item.url ? {uri: `${API_URL}${item.url}`} : photo}
              name={item.name}
              price={item.price}
              amount={item.amount}
              id={item.id}
            />
          )}
        />
      </View>
      <View style={styles.btnCheck}>
        <View style={styles.amount}>
          <Text note>Total Amout</Text>
          <Left />
          <Text>Amount</Text>
        </View>
        <Button
          block
          style={styles.check}
          onPress={() => navigation.navigate('CheckOut')}>
          <Text>Check out</Text>
        </Button>
      </View>
    </>
  );
};

export default Bag;

const styles = StyleSheet.create({
  parent: {
    padding: 7,
    position: 'relative',
  },
  tittle: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  btnCheck: {
    position: 'absolute',
    padding: 10,
    bottom: 0,
    width: 360,
    backgroundColor: '#f2f2f2',
  },
  amount: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  check: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: 'green',
  },
  flat: {
    marginBottom: 220,
  },
});
