import styled from "styled-components/native";

import { TouchableOpacity as RNTouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RNTouchableOpacity)`
   width: 100%;
   background-color: ${({ theme }) => theme.colors.secondary};
   border-radius: 5px;
   padding: 18px;
   align-items: center;
`;

export const Title = styled.Text`
   font-family: ${({ theme }) => theme.fonts.medium};
   color: ${({ theme }) => theme.colors.shape};
   font-size: ${RFValue(14)}px;
`;
