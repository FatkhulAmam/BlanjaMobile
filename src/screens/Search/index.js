import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import {Header, Text, Button, Card, CardItem, Body} from 'native-base';
import {connect} from 'react-redux';
import {API_URL} from '@env';

import Icon from 'react-native-vector-icons/FontAwesome';
import photo from '../../assets/images/photo.png';
import {getSearchProductAction} from '../../redux/actions/product';
class Search extends React.Component {
  state = {
    keyword: '',
  };
  searchProduct = () => {
    const {keyword} = this.state;
    this.props.getSearchProductAction(keyword);
  };

  render() {
    const {
      dataSearch,
      isLoading,
      allData,
      isError,
      message,
    } = this.props.search;
    return (
      <>
        <Header style={styles.header} transparent>
          <StatusBar backgroundColor={'green'} />
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="angle-left" size={30} />
          </Button>
          <Body>
            <View style={{position: 'relative'}}>
              <TextInput
                style={styles.search}
                placeholder="Search"
                onChangeText={(keyword) => this.setState({keyword})}
              />
              <TouchableOpacity style={styles.icon}>
                <Icon name="search" size={20} onPress={this.searchProduct} />
              </TouchableOpacity>
            </View>
          </Body>
        </Header>
        <ScrollView>
          {isLoading === false &&
            (dataSearch !== ''
              ? dataSearch.length !== 0
              : allData.length !== 0) &&
            (dataSearch !== '' ? dataSearch : allData).map((item) => {
              return (
                <View style={styles.parent} key={item.id}>
                  <View style={styles.CardProduct}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('DetailProduct', item.id)
                      }>
                      <Card transparent>
                        <CardItem style={styles.cardItem}>
                          <Body>
                            <Image
                              style={styles.productImg}
                              source={
                                item.url
                                  ? {uri: `${API_URL}${item.url}`}
                                  : photo
                              }
                            />
                            <View style={styles.star}>
                              <Icon name="star-o" size={18} />
                              <Icon name="star-o" size={18} />
                              <Icon name="star-o" size={18} />
                              <Icon name="star-o" size={18} />
                              <Icon name="star-o" size={18} />
                            </View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text note>{item.category_name}</Text>
                            <Text style={styles.price}>Rp. {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('DetailProduct', item.id)
                      }>
                      <Card transparent>
                        <CardItem style={styles.cardItem}>
                          <Body>
                            <Image
                              style={styles.productImg}
                              source={
                                item.url
                                  ? {uri: `${API_URL}${item.url}`}
                                  : photo
                              }
                            />
                            <View style={styles.star}>
                              <Icon name="star-o" size={18} />
                              <Icon name="star-o" size={18} />
                              <Icon name="star-o" size={18} />
                              <Icon name="star-o" size={18} />
                              <Icon name="star-o" size={18} />
                            </View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text note>{item.category_name}</Text>
                            <Text style={styles.price}>Rp. {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          {isLoading === true && isError === false && <Text>Loading</Text>}
          {isError === true && message !== '' && <Text>{message}</Text>}
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.product,
});
const mapDispatchToProps = {
  getSearchProductAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

const styles = StyleSheet.create({
  search: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 50,
    paddingLeft: 15,
    fontSize: 20,
    marginLeft: 13,
    marginTop: 5,
  },
  icon: {
    color: '#a3a3a3',
    position: 'absolute',
    top: 14,
    right: 20,
  },
  parent: {
    backgroundColor: '#fafafa',
    width: 'auto',
  },
  productImg: {
    width: 150,
    height: 200,
  },
  star: {
    flexDirection: 'row',
    marginTop: 5,
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
  },
  menu: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
  cardItem: {
    width: 170,
    backgroundColor: '#fafafa',
  },
  CardProduct: {
    flexDirection: 'row',
  },
});
