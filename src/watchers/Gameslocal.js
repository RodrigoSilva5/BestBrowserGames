let gamesLocal = []
/* @arr array you want to listen to
   @callback function that will be called on any change inside array
 */
   function listenChangesinArray(arr,callback){
    // Add more methods here if you want to listen to them
   ['pop','push','reverse','shift','unshift','splice','sort'].forEach((m)=>{
       arr[m] = function(){
                    let res = Array.prototype[m].apply(arr, arguments);  // call normal behaviour
                    callback.apply(arr, arguments);  // finally call the callback supplied
                    return res;
                }
   });
}
listenChangesinArray(gamesLocal, () => {
    console.log(gamesLocal)
    localStorage.removeItem("games")
    localStorage.setItem("games", JSON.stringify(gamesLocal))
})

export { gamesLocal }