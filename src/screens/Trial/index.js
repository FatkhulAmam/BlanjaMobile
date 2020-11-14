import ActionSheet from "react-native-actions-sheet";
import React, { createRef } from "react";
import { TouchableOpacity, Text, View } from 'react-native'
 
const actionSheetRef = createRef();
 
const App = () => {
  let actionSheet;
 
  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          actionSheetRef.current?.setModalVisible();
        }}
      >
        <Text>Open ActionSheet</Text>
      </TouchableOpacity>
 
      <ActionSheet ref={actionSheetRef}>
        <View>
          <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text>
        </View>
      </ActionSheet>
    </View>
  );
};
 
export default App;