import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          navigationKey={user ? 'user' : 'guest'}
          name='Home'
          component={HomeScreen}
        />
        {user ? null : <Stack.Screen name='Login' component={LoginScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
