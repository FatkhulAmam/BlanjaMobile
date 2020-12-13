import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Left, Body, Text, Card, CardItem} from 'native-base';

export default class cardAddress extends Component {
  render() {
    return (
      <View>
        <View style={styles.renderParent}>
          <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Body>
                <View style={styles.text}>
                  <Text>{this.props.name}</Text>
                  <Left />
                  <TouchableOpacity onPress={this.props.movePage}>
                    <Text style={styles.change}>Change</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text>
                    {this.props.home}, {this.props.city}
                  </Text>
                </View>
                <View>
                  <Text>
                    {this.props.phone}, {this.props.address}
                  </Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    borderRadius: 15,
    padding: 5,
  },
  cardItem: {
    borderRadius: 15,
  },
  text: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  change: {
    color: '#bf000d',
  },
});
