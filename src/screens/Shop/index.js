import React from 'react';
import {StyleSheet, View, FlatList, StatusBar} from 'react-native';
import {Text, Header, Left, Body, Right, Button, Title} from 'native-base';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import {getCategory, getProductCategory} from '../../redux/actions/product';
import Item from '../../components/categoryItem';

class Shop extends React.Component {
  componentDidMount() {
    this.props.getCategory();
  }

  render() {
    const {data} = this.props.categoryList;
    return (
      <>
        <Header style={styles.header} transparent>
          <StatusBar backgroundColor={'green'} />
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="angle-left" size={30} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.text}>Categories</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Search')}>
              <Icon name="search" size={22} />
            </Button>
          </Right>
        </Header>
        <View style={styles.parent}>
          <Button
            onPress={() => this.props.navigation.navigate('Catalog', '')}
            style={styles.btnAll}
            block>
            <Text style={styles.btntext}>VIEW ALL ITEM</Text>
          </Button>
          <Text style={styles.choose} note>
            Choose category
          </Text>
          <View>
            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <Item
                  category={item.category_name}
                  movePage={() =>
                    this.props.navigation.navigate('Catalog', item.id)
                  }
                />
              )}
            />
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  categoryList: state.category,
});
const mapDispatchToProps = {
  getCategory,
  getProductCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#000000',
    paddingLeft: 65,
  },
  parent: {
    margin: 10,
  },
  btnAll: {
    borderRadius: 25,
    backgroundColor: 'green',
  },
  btntext: {
    color: '#FFFFFF',
  },
  choose: {
    marginTop: 15,
    fontSize: 18,
  },
});
