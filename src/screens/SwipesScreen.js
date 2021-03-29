import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Right } from 'native-base';
const cards = [
  {
    text: 'Tracy',
    name: 'One',
    image: require('../Images/g6.jpg'),
  },
  {
    text: 'Racheal',
    name: 'One',
    image: require('../Images/g2.jpg'),
  },
  {
    text: 'Kim',
    name: 'One',
    image: require('../Images/g3.jpg'),
  },
  {
    text: 'Lino',
    name: 'One',
    image: require('../Images/g7.jpg'),
  },
  {
    text: 'Stacy',
    name: 'One',
    image: require('../Images/g4.jpg'),
  },
]
export default class DeckSwiperExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#800000' }} androidStatusBarColor="#800000"/>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>Abuad</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 350, flex: 2 }} source={item.image} />
                </CardItem>
                <CardItem>
                <Left>
                  <Icon name='heart'/>
                  </Left>
                  <Right>
                  <Icon name='heart'/>
                  </Right>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}