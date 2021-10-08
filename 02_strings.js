//a)

//Method 1
var str1 = "adding characters";
str1 = str1.toUpperCase();
console.log(str1);
//Method 2
var str2 = "more characters";
console.log(str2.toUpperCase());

//b)
var str3 = "even more characters";
var str4 = str3.substring(0,5);
console.log(str4);

//c)
var str5 = "keep them coming";
var str6 = str5.substring(13,16)
console.log(str6);

//d) *in str7 the upper and lower cases are mixed to show it works
var str7 = "tEn CHARACTERS aGaIn";
var str8 = str7.toUpperCase().substring(0,1)+str7.toLocaleLowerCase().substring(1,24);
console.log(str8);

//e)
var str9 = "they all have spaces";
var str10 = str9.indexOf(" ");
console.log(str10);

//f) same as d)
var str11 = "sUpErDupER loNgWOrds";
var str12 = str11.toUpperCase().substring(0,1)+str11.toLocaleLowerCase().substring(1,10)
+str11.substring(str11.indexOf(" "),11)+str11.toUpperCase().substring(11,12)
+str11.toLocaleLowerCase().substring(12,20);
console.log(str12);


