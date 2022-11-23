import {BASE_API} from "../config"
import {getCategories} from "./categories"
import {getCollectionsAttribute,getCollections,getTokenSeries} from "./nftDetails"
import {getLatestTransaction,getCollectionStat} from "./statistics"

//getCollectionsAttribute
//getCollections
//getTokenSeries

//getLatestTransaction
//getCollectionStat

module.exports={
    getLatestTransaction,
    getCollectionsAttribute,
    getCollections,
    getTokenSeries,
    BASE_API,
    getCollectionStat,
    getCategories
}