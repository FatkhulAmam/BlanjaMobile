import React, {createRef, useState} from 'react';
import {StyleSheet, View, CheckBox, Image, StatusBar} from 'react-native';
import {
  Header,
  Text,
  Button,
  Right,
  Card,
  Body,
  CardItem,
  Left,
  Textarea,
  Form,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionSheet from 'react-native-actions-sheet';

const actionSheetRef = createRef();
import defaultAvatar from '../../assets/images/avatar.png';

const Filter = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <>
      <Header style={styles.header} transparent>
        <StatusBar backgroundColor={'green'} />
        <Button transparent>
          <Icon
            name="angle-left"
            size={30}
            onPress={() => navigation.goBack()}
          />
        </Button>
        <Right />
      </Header>
      <View style={styles.parent}>
        <Text style={styles.tittle}>Rating&Reviews</Text>
        <View style={styles.container}>
          <View>
            <Text style={styles.totalRate}>4.3</Text>
            <Text note>23 ratings</Text>
          </View>
          <View style={styles.star}>
            <Icon name="star-o" size={18} />
            <Icon name="star-o" size={18} />
            <Icon name="star-o" size={18} />
            <Icon name="star-o" size={18} />
            <Icon name="star-o" size={18} />
          </View>
          <View>
            <Text>--------------------</Text>
          </View>
          <View>
            <Text>Sum</Text>
            <Text>Sum</Text>
            <Text>Sum</Text>
            <Text>Sum</Text>
            <Text>Sum</Text>
          </View>
        </View>
        <View style={styles.tag}>
          <Text style={styles.revMount}>8 Review</Text>
          <Right />
          <View style={styles.checkContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label} note>
              With Photo
            </Text>
          </View>
        </View>
        <Card>
          <CardItem>
            <Body>
              <View style={styles.review}>
                <Image style={styles.image} source={defaultAvatar} />
                <View style={styles.revTxt}>
                  <Text style={styles.name}>name</Text>
                  <View style={styles.startCard}>
                    <Icon name="star-o" size={18} />
                    <Icon name="star-o" size={18} />
                    <Icon name="star-o" size={18} />
                    <Icon name="star-o" size={18} />
                    <Icon name="star-o" size={18} />
                    <Right />
                    <Text note>14, jun 2020</Text>
                  </View>
                  <View>
                    <Text style={styles.desc} note>
                      Virus yang menyebabkan COVID-19 terutama ditransmisikan
                      melalui droplet (percikan air liur) yang dihasilkan saat
                      orang yang terinfeksi batuk, bersin, atau mengembuskan
                      nafas. Droplet ini terlalu berat dan tidak bisa bertahan
                      di udara, sehingga dengan cepat jatuh dan menempel pada
                      lantai atau permukaan lainnya
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', right: 20}}>
                    <Left />
                    <Right />
                    <Text note>helpful</Text>
                    <Icon name="thumbs-up" color="gray" />
                  </View>
                </View>
              </View>
            </Body>
          </CardItem>
        </Card>
      </View>
      <View style={styles.btnCheck}>
        <Button
          block
          style={styles.check}
          onPress={() => {
            actionSheetRef.current?.setModalVisible();
          }}>
          <View style={styles.write}>
            <Icon name="pencil" size={15} color="#ffffff" />
            <Text>Write Review</Text>
          </View>
        </Button>
      </View>
      <ActionSheet styles={styles.actionSheet} ref={actionSheetRef}>
        <View style={styles.border} />
        <View>
          <View style={styles.writeTxt}>
            <Text style={styles.rate}>What's Is You Rate?</Text>
          </View>
          <View style={styles.starSheet}>
            <Icon name="star-o" size={40} style={styles.iconStart} />
            <Icon name="star-o" size={40} style={styles.iconStart} />
            <Icon name="star-o" size={40} style={styles.iconStart} />
            <Icon name="star-o" size={40} style={styles.iconStart} />
            <Icon name="star-o" size={40} style={styles.iconStart} />
          </View>
          <View>
            <Text style={styles.opinion}>
              Please Share Your Opinion About The Product
            </Text>
          </View>
          <View>
            <Form>
              <Textarea
                style={styles.textArea}
                rowSpan={5}
                bordered
                placeholder="Your Review"
              />
            </Form>
          </View>
          <View style={styles.btnTakeCam}>
            <Button style={styles.btnCamera}>
              <Icon name="camera" size={25} color="#FFFFFF" />
            </Button>
            <Text note>Add Your Photos</Text>
          </View>
          <Button style={styles.btnSend} block>
            <Text>send review</Text>
          </Button>
        </View>
      </ActionSheet>
    </>
  );
};

export default Filter;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
  },
  parent: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  tittle: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  totalRate: {
    fontSize: 50,
  },
  star: {
    marginLeft: 20,
  },
  tag: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  revMount: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  review: {
    flexDirection: 'row',
  },
  revTxt: {
    marginLeft: 10,
  },
  btnCheck: {
    position: 'absolute',
    bottom: 25,
    right: 15,
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  check: {
    width: 160,
    borderRadius: 50,
    marginLeft: 7,
    backgroundColor: 'green',
  },
  name: {
    fontSize: 20,
  },
  desc: {
    marginTop: 5,
    marginBottom: 5,
    width: 240,
  },
  startCard: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  write: {
    flexDirection: 'row',
  },
  writeTxt: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rate: {
    fontSize: 20,
    marginBottom: 10,
  },
  border: {
    flex: 1,
    borderBottomWidth: 5,
    width: 70,
    marginTop: 20,
    marginLeft: 140,
    marginBottom: 10,
    borderRadius: 50,
    borderColor: '#e8e8e8',
  },
  starSheet: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconStart: {
    margin: 5,
  },
  opinion: {
    fontSize: 20,
    textAlign: 'center',
    marginRight: 70,
    marginLeft: 70,
  },
  textArea: {
    margin: 5,
  },
  btnTakeCam: {
    margin: 20,
  },
  btnCamera: {
    padding: 10,
    marginLeft: 20,
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  btnSend: {
    borderRadius: 25,
    backgroundColor: 'green',
    margin: 10,
  },
});
