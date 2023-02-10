import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/userReducer';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
      {user ? (
        <Button onPress={() => dispatch(logout())} title='Logout' />
      ) : (
        <Button onPress={() => navigation.navigate('Login')} title='Login' />
      )}
    </View>
  );
};

export default HomeScreen;
