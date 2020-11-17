/* # JS-Object

1. Program and observe the following requirements:  
  - Create a null object and set its variable name as user; 
  - Add a name attribute and set its value as John; 
  - Add a surname attribute and set its value as Mike; 
  - Modify the value of name attribute as Peter; 
  - Delete name attribute of user. 
 
2. Program and observe the following requirements: calculate how many pieces of fruit there are in the fruit object and the output should be 50. 

```
var fruit = {
apple: 20,
pear: 20,
peach: 10
};
// write your code here...
```
## Requirements
Create a js document and complete the above requirements.
*/

//For case 1:

var user = {
  name: "John",
  surname: "Mike",
};
var name = "Peter";
user.name = name;
delete user.name;

//For case 2:

var fruit = {
apple: 20,
pear: 20,
peach: 10
};
var totalFruits = 0;
totalFruits = fruit.apple + fruit.pear + fruit.peach;
console.log(totalFruits);