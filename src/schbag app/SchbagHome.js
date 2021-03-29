import React, { Component } from "react";
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image
} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  FooterTab,
  Footer,
  Text,
  Content,
  Fab,
  View,
  Card,
  CardItem,
  CardSwiper,
  Thumbnail
} from "native-base";
import { createStackNavigator, createAppContainer } from "react-navigation";
export default class HeaderIconExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
    this.state = {
      refreshing: false
    };
  }
  onRefresh = () => {
    this.setState({ refreshing: true });
    // In actual case set refreshing to false when whatever is being refreshed is done!
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 2000);
  };
  render() {
    return (
      <Container>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
              title="Pull to refresh"
            />
          }
          style={styles.container}
        >
          <Content>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/guy2.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>OYELEYE IYINOLUWA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 3h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Pls where is the provost office</Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/proff.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>FRANCIS ZIRRA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 4h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Where is the VC office</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/proff.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>FRANCIS ZIRRA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 4h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Where is the VC office</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/proff.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>FRANCIS ZIRRA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 4h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Where is the VC office</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/proff.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>FRANCIS ZIRRA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 4h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Where is the VC office</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/proff.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>FRANCIS ZIRRA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 4h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Where is the VC office</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/proff.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>FRANCIS ZIRRA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 4h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Where is the VC office</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/proff.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>FRANCIS ZIRRA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 4h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Where is the VC office</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/proff.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>FRANCIS ZIRRA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 4h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Where is the VC office</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/proff.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>FRANCIS ZIRRA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 4h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Where is the VC office</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/proff.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>FRANCIS ZIRRA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 4h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Where is the VC office</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/proff.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>FRANCIS ZIRRA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 4h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Where is the VC office</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/proff.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>FRANCIS ZIRRA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 4h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Where is the VC office</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/proff.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>FRANCIS ZIRRA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 4h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Where is the VC office</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/proff.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>FRANCIS ZIRRA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 4h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Where is the VC office</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require("../Images/orelinkd.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 60
                    }}
                  />
                  <Body>
                    <Text>FRANCIS ZIRRA</Text>
                    <Text note>Computer Engineering</Text>
                    <Text note>Answered 4h ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Where is the VC office</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Icon name="md-stats" />
                    <Text>Answers</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </Content>
        </ScrollView>
        <Fab
          Opa
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="md-add" />
          <TouchableOpacity>
            <Icon name="md-create" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="chatbubbles" />
          </TouchableOpacity>
        </Fab>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  scrollView: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center"
  }
});
