import React from 'react';
import {View} from 'react-native';

interface DividerProps {
 width?: number;
 orientation?: 'horizontal' | 'vertical';
 color?: string;
 dividerStyle?: any;
}

export const Divider: React.FC<DividerProps> = ({
 width = 1,
 orientation = 'horizontal',
 color = '#F1F1F1',
 dividerStyle,
}) => {
 const dividerStyles = [
   {width: orientation === 'horizontal' ? '100%' : width},
   {height: orientation === 'vertical' ? '100%' : width},
   {backgroundColor: color},
   dividerStyle,
 ];

 return <View style={dividerStyles} />;
};

