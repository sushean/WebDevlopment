var str = "Hello my name is sushean sushean";
var stri = " hello my name is sushean sushean ";

console.log("The Length of string is : ",str.length);

console.log("The index of Sushean is : ",str.indexOf("sushean"));

console.log("The last index of Sushean IS : ",str.lastIndexOf("sushean"));// if the word repets then the index of last word

console.log("Slice function : ",str.slice(-2,5));

console.log("substring fun : ",str.substring(2,4));

console.log("replace fun : ",str.replace("sushean","sus"));

console.log("Split : ",str.split(" "));

console.log("Trim fun :",stri.trim())

console.log("upperCase : ",str.toUpperCase());

console.log("LowerCase : ",str.toLowerCase());