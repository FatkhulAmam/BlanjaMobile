import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'native-base';

export default class Category extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.movePage}>
        <View style={styles.renderParent}>
          <Text style={styles.renderText}>{this.props.category}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  renderParent: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
  },
  renderText: {
    fontSize: 20,
  },
});
