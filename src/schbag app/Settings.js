import React, { Component } from 'react';
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, Form, Picker, Title, Thumbnail} from 'native-base';
export default class Settings extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
          selected: "key1"
        };
      }
      onValueChange(value: string) {
        this.setState({
          selected: value
        });
      }
  render() {
    return (
      <Container>
       <Header>
          <Left>
            <Button transparent 
            onPress={() => this.props.navigation.navigate('Schbagdrawer')}>
              <Icon name='md-close' />
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right> 
          </Right>
        </Header>
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>Notifications</Text>
            </Body>
            <Right>
              <Switch value={true} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>COLLEGE</Text>
            </Body>
            </ListItem>
          <ListItem icon>
          <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="ENGINEERING" value="key0" />
              <Picker.Item label="MHS" value="key1" />
              <Picker.Item label="SMS" value="key2" />
              <Picker.Item label="LAW" value="key3" />
            </Picker>
          </Form>
        </Content>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>GENDER</Text>
            </Body>
            </ListItem>
          <ListItem icon>
          <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="md-transgender" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="MALE" value="key0" />
              <Picker.Item label="FEMALE" value="key1" />
            </Picker>
          </Form>
        </Content>
          </ListItem>
        </Content>
      </Container>
    );
  }
}