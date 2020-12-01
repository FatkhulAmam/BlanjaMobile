import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Text, Card, CardItem, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class CardProduct extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.movePage}>
        <View style={styles.renderParent}>
          <Card transparent>
            <CardItem>
              <Body style={styles.cardItem}>
                <Image source={this.props.image} style={styles.imageProduct} />
                <View style={styles.star}>
                  <Icon name="star-o" size={18} />
                  <Icon name="star-o" size={18} />
                  <Icon name="star-o" size={18} />
                  <Icon name="star-o" size={18} />
                  <Icon name="star-o" size={18} />
                </View>
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

export default CardProduct;

const styles = StyleSheet.create({
  renderParent: {
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
  },
  renderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  star: {
    flexDirection: 'row',
    marginTop: 5,
  },
  imageProduct: {
    width: 170,
    height: 200,
  },
});
