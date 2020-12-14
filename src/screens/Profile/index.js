import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
  StatusBar,
} from 'react-native';
import {Header, Body, Text, Right, Button, Card, CardItem} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API_URL} from '@env';
import ImagePicker from 'react-native-image-picker';
import {editAvatar} from '../../redux/actions/profile';

import Avatar from '../../assets/images/avatar.png';
const options = {
  title: 'my picture',
  takePhotoButtonTitle: 'Take Photo',
  chooseFromLibraryButtonTitle: 'Choose Photo',
};

const showToastImg = () => {
  ToastAndroid.showWithGravity(
    'Not an image (jpg/jpeg/png)',
    ToastAndroid.LONG,
    ToastAndroid.CENTER,
  );
};

const showToastSize = () => {
  ToastAndroid.showWithGravity(
    'image to large(under 500kb)',
    ToastAndroid.LONG,
    ToastAndroid.CENTER,
  );
};
const updateFull = () => {
  ToastAndroid.showWithGravity(
    'image update !',
    ToastAndroid.LONG,
    ToastAndroid.CENTER,
  );
};

const Profile = ({navigation}) => {
  const profile = useSelector((state) => state.profile.result[0]);
  const profileIndex = useSelector((state) => state.profile);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [AvatarSource, setAvatarSource] = useState(
    profile.photo ? {uri: `${API_URL}${profile.photo}`} : Avatar,
  );

  const takePictures = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        if (response.fileSize <= 500 * 500) {
          if (
            `${response.type}` === 'image/jpg' ||
            'image/jpeg' ||
            'image/png'
          ) {
            setAvatarSource(response.uri);
            const form = new FormData();
            form.append('pictures', {
              uri: response.uri,
              name: response.fileName,
              type: response.type,
            });
            dispatch(editAvatar(token, form));
            if (profileIndex.isError === false) {
              updateFull();
            }
          } else {
            showToastImg();
          }
        } else {
          showToastSize();
        }
      }
    });
  };

  return (
    <>
      <Header style={styles.header} transparent>
        <StatusBar backgroundColor={'green'} />
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
            <Image style={styles.avatar} source={AvatarSource} />
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
                    <Text note>My Address</Text>
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
    marginBottom: 15,
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
