import React, { useState, useEffect, useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";
import { Container, Content, Icon } from 'native-base'
import Carousel from 'react-native-snap-carousel';
import MenuCardComponent from '../MenuCardComponent'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NavigationEvents } from 'react-navigation';

//import Redux
import { useSelector, useDispatch } from 'react-redux'
import {
  add,
  reset,
  selectItem,
} from "../../../redux/slices/itemSlice"

// Component Declaration using HOOK
function Food_Drink() {
    
    const navigation = useNavigation()

    // Declare Datas
    const [foodsData, setFoodsData] = useState([]);
    const [drinksData, setDrinksData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Declare Data for Carousel
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    // Connect Redux
    const dispatch = useDispatch()

    // DidcompononentMount
    useEffect(() => { 
        //Define Request
        async function getFoodsData() {
            const res = await fetch("http://192.168.50.116:8080/foods")
              .then(res => res.json())
              .then(res => {
                setFoodsData(res);
                setIsLoading(false);
              })
              .catch(err =>console.error(err));
          }
  
          async function getDrinksData() {
            const res = await fetch("http://192.168.50.116:8080/drinks")
              .then(res => res.json())
              .then(res => {
                setDrinksData(res);
                setIsLoading(false);
              })
              .catch(err =>console.error(err));
          }

        // Initiate Request
        getFoodsData();
        getDrinksData();

    }, [isLoading]);

    const cardClicked = (item) => {
      
      // Testing (passing to TestTab)
      // navigation.navigate('Test', {
      //   order: item.Name
      // });

      //convert item to JsonObject
      var itemJson = {
        "Name" : item.Name,
        "Price" : item.Price,
        "Count" : 1
      }
      //update redux
      dispatch(add(itemJson))
    }

    //Carousel Config
    const _renderItem = ({item, index}) => {
        return (
         <TouchableOpacity key={item.id} onPress={() => cardClicked(item)}>   
          <MenuCardComponent pointerEvents="none" image={item.image} name={item.Name} price={item.Price}/>
          </TouchableOpacity>
        );
    };

    //Render
    return(
        <Container style={styles.container}>
        <Content style={styles.context}>
        <SafeAreaView style={{flex: 1, backgroundColor:'white', paddingTop: 20, }}>
            {/* {isLoading && 
                          <View style={{flex:1, alignItems: 'center'}}>
                          <Text>Loading...</Text>
                          </View>
            } */}
            {foodsData.length != 0 && (
                // foodsData.map((food,index) =>(
                //     <Text>{food.Name}</Text>
                // ))
              <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', backgroundColor:'white',marginVertical:20 }}>
                    <Carousel
                      layout={"default"}
                      ref={carouselRef}
                      data={foodsData}
                      sliderWidth={300}
                      itemWidth={300}
                      renderItem={_renderItem}
                      onSnapToItem = { index => setActiveIndex(index) } />
                </View>
              )}
              {drinksData.length != 0 && (
                <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', backgroundColor:'white', marginVertical:20 }}>
                    <Carousel
                      layout={"default"}
                      ref={carouselRef}
                      data={drinksData}
                      sliderWidth={300}
                      itemWidth={300}
                      renderItem={_renderItem}
                      onSnapToItem = { index => setActiveIndex(index) } />
                </View>
             
            )}
             </SafeAreaView>
        </Content>
    </Container>

    )

  }



  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    context: {
        flex: 1,
        backgroundColor: 'white',
    },
    view:{
        flex: 1
    }
});

export default Food_Drink;