import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
} from 'react-native';
import {Header, Text, Button, Card, CardItem, Body} from 'native-base';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import photo from '../../assets/images/photo.png';
import {getSearchProductAction} from '../../redux/actions/product';

class Item extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.renderParent}>
          <Card transparent>
            <CardItem>
              <Body>
                <Image source={photo} />
                <Text>{this.props.date}</Text>
                <Text note>{this.props.category}</Text>
                <Text style={styles.renderText}>{this.props.name}</Text>
                <Text>{this.props.price}</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      </TouchableOpacity>
    );
  }
}

class Search extends React.Component {
  state = {
    keyword: '',
  };
  searchProduct = () => {
    const {keyword} = this.state;
    this.props.getSearchProductAction(keyword);
  };

  render() {
    const {data} = this.props.search;
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
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <Item
                date={item.input_date}
                category={item.category_name}
                name={item.name}
                price={item.price}
              />
            )}
          />
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
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
});
