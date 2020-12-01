import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Header,
  Left,
  Right,
  Button,
  Text,
  Card,
  CardItem,
  Body,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

const MyOrder = ({navigation}) => {
  return (
    <>
      <Header style={styles.header} transparent>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={30} />
          </Button>
        </Left>
        <Right>
          <Button transparent onPress={() => navigation.navigate('Search')}>
            <Icon name="search" size={22} />
          </Button>
        </Right>
      </Header>
      <View style={styles.parent}>
        <Text style={styles.tittle}>My Orders</Text>
        <Card style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Body>
              <View style={styles.numDate}>
                <Text>Order number</Text>
                <Left />
                <Text note>Date</Text>
              </View>
              <View style={styles.numDate}>
                <Text note>Tracking number :</Text>
                <Text>Date</Text>
              </View>
              <View style={styles.numDate}>
                <Text note>Quantity :</Text>
                <Text>3</Text>
              </View>
              <View style={styles.numDate}>
                <Text note>Total Amount</Text>
                <Text>Rp. 100.000</Text>
              </View>
              <View style={styles.delivCont}>
                <Left />
                <Text style={styles.deliv}>Delivered</Text>
              </View>
            </Body>
          </CardItem>
        </Card>
      </View>
    </>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  parent: {
    padding: 15,
  },
  card: {
    marginTop: 20,
    borderRadius: 15,
  },
  cardItem: {
    borderRadius: 15,
  },
  tittle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  numDate: {
    flexDirection: 'row',
  },
  deliv: {
    color: '#0c9100',
  },
  delivCont: {
    flexDirection: 'row',
  },
});
