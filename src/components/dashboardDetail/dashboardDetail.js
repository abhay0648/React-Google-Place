import React, {PureComponent} from 'react';
import {  SafeAreaView,  StyleSheet,  View,  Text,  StatusBar,} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import placeDetailReducer from '../../reducers/placeDetailReducer';
import { connect } from 'react-redux';

class DashBoardDetail  extends PureComponent {
  render() {
    const { place} = this.props;

  
          return (
            <>
            <View style={styles.container}>
             <MapView
               provider={PROVIDER_GOOGLE} // remove if not using Google Maps
               style={styles.map}
               showsUserLocation={true}
               region={{
                 latitude: place.geometry.location.lat,
                 longitude: place.geometry.location.lng,
                 latitudeDelta: 0.015,
                 longitudeDelta: 0.0121,
               }}
             >
             <Marker coordinate = {{
               latitude: place.geometry.location.lat,
               longitude: place.geometry.location.lng,
                }}
             pinColor = {"purple"} // any color
             title={place.name}
             description={place.formatted_address}/>
             </MapView>
             </View>
              </>
          );
  }
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});


const mapStateToProps = function(state) {
  return {
    place : state.placeDetailReducer.place,
  }
}

export default connect(mapStateToProps,null)(DashBoardDetail);
