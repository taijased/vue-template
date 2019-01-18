import axios from "axios";

export const FETCH_SALE_PRODUCTS = state => {
  axios
    .get(
      process.env.API_BASE_URL +
        "/markets/" +
        process.env.ID_MARKET +
        "/offers?limit=100"
    )
    .then(response => {
      state.saleProducts = response.data.results;
    })
    .catch(error => {
      console.log("FETCH_SALE_PRODUCTS: " + error);
    });
};
