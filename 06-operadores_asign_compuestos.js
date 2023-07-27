
/*
Operador    Ejemplo     Equivale a
   +=       x += y      x = x + y
   -=       x -= y      x = x - y
   *=       x *= y      x = x * y
   /=       x /= y      x = x / y
   %=       x %= y      x = x % y
   **=      x **= y     x = x ** y  
*/

let numero1 = 8;
let numero2 = 3;
numero1 += numero2;
console.log("numero1+=numero2:",numero1); /* 11 */
numero1 = 8;
numero1 -= numero2;
console.log("numero1-=numero2:",numero1); /* 5 */
numero1 = 8;
numero1 *= numero2;
console.log("numero1*=numero2:",numero1); /* 24 */
numero1 = 8;
numero1 /= numero2;
console.log("numero1/=numero2:",numero1); /* 2.6666 */
numero1 = 8;
numero1 %= numero2;
console.log("numero1%=numero2:",numero1); /* 2 */
numero1 = 8;
numero1 **= numero2;
console.log("numero1**=numero2:",numero1); /* 512 */ 