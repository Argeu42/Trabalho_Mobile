import React from 'react';
import type {PropsWithChildren} from 'react';
import {Icon} from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IconsProps) => {
  switch (name) {
    case 'home':
      return <Icon name="home" size={38} color="black" />;
      break;
      
    case 'user':
      return <Icon name="user" size={38} color="black" />;
      break;

    default:
      break;
  }
};

export default Icons;
