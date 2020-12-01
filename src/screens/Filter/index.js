import React from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {Header, Title, Body, Button, Text, CardItem, Card} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const Filter = ({navigation}) => {
  return (
    <>
      <Header style={styles.header} noLeft>
        <Button transparent>
          <Icon
            name="angle-left"
            size={30}
            onPress={() => navigation.goBack()}
          />
        </Button>
        <Body>
          <Title style={styles.text}>Filter</Title>
        </Body>
      </Header>
      <ScrollView style={styles.scvw}>
        <Card transparent>
          <CardItem>
            <Body>
              <Text>Colors</Text>
              <View style={styles.sz}>
                <TouchableOpacity style={styles.btnColor} />
              </View>
            </Body>
          </CardItem>
        </Card>
        <Card transparent>
          <CardItem>
            <Body>
              <Text>Size</Text>
              <View style={styles.sz}>
                <Button style={styles.btnSz}>
                  <Text>XS</Text>
                </Button>
                <Button style={styles.btnSz}>
                  <Text>S</Text>
                </Button>
                <Button style={styles.btnSz}>
                  <Text>m</Text>
                </Button>
                <Button style={styles.btnSz}>
                  <Text>l</Text>
                </Button>
                <Button style={styles.btnSz}>
                  <Text>Xl</Text>
                </Button>
              </View>
            </Body>
          </CardItem>
        </Card>
        <Card transparent>
          <CardItem>
            <Body>
              <Text>Category</Text>
              <View style={styles.sz}>
                <TouchableOpacity style={styles.btnCat}>
                  <Text>all</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCat}>
                  <Text>Women</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCat}>
                  <Text>Men</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sz}>
                <TouchableOpacity style={styles.btnCat}>
                  <Text>Girl</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCat}>
                  <Text>Boys</Text>
                </TouchableOpacity>
              </View>
            </Body>
          </CardItem>
        </Card>
        <Card transparent>
          <CardItem>
            <Body>
              <Text>Brand</Text>
            </Body>
          </CardItem>
        </Card>
      </ScrollView>
      <View style={styles.btnCheck}>
        <Button
          block
          style={styles.check}
          onPress={() => navigation.navigate('Success')}>
          <Text style={styles.textBtn}>Discard</Text>
        </Button>
        <Button
          block
          style={styles.check}
          onPress={() => navigation.navigate('Success')}>
          <Text style={styles.textBtn}>Apply</Text>
        </Button>
      </View>
    </>
  );
};

export default Filter;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  text: {
    color: '#000000',
    paddingLeft: 125,
  },
  scvw: {
    marginBottom: 50,
  },
  sz: {
    flexDirection: 'row',
  },
  btnColor: {
    width: 60,
    height: 60,
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 50,
    borderColor: '#A10000',
    borderWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSz: {
    width: 48,
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  btnCat: {
    width: 100,
    height: 40,
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 5,
    borderWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCheck: {
    position: 'absolute',
    padding: 10,
    bottom: 0,
    width: 360,
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
  },
  check: {
    width: 160,
    borderRadius: 50,
    marginLeft: 7,
    backgroundColor: 'green',
  },
  textBtn: {
    color: '#ffffff',
  },
});
