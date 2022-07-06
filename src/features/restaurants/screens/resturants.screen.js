import React, { useContext } from "react";
import { FlatList } from "react-native";
import { RestuarntInfoCard } from "../components/resturant-info-card.components";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.components";
import { SafeAreaViewMain } from "../../../components/utility/safe-area-component";
import { RestuarntContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.component";

const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 15 },
})``;

const LodingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Indicator = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestuarantsScreen = () => {
  // eslint-disable-next-line no-unused-vars
  const { isLoading, error, restuarants } = useContext(RestuarntContext);
  return (
    <SafeAreaViewMain>
      {isLoading && (
        <LodingContainer>
          <Indicator size={50} animating={true} color={Colors.red800} />
        </LodingContainer>
      )}
      <Search />
      <ResturantList
        data={restuarants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestuarntInfoCard restuarant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaViewMain>
  );
};
