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
  Button,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {scaleFont} from './src/utils/utils';
import DmcLogo from './assets/icon.png';
import {form} from './src/utils/styles';

const App = () => {
  const {handleSubmit, control} = useForm();
  const isLoading = false;
  const submitForm = async () => {
    console.log('submitted form');
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{flexGrow: 1, flexDirection: 'column'}}>
      <View style={{alignItems: 'center', marginBottom: 'auto'}}>
        <Image
          style={{width: 150, height: 100}}
          source={require('./assets/icon.png')}
        />
        <View
          style={{
            ...form.formContainer,
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
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
                  style={{...styles.input, marginVertical: 10}}
                  selectTextOnFocus={false}
                />
              )}
            />
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
                    secureTextEntry={true ? false : true}
                  />
                  <Pressable
                    onPress={() => null}
                    style={{position: 'absolute', right: 10}}>
                    <Text>show</Text>
                  </Pressable>
                </View>
              )}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
              }}></View>
          </View>
          <View style={{justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={submitForm}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    borderWidth: 1,
    zIndex: 1,
    padding: 10,
    borderRadius: 25,
    borderColor: '#DEDEDE',
  },
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerMaharlikaText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -20,
  },
  input: {
    fontFamily: 'Muli-Regular',
    fontSize: scaleFont(15),
    backgroundColor: 'white',
    borderColor: '#707070',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    color: '#707070',
    padding: 10,
    marginBottom: 10,
    width: width * 0.78,
  },
});

export default App;
