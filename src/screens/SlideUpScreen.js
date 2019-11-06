import React from 'react'
import {Text, View, Dimensions} from 'react-native'

import SlidingUpPanel from 'rn-sliding-up-panel'

const {height} = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    marginHorizontal:10,
  },
  panelHeader: {
    height: 50,
    backgroundColor: '#b197fc',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  bottomContainer:{
    flex: 1,
    backgroundColor: '#d3d3d3'
  },
  textStyle:{
    color: '#FFF',
    fontSize:20 
  }
}

class SlideUpScreen extends React.Component {
   
  render() {
    return (
      <View style={styles.container}>
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={{top: height / 1.75, bottom: 50}}
          animatedValue={this._draggedValue}
          showBackdrop={false}>
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <Text style={styles.textStyle}>Bottom Sheet Peek</Text>
            </View>
            <View style={styles.bottomContainer}>
              <Text>Bottom Sheet Content</Text>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

export default SlideUpScreen;