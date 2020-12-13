import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import {Text, Right, Card} from 'native-base';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {deleteCart, showMyCart} from '../redux/actions/product';
class Item extends React.Component {
  state = {
    count: 0,
    modalVisible: false,
  };
  onPressInc = () => this.setState((count) => this.state.count + 1);
  onPressDec = () => this.setState((count) => this.state.count - 1);

  onDelete = () => {
    this.setState((modalVisible) => (this.state.modalVisible = false));
    this.props.deleteCart(this.props.token, this.props.id);
  };

  // componentDidUpdate = () => {
  //   this.props.showMyCart(this.props.token);
  // };

  render() {
    return (
      <>
        <View style={styles.parent}>
          <Card style={styles.cardBag}>
            <Image style={styles.cardImage} source={this.props.image} />
            <View>
              <View style={styles.topCard}>
                <Text style={styles.name}>{this.props.name}</Text>
                <View>
                  <TouchableOpacity
                    style={styles.icon}
                    onPress={() =>
                      this.setState(
                        (modalVisible) => (this.state.modalVisible = true),
                      )
                    }>
                    <Icon name="ellipsis-v" size={22} color="#8f8f8f" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.tipe}>
                <Text note>
                  color: <Text>red</Text>{' '}
                </Text>
                <Text note>
                  sixe: <Text>s</Text>
                </Text>
              </View>
              <View style={styles.btnCount}>
                <TouchableOpacity style={styles.btn} onPress={this.onPressDec}>
                  <Icon name="minus" size={15} color="#8f8f8f" />
                </TouchableOpacity>
                <Text style={styles.counter}>{this.props.amount}</Text>
                <TouchableOpacity style={styles.btn} onPress={this.onPressInc}>
                  <Icon name="plus" size={15} color="#8f8f8f" />
                </TouchableOpacity>
                <Text style={styles.price}>Rp. {this.props.price}</Text>
              </View>
            </View>
            <Right />
          </Card>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity onPress={this.onDelete}>
                <Text>Delete product</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});
const mapDispatchToProps = {
  deleteCart,
  showMyCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);

const styles = StyleSheet.create({
  parent: {
    padding: 7,
    position: 'relative',
  },
  cardBag: {
    flexDirection: 'row',
    paddingRight: 15,
    borderRadius: 10,
  },
  cardImage: {
    marginRight: 10,
    height: 115,
    width: 115,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  topCard: {
    flexDirection: 'row',
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 140,
  },
  tipe: {
    flexDirection: 'row',
  },
  btnCount: {
    flexDirection: 'row',
    marginTop: 10,
  },
  counter: {
    margin: 10,
    paddingTop: 8,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 50,
    width: 35,
    height: 35,
    marginTop: 10,
  },
  price: {
    marginLeft: 15,
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    marginLeft: -60,
    marginTop: 10,
  },
});
