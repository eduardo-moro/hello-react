import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import {HandText} from "../components/HandText";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <HandText style={styles.title}>Hi there, I'm Eduardo, a "backend" developer</HandText>
        <HandText style={styles.text}>
          I'm currently working with  PHP, JavaScript, mySQL, ajax, Bootstrap, Yii(PHP) and VUE.js
          I'm currently learning  lumen, python and react native My main skills:  PHP, VUE.js, SQL and it's stuff (pg, my, lite, maria)
          I'm a UFPR - system's development and analysis student, currently on course's 2nd year.
          I have the desire of migrating from only fullstack PHP programmning (with use of bootstrap and another frontend frameworks of course), to also be a react-native frontend developer, i have some VUE.js skills, that I'm using as a knowlegement base for my react-native personal projects.
          I use phpstorm, sublime text, postman, android studio, vim, nvim, nano, and anything else.
        </HandText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  text: {
    fontSize: 14,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  box: {
    width: '80%',
    textAlign: "justify"
  }
});
