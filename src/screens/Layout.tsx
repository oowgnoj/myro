import React, {ReactHTMLElement} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import globalStyle from '@constants/style';

type Props = {children: React.ReactNode};

const Layout: React.FC<Props> = ({children}) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.wrapper}>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: globalStyle.MAIN_DARK},
  wrapper: {flex: 1, margin: 25},
});
