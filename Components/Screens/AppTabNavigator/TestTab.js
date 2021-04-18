import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";



//import Redux
import { useSelector,connect } from 'react-redux'
import {
    reset,
    remove,
    selectItem
} from "../../../redux/slices/itemSlice"



class TestTab extends Component{

    render(){
        return (    
            <View style={styles.container}>

            
                <Text style={styles.baseText}>
                    <Text style={styles.subTitleText}>
                        number of Items: 
                    </Text>
                    <Text> {this.props.value.length}{"\n"}</Text>
                    <Text style={styles.subTitleText}>
                        items From Redux:
                    </Text>
                    <Text>{this.props.value ? JSON.stringify(this.props.value) : "no data"}</Text>
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin",
        textAlign: 'center',
      },
    subTitleText: {
        fontWeight: "bold"
      },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    }
});

//connect Component to Redux
function mapStateToProps(state) {
    const { item } = state
    return item
}
export default connect(mapStateToProps)(TestTab)