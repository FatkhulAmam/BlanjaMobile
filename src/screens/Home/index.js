import React from 'react';
import {StyleSheet, View, Image, ScrollView, FlatList} from 'react-native';
import {Text, Button, Right} from 'native-base';
import {connect} from 'react-redux';
import {API_URL} from '@env';

import BigBanner from '../../assets/images/BigBanner.png';
import photo from '../../assets/images/photo.png';
import BellIcon from '../../assets/images/bell.svg';

import {getNewProductAction} from '../../redux/actions/product';
import {getProfile} from '../../redux/actions/profile';
import CardProduct from '../../components/cardProduct';

class Home extends React.Component {
  componentDidMount() {
    this.props.getNewProductAction();
    this.props.getProfile(this.props.token);
  }

  render() {
    const {allData} = this.props.productState;
    return (
      <>
        <ScrollView>
          <View style={styles.banner}>
            <Image style={styles.image} source={BigBanner} />
            <Button
              style={styles.notifIcon}
              onPress={() => this.props.navigation.navigate('Notification')}>
              <BellIcon />
            </Button>
            <Text style={styles.textBanner}>Fashion Sale</Text>
          </View>
          <View style={styles.parent}>
            <Text style={styles.bigText}>New</Text>
            <View style={styles.tagText}>
              <Text note>You never seen it before</Text>
              <Right />
              <Text>View All</Text>
            </View>
            <View>
              <FlatList
                horizontal
                data={allData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <CardProduct
                    image={item.url ? {uri: `${API_URL}${item.url}`} : photo}
                    date={item.input_date}
                    category={item.category_name}
                    name={item.name}
                    price={item.price}
                    movePage={() =>
                      this.props.navigation.navigate('DetailProduct', item.id)
                    }
                  />
                )}
              />
            </View>
            <Text style={styles.bigText}>Popular</Text>
            <View style={styles.tagText}>
              <Text note>You never seen it before</Text>
              <Right />
              <Text>View All</Text>
            </View>
            <View>
              <FlatList
                horizontal
                data={allData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <CardProduct
                    image={item.url ? {uri: `${API_URL}${item.url}`} : photo}
                    date={item.input_date}
                    category={item.category_name}
                    name={item.name}
                    price={item.price}
                    movePage={
                      (() => this.props.navigation.navigate('DetailProduct'),
                      item.id)
                    }
                  />
                )}
              />
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  productState: state.product,
  token: state.auth.token,
});
const mapDispatchToProps = {
  getNewProductAction,
  getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  cardItem: {
    marginLeft: -15,
  },
  banner: {
    position: 'relative',
  },
  image: {
    height: 450,
  },
  notifIcon: {
    top: 40,
    right: 25,
    position: 'absolute',
    width: 45,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(225,220,220,0.2)',
  },
  textBanner: {
    fontSize: 75,
    fontWeight: 'bold',
    color: '#FFFFFF',
    position: 'absolute',
    bottom: 50,
    left: 15,
  },
  parent: {
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
  },
  bigText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  tagText: {
    flexDirection: 'row',
    marginRight: 10,
  },
});
