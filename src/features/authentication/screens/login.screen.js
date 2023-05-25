import React, {useContext, useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Text,
  Platform,
  Dimensions,
  Alert,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {
  height,
  horizontalScale,
  scaleFont,
  verticalScale,
} from '../../../utils/utils';
import {form} from '../../../utils/styles';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../../../services/actions/auth.action';
import Spacer from '../../../components/spacer/Spacer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
const LoginScreen = () => {
  const dispatch = useDispatch();
  const {handleSubmit, control} = useForm();
  const isLoading = useSelector(state => state.authReducer.isLoading);
  const [showPassword, setShowPassword] = useState(true);
  const submitForm = async payload => {
    const {username, password} = payload;
    console.log('submitted form', payload.username);
    dispatch(userLogin({username: username, password: password}));
  };
  console.log('height', height);
  console.log('width', width);
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1, flexDirection: 'column'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: height >= 400 ? width * 0.5 : width * 0.3,
            height: height >= 400 ? width * 0.2 : width * 0.1,
          }}
          source={require('../../../../assets/icon.png')}
        />
        <View
          style={{
            ...form.formContainer,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
          <View style={{alignItems: 'center'}}>
            <Controller
              control={control}
              name="username"
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  value={value}
                  placeholder="username"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  style={{...styles.input, marginBottom: 10}}
                  selectTextOnFocus={false}
                />
              )}
            />
            <Spacer size="m" />

            <Controller
              control={control}
              name="password"
              render={({field: {onChange, onBlur, value}}) => (
                <View>
                  <TextInput
                    value={value}
                    placeholder="Password"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    style={{...styles.input, marginBottom: 10}}
                    selectTextOnFocus={false}
                    secureTextEntry={showPassword ? true : false}
                  />
                  <Pressable
                    onPress={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: 10,
                      alignSelf: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <MaterialCommunityIcons
                      name="eye"
                      color={showPassword ? 'red' : '#DEDEDE'}
                      size={horizontalScale(40)}
                      style={{lineHeight: horizontalScale(50)}}
                    />
                  </Pressable>
                </View>
              )}
            />
            <Spacer size="l" />
          </View>
          <View style={{justifyContent: 'space-between'}}>
            <Button
              loading={isLoading}
              // icon="camera"
              mode="contained"
              onPress={handleSubmit(submitForm)}
              contentStyle={{
                alignSelf: 'center',
                textAlignVertical: 'center',
                textAlign: 'center',
                width: height <= 400 ? width * 0.2 : width * 0.3,
              }}
              labelStyle={{
                alignSelf: 'center',
                textAlignVertical: 'center',
                textAlign: 'center',
                fontSize:
                  height >= width
                    ? scaleFont(14)
                    : height <= 400
                    ? scaleFont(14)
                    : scaleFont(20),
                    fontWeight:'600'
              }}
              style={{
                alignSelf: 'center',
                textAlignVertical: 'center',
                textAlign: 'center',
                width: height <= 400 ? width * 0.3 : width * 0.4,
                padding: horizontalScale(10),
                backgroundColor:'black'
              }}>
              Login
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'white'
  },

  input: {
    fontFamily: 'Muli-Regular',
    fontSize:
      height >= width
        ? scaleFont(14)
        : height <= 400
        ? scaleFont(14)
        : scaleFont(20),
    borderColor: '#707070',
    borderStyle: 'solid',
    borderWidth: horizontalScale(1),
    borderRadius: 10,
    height: horizontalScale(50),
    color: '#707070',
    paddingLeft: horizontalScale(30),
    marginBottom: horizontalScale(10),
    width: width * 0.5,
  },
});

export default LoginScreen;
