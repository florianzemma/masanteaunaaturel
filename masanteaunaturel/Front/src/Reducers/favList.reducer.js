export default function(favList = [], action){
    if(action.type === 'sendFavList'){
        let favListCopy = [...favList,action.userFavList]
        console.log(action.userFavList)
        return favListCopy
    }else{
        return favList
    }
}