import { BASE_API } from "config"

export const concatinator=(path:string):string=>{
    return BASE_API.concat(path)
}
export const conditioner=(value:any,outcome:any)=>{
    let toReturn;
if(value){
    toReturn=value
}else{
    toReturn=outcome
}

return toReturn
}