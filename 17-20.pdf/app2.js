 //         Question # 06 #
 // a. Counting
 var counting = "";
 for (var i = 1; i <= 15; i++) {
   counting += i + ", ";
 }
 document.getElementById("counting").innerHTML = counting.slice(0, -2);

 // b. Reverse counting
 var reverseCounting = "";
 for (var i = 10; i >= 1; i--) {
   reverseCounting += i + ", ";
 }
 document.getElementById("reverseCounting").innerHTML = reverseCounting.slice(0, -2);

 // c. Even
 var even = "";
 for (var i = 0; i <= 20; i += 2) {
   even += i + ", ";
 }
 document.getElementById("even").innerHTML = even.slice(0, -2);

 // d. Odd
 var odd = "";
 for (var i = 1; i <= 19; i += 2) {
   odd += i + ", ";
 }
 document.getElementById("odd").innerHTML = odd.slice(0, -2);

 // e. Series
 var series = "";
 for (var i = 1; i <= 10; i++) {
   series += (i * 2) + "k, ";
 }
 document.getElementById("series").innerHTML = series.slice(0, -2);