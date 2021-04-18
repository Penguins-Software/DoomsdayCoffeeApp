import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import NetInfo from "react-native-netinfo"
import { human } from 'react-native-typography'

import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class MenuCardComponent extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Content>
                    <View>
                        <Card containerStyle={{padding: 0}}>
                            <CardItem cardBody>
                                <Image source={{uri: this.props.image}}style={{ height: 300, width: null, flex: 1 }} />
                            </CardItem>

                            <CardItem>
                                {/* <Body> */}
                                <View style={{flex: 1}}>
                                <Text style = {{ textAlign : "left" , alignSelf: 'stretch'}} style = {human.headline} >
                                        {this.props.name}
                                </Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style = {{ textAlign : "right", alignSelf: 'stretch' }}>
                                        ${this.props.price}
                                    </Text>
                                </View>
                                {/* </Body> */}
                            </CardItem>
                        </Card>
                    </View>
                </Content>
        );
    }
}
export default MenuCardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});