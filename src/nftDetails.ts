import {concatinator,conditioner} from "./utils"
import axios from "axios"


export async function getTokens(
    sort:string,
    skip:string,
    limit:string,
    owner_id:string,
    token_id:string,
    is_verified:string,
    collection_id:string,
    creator_id:string

) {
    
    const url:string=concatinator("/token");
    try {

        axios.get(url, {
            params: {
              _sort: conditioner(sort,""),
              __skip: conditioner(skip,""),
              __limit: conditioner(limit,""),
              owner_id:conditioner(owner_id,""),
              token_id:conditioner(token_id,""),
              null:null,
              is_verified:conditioner(is_verified,""),
              collection_id:conditioner(collection_id,""),
              creator_id:conditioner(creator_id,""),
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


  export async function getTokenSeries(
    sort:string,
    skip:string,
    limit:string,
    owner_id:string,
    token_id:string,
    is_verified:string,
    collection_id:string,
    creator_id:string,
    _min_price:string,
    _max_price:string,

) {
    
    const url:string=concatinator("/token-series");
    try {

        axios.get(url, {
            params: {
              _sort: conditioner(sort,""),
              __skip: conditioner(skip,""),
              __limit: conditioner(limit,""),
              owner_id:conditioner(owner_id,""),
              token_id:conditioner(token_id,""),
              null:null,
              is_verified:conditioner(is_verified,""),
              collection_id:conditioner(collection_id,""),
              creator_id:conditioner(creator_id,""),
              exclude_total_burn:true,
              min_price:conditioner(_min_price,""),
              max_price:conditioner(_max_price,"")


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


  //https://api-v2-mainnet.paras.id/collections


  

  export async function getCollections(
    collection_id:string,
    creator_id:string,
    collection_search:string,

) {
    
    const url:string=concatinator("/collections");
    try {

        axios.get(url, {
            params: {
              collection_id:conditioner(collection_id,""),
              creator_id:conditioner(creator_id,""),
              collection_search:collection_search||""
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


 // https://api-v2-mainnet.paras.id/collection-attributes

 export async function getCollectionsAttribute(
    collection_id:string,
) {
    
    const url:string=concatinator("/collection-attributes");
    try {

        axios.get(url, {
            params: {
              collection_id:conditioner(collection_id,""),
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