
const select = (arr, obj) => {
     let myObj = {};

     arr.forEach((item) => {
        if(obj[item]) {
            myObj[item] = obj[item]
        }
     });

     return myObj

}