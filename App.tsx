/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Rive from 'rive-react-native';
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

function OtherScreen(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Other Nested Stack</Text>
      <Button onPress={() => navigation.goBack()} title="3. Go back" />
    </View>
  );
}

const OtherStack = createNativeStackNavigator();
function OtherNestedSTack(): React.JSX.Element {
  return (
    <OtherStack.Navigator>
      <Stack.Screen name="Other" component={OtherScreen} />
    </OtherStack.Navigator>
  );
}

function HomeScreen(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('RiveNestedStack', {screen: 'Rive'})}
        title="1. Navigate to nested rive"
      />
    </View>
  );
}

function RiveScreen(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Rive
        url="https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv"
        artboardName="Avatar 1"
        stateMachineName="avatar"
        style={{width: 400, height: 400}}
      />
      <Button
        onPress={() =>
          navigation.navigate('OtherNestedStack', {screen: 'Other'})
        }
        title="2. Navigate to other nested"
      />
      <Button onPress={() => navigation.goBack()} title="5. Go back" />
    </View>
  );
}

const RiveStack = createNativeStackNavigator();
function RiveNestedStack(): React.JSX.Element {
  return (
    <RiveStack.Navigator>
      <Stack.Screen name="Rive" component={RiveScreen} />
    </RiveStack.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RiveNestedStack" component={RiveNestedStack} />
        <Stack.Screen name="OtherNestedStack" component={OtherNestedSTack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
