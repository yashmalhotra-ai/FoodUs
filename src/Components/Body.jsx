import { restaurantList } from "../Constant"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react"

const inputText = (searchText) => {
    let filterdData;
    filterdData = restaurantList.filter((restaurant) =>
        restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filterdData.length > 0) {
        return filterdData;
    }
    else {
        alert("No result found");
        return restaurantList;
    }
}

const Body = () => {
    let searchInput;
    const [restaurants, setRestaurants] = useState(restaurantList);
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a restaurant"
                    value={searchInput}
                    onChange={(e) => {
                        let data = inputText(e.target.value)
                        setRestaurants(data)
                    }}
                ></input>
                <button className="search-btn">Search</button>
            </div>
            <div className="restaurant-list">
                {

                    restaurants.map((restaurant) => {
                        return (
                            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                        );
                    })

                };
            </div>
        </>
    )
}

export default Body;