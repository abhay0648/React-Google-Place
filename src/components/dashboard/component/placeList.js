import React from 'react';
import {  StyleSheet,  View,  Text,  FlatList, TouchableWithoutFeedback} from 'react-native';
import {  Card, CardItem} from 'native-base';

import { connect } from 'react-redux';
import { selectedPlace } from '../../../api/selectedPlace';
import placeReducer from '../../../reducers/placeReducer';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../utils/style';


class PlaceList  extends React.Component {

  constructor(props){
        super(props)
    }

  actionOnRow(place) {
     console.log('Selected Item :',place);
     this.props.selectedPlace(place)
     this.props.navigation('DashboardDetail')
  }

  render() {
  const { place, loading, isEmpty } = this.props;

        if(!isEmpty){
          return (
            <>
              <View style = {styles.styleView}>
                <FlatList
                data={place}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                   <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
                   <Card style={styles.cardStyle}>
                      <CardItem style={styles.cardStyle}>
                      <Text style={styles.item}>{item.formatted_address}</Text>
                      </CardItem>
                    </Card>
                  </TouchableWithoutFeedback>
                )}/>
              </View>
              </>
          );
        }else{
          return (
            <>
              <View >
              </View>
              </>
          );
        }
  }
}


const mapStateToProps = function(state) {
  return {
    loading : state.placeReducer.loading,
    place : state.placeReducer.place,
    isEmpty : state.placeReducer.isEmpty,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectedPlace: place => {dispatch(selectedPlace(place));},
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(PlaceList);
