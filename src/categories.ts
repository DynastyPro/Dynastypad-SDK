import {concatinator,conditioner} from "./utils"
import axios from "axios"


// /categories

export async function getCategories(
    category_id:string
) {
    
    const url:string=concatinator("/categories");
    try {

        axios.get(url, {
            params: {
                category_id
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

