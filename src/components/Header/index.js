import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Headersearch extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='angle-left' size={30} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.text}>{this.props.headerText}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' size={22} />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF'
  },
  text: {
    color: '#000000',
    paddingLeft: 90,
  }
})