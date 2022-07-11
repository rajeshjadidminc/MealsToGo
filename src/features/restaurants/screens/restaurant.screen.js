import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.components";

import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/utility/safe-area-component";

const RestaurantList = styled(FlatList).attrs({
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

export const RestaurantsScreen = ({ navigation }) => {
  // eslint-disable-next-line no-unused-vars
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LodingContainer>
          <Indicator size={50} animating={true} color={Colors.red800} />
        </LodingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              // onPress={() => navigation.navigate("RestaurantDetail")}
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
