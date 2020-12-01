import React, {useState, createRef, useEffect} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Alert} from 'react-native';
import {
  Header,
  Left,
  Body,
  Text,
  Right,
  Button,
  Card,
  CardItem,
} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionSheet from 'react-native-actions-sheet';
import {API_URL} from '@env';

const actionSheetRef = createRef();
import {getProfile} from '../../redux/actions/profile';
import defaultAvatar from '../../assets/images/defaultAvatar.png';

const Profile = ({navigation}) => {
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile.result);
  const dispatch = useDispatch();
  const [Photo, setPhoto] = useState(`${API_URL}${profile.photo}`);

  useEffect(() => {
    dispatch(getProfile(token));
    console.log(profile);
  }, [dispatch, profile, token]);

  return (
    <>
      <Header style={styles.header} transparent>
        <Right>
          <Button transparent onPress={() => navigation.navigate('Search')}>
            <Icon name="search" size={22} />
          </Button>
        </Right>
      </Header>
      <View style={styles.parent}>
        <Text style={styles.tittle}>My Profile</Text>
        <View style={styles.userBio}>
          <TouchableOpacity
            onPress={() => {
              actionSheetRef.current?.setModalVisible();
            }}>
            <Image
              style={styles.avatar}
              source={Photo ? {uri: Photo} : defaultAvatar}
            />
          </TouchableOpacity>
          <View style={styles.identity}>
            <Text style={styles.name}>{profile.user_name}</Text>
            <Text note>{profile.email}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('MyOrder')}>
            <Card transparent>
              <CardItem>
                <Body style={styles.card}>
                  <View>
                    <Text>My Orders</Text>
                    <Text note>Already have an order</Text>
                  </View>
                  <Right />
                  <Icon name="angle-right" size={22} color="#8f8f8f" />
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ShippingAddress')}>
            <Card transparent>
              <CardItem>
                <Body style={styles.card}>
                  <View>
                    <Text>Shipping Address</Text>
                    <Text note>3 Address</Text>
                  </View>
                  <Right />
                  <Icon name="angle-right" size={22} color="#8f8f8f" />
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Card transparent>
              <CardItem>
                <Body style={styles.card}>
                  <View>
                    <Text>Setting</Text>
                    <Text note>Account setting</Text>
                  </View>
                  <Right />
                  <Icon name="angle-right" size={22} color="#8f8f8f" />
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch({type: 'LOGOUT'})}>
            <Card transparent>
              <CardItem>
                <Body style={styles.card}>
                  <View>
                    <Text>Log Out</Text>
                    <Text note>Out the Account</Text>
                  </View>
                  <Right />
                  <Icon name="angle-right" size={22} color="#8f8f8f" />
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>
      </View>
      <ActionSheet styles={styles.actionSheet} ref={actionSheetRef}>
        <View style={styles.border} />
        <View>
          <Text style={styles.change}>Password Change</Text>
          <Button style={styles.btnLogin} block>
            <Text style={styles.btntext}>take picture</Text>
          </Button>
          <Button style={styles.btnLogin} block>
            <Text style={styles.btntext}>pick from galery</Text>
          </Button>
          <Button
            style={styles.btnLogin}
            block
            onPress={() => navigation.goBack()}>
            <Text style={styles.btntext}>Cencel</Text>
          </Button>
        </View>
      </ActionSheet>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  parent: {
    padding: 10,
  },
  tittle: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  userBio: {
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#8e8e8e',
    borderRadius: 50,
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  identity: {
    paddingLeft: 15,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
  },
  actionSheet: {
    flex: 1,
    height: 1000,
  },
  border: {
    borderBottomWidth: 5,
    width: 100,
    marginTop: 20,
    marginLeft: 125,
    marginBottom: 20,
    borderRadius: 50,
    borderColor: '#e8e8e8',
  },
  change: {
    fontSize: 20,
    paddingLeft: 90,
  },
  btnLogin: {
    borderRadius: 25,
    backgroundColor: 'green',
    margin: 10,
  },
  btntext: {
    color: '#FFFFFF',
  },
});
