import {concatinator,conditioner} from "./utils"
import axios from "axios"

export async function getLatestTransaction(
    __skip:string,
    __limit:string
) {
    
    const url:string=concatinator("/latest-transactions");
    try {

        axios.get(url, {
            params: {
              __skip:__skip||"",
              __limit:__limit||""
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })

    } catch (error) {
      console.error(error);
    }
  }

  // activities


  export async function getActivities(
    contract_id:string,
    type:string,
    from:string,
    to:string,
    token_series_id:string,
    price:string,
    __skip:string,
    __limit:string,
    token_id:string,
    _id:string,
    is_verified:string
) {
    
    const url:string=concatinator("/latest-transactions");
    try {

        axios.get(url, {
            params: {
              __skip:__skip||"",
              __limit:__limit||"",
              contract_id:contract_id||"",
              type:type||"",
              from:from||"",
              to:to||"",
              token_series_id:token_series_id||"",
              price:price||"",
              _id:_id||"",
              token_id:token_id||"",
              is_verified:is_verified||""
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })

    } catch (error) {
      console.error(error);
    }
  }


  // /collection-stats



  export async function getCollectionStat(
    collection_id:string
) {
    
    const url:string=concatinator("/collection-stats");
    try {

        axios.get(url, {
            params: {
                collection_id
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })

    } catch (error) {
      console.error(error);
    }
  }