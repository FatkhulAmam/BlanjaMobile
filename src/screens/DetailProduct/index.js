import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Header, Left, Body, Title, Text, Button, Right} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API_URL} from '@env';

import {getDetailProduct, addToCart} from '../../redux/actions/product';

import photo from '../../assets/images/photo.png';
import CardProdct from '../../components/cardProduct';

const DetailProduct = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const onPressInc = () => setCount((prevCount) => prevCount + 1);
  const onPressDec = () => setCount((prevCount) => prevCount - 1);
  const token = useSelector((state) => state.auth.token);
  const product = useSelector((state) => state.product);
  const detail = useSelector((state) => state.detailProduct.data);
  const [itemsId, setItemId] = useState(detail.id);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    dispatch(getDetailProduct(route.params));
    console.log(amount);
  }, [amount, dispatch, route.params]);

  const addProduct = () => {
    dispatch(addToCart(token, itemsId, amount));
    navigation.navigate('Bag');
  };

  return (
    <>
      <Header style={styles.header} transparent>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name="angle-left" size={30} />
        </Button>
        <Body>
          <Title style={styles.text}>{detail.name}</Title>
        </Body>
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <Icon name="share-alt" size={22} />
        </Button>
      </Header>
      <ScrollView nestedScrollEnabled={true}>
        <View>
          <ScrollView horizontal>
            <Image
              style={styles.productImage}
              source={{uri: `${API_URL}${detail.url}`}}
            />
          </ScrollView>
          <View style={styles.descProduct}>
            <View>
              <ScrollView nestedScrollEnabled={true}>
                <View style={styles.descHead}>
                  <View>
                    <Text>Colors</Text>
                    <View style={styles.sz}>
                      <TouchableOpacity style={styles.btnColor} />
                    </View>
                  </View>
                  <Right />
                  <View>
                    <Text>Size</Text>
                    <View style={styles.btnCount}>
                      <TouchableOpacity style={styles.btn} onPress={onPressDec}>
                        <Icon name="minus" size={15} color="#8f8f8f" />
                      </TouchableOpacity>
                      <Text style={styles.counter}>{count}</Text>
                      <TouchableOpacity style={styles.btn} onPress={onPressInc}>
                        <Icon name="plus" size={15} color="#8f8f8f" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.productDetail}>
                  <Text style={styles.merk}>Nama Toko</Text>
                  <Left />
                  <Text style={styles.price}>{detail.price}</Text>
                </View>
                <Text note>{detail.category}</Text>
                <View style={styles.star}>
                  <Icon name="star-o" size={18} />
                  <Icon name="star-o" size={18} />
                  <Icon name="star-o" size={18} />
                  <Icon name="star-o" size={18} />
                  <Icon name="star-o" size={18} />
                </View>
                <Text>{detail.description}</Text>
              </ScrollView>
            </View>
          </View>
          <View style={styles.footer}>
            <Button style={styles.btnCart} block onPress={addProduct}>
              <Text>add to cart</Text>
            </Button>
            <View>
              <TouchableOpacity
                style={styles.AddRatting}
                onPress={() => navigation.navigate('RatingReview')}>
                <Text>Add Ratting</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.border} />
            <Text note>Sleeves wirh a small trill trim</Text>
            <View style={styles.title}>
              <Text style={styles.like}>You Can Also Like This</Text>
              <Left />
              <Text note>12 item</Text>
            </View>
          </View>
          <FlatList
            horizontal
            data={product.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <CardProdct
                image={item.url ? {uri: `${API_URL}${item.url}`} : photo}
                date={item.input_date}
                category={item.category_name}
                name={item.name}
                price={item.price}
                movePage={() => navigation.navigate('DetailProduct')}
              />
            )}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  renderParent: {
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
  },
  header: {
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#000000',
    paddingLeft: 90,
  },
  productImage: {
    height: 300,
    width: 350,
  },
  descProduct: {
    width: 358,
    height: 150,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  descHead: {
    flexDirection: 'row',
  },
  btnCount: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 50,
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  btnColor: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50,
    borderColor: '#A10000',
    borderWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDetail: {
    flexDirection: 'row',
  },
  merk: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A10000',
  },
  footer: {
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  btnCart: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: 'green',
  },
  border: {
    borderBottomWidth: 5,
    width: 100,
    marginTop: 20,
    marginLeft: 125,
    marginBottom: 20,
    borderRadius: 50,
  },
  title: {
    flexDirection: 'row',
    marginTop: 25,
  },
  like: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  star: {
    flexDirection: 'row',
    marginTop: 5,
  },
  AddRatting: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
});
