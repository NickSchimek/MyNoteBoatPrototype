import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import Preparer_la_sortie from '../screens/Preparer_la_sortieScreen';
import Mettre_a_leau from '../screens/Mettre_a_leauScreen';
import Preparer_le_bateau from '../screens/Preparer_le_bateauScreen';
import Accoster from '../screens/AccosterScreen';

export default TabNavigator(
  {
    Preparer_la_sortie: {
      screen: Preparer_la_sortie,
    },
    Mettre_a_leau: {
      screen: Mettre_a_leau,
    },
    Preparer_le_bateau: {
      screen: Preparer_le_bateau,
    },
    Accoster: {
      screen: Accoster,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Security':
            iconName =
              Platform.OS === 'ios'
                ? `ios-shirt${focused ? '' : '-outline'}`
                : 'md-shirt';
            break;
          case 'Mechanical':
            iconName = Platform.OS === 'ios' ? `ios-build${focused ? '' : '-outline'}` : 'md-build';
            break;
          case 'Electrical':
            iconName = Platform.OS === 'ios' ? `ios-flash${focused ? '' : '-outline'}` : 'md-flash';
            break;
          case 'HullAndRigging':
            iconName =
              Platform.OS === 'ios' ? `ios-boat${focused ? '' : '-outline'}` : 'md-boat';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
  }
);
