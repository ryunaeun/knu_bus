import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
      </View>

      {/* Red Line Below Header */}
      <View style={styles.redLine} />
      
      {/* Map Image */}
      <View style={styles.mapContainer}>
        <Image source={require('./sc.png')} style={styles.mapImage} />
      </View>

      {/* Station Information */}
      <View style={styles.stationInfo}>
        <Text style={styles.stationName}>신천역</Text>
      </View>

      {/* Schedule Icon */}
      <TouchableOpacity style={styles.scheduleIcon}>
        <Image source={require('./tt.png')} style={styles.iconImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 0,
  },
  header: {
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: 'black',
  },
  redLine: {
    height: 5,
    backgroundColor: 'red',
  },
  mapContainer: {
    width: '90%',
    height: '50%',
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  stationInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
  },
  stationName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  scheduleIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
  },
  iconImage: {
    width: 50,
    height: 50,
  },
});
