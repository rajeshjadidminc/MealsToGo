import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const SafeAreaViewMain = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
