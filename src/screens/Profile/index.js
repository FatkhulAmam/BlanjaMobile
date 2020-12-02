import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Header, Body, Text, Right, Button, Card, CardItem} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import {API_URL} from '@env';

import {getProfile} from '../../redux/actions/profile';
import Avatar from '../../assets/images/avatar.png';
const options = {
  title: 'my picture',
  takePhotoButtonTitle: 'Take Photo',
  chooseFromLibraryButtonTitle: 'Choose Photo',
};

const Profile = ({navigation}) => {
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile.data[0]);
  const dispatch = useDispatch();
  const [AvatarSource, setAvatarSource] = useState('');

  useEffect(() => {
    dispatch(getProfile(token));
  }, [dispatch, token]);

  const takePictures = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setAvatarSource(response.uri);
        const form = new FormData();
        form.append('pictures', {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });
      }
    });
  };

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
          <TouchableOpacity onPress={takePictures}>
            <Image
              style={styles.avatar}
              source={AvatarSource !== '' ? {uri: AvatarSource} : Avatar}
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
