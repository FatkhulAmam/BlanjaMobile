import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, CheckBox} from 'react-native';
import {
  Header,
  Left,
  Body,
  Text,
  Title,
  Button,
  Card,
  CardItem,
  StatusBar,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const CheckOut = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <>
      <Header style={styles.header}>
        <StatusBar backgroundColor={'green'} />
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name="angle-left" size={30} />
        </Button>
        <Left />
        <Body>
          <Title style={styles.textHead}>Checkout</Title>
        </Body>
      </Header>
      <View style={styles.parent}>
        <Text style={styles.textTitle}>Shipping Address</Text>
        <Card style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Body>
              <View style={styles.text}>
                <Text>Jane Ane</Text>
                <Left />
                <TouchableOpacity
                  onPress={() => navigation.navigate('ChangeAddress')}>
                  <Text style={styles.change}>Change</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text>3 New Bridge cout</Text>
              </View>
              <View>
                <Text>Chino Hill, CA 154678, United State</Text>
              </View>
            </Body>
          </CardItem>
        </Card>
        <Text style={styles.textTitle}>Payment</Text>
        <View style={styles.choose}>
          <Text>Master Card</Text>
          <Left />
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
        </View>
        <View style={styles.choose}>
          <Text>Post Indo</Text>
          <Left />
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
        </View>
        <View style={styles.choose}>
          <Text>GoPay</Text>
          <Left />
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
        </View>
      </View>
      <View style={styles.btnCheck}>
        <View style={styles.amount}>
          <Text note>Order</Text>
          <Left />
          <Text>Amount</Text>
        </View>
        <View style={styles.amount}>
          <Text note>Delivery</Text>
          <Left />
          <Text>Amount</Text>
        </View>
        <View style={styles.amount}>
          <Text note>Summary</Text>
          <Left />
          <Text>Amount</Text>
        </View>
        <Button
          block
          style={styles.check}
          onPress={() => navigation.navigate('Success')}>
          <Text>Submit Order</Text>
        </Button>
      </View>
    </>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  textHead: {
    color: '#000000',
  },
  parent: {
    padding: 10,
    position: 'relative',
  },
  textTitle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },

  card: {
    marginTop: 20,
    borderRadius: 15,
    padding: 5,
  },
  cardItem: {
    borderRadius: 15,
  },
  tittle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  text: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  change: {
    color: '#bf000d',
  },
  choose: {
    alignItems: 'center',
    flexDirection: 'row',
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
});
