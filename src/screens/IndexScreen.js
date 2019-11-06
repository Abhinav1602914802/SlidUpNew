import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ActionSheet from 'react-native-actionsheet';

const options = [
    'Cancel', 
    'Apple', 
    // <Text style={{color: 'yellow'}}>Banana</Text>,
    // 'Watermelon', 
    // <Text style={{color: 'red'}}>Durian</Text>
  ]

class IndexScreen extends React.Component {
    showActionSheet = () => {
      this.ActionSheet.show()
    }
    render() {
      return (
        <View style={Styles.viewStyle}>
        <Text onPress={()=> this.props.navigation.navigate('SlideUp')}>next</Text>
          <Text onPress={this.showActionSheet} style={Styles.textStyle}>Open ActionSheet</Text>
          <ActionSheet
            ref={o => this.ActionSheet = o}
            title={'Which one do you like ?'}
            message="custom message custom message custom message custom message custom message custom message "
            //options={['Apple', 'Banana', 'cancel']}
            options={options}
            cancelButtonIndex={0}
            destructiveButtonIndex={4}
            onPress={(index) => { console.log(index) }}
          />
        </View>
      )
    }
  }

const Styles = StyleSheet.create({
    viewStyle:{
        flex: 1
    },
    textStyle:{
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf:'center',
        position: 'absolute',
        bottom:0
    },
    actionSheetStyle:{
       borderRadius:10,
       marginHorizontal:20
    }
});

export default IndexScreen;