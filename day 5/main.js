var animal = {
  name: Elle,
  age: 6,
  location:"Wildlife Trust"
  food: ["tomatoes", "corn on the cob"]
  hobbies: ["laying in the sun", "swimming in the pond"]

};

----------

var productData = {
  state: "active",
  title: "Mid Century Siesta Ware White Mug with Anchor",
  price: 12.00,
  quantity: 1,
  tags: ["mug", "siesta ware", "beer mug", "white glass mug", "anchor and stars"],
  category_path: ["Vintage", "Housewares", "Cup"],
  image: {
    small: {
      url: "http://placehold.it/300x300"
    }
  }
};

console.log(productData.price);
console.log(productData.title);
console.log(productData.tags[2]);
console.log(productData.image.small.url);
console.log(productData.category_path[0]);


Get the sum of two numbers
function sum (x, y) {
  return x + y;
}

  var result = sum (120, 17);
  console.log(result);
console.log(sum(2, 18));
// Find the largest of two numbers


function max(a, b){
  var largest;
  if (a > b) {
    largest = a;
  } else {
    largest = b;
  }
  return largest;
}

console.log(max(2, 15));
 console.log(max(24, 8));

function math (num1, num2, operator) {
  var answer;

  if (operator === "+") {
    answer = num1 + num2;
  } else if (operator === "-") {
    answer = num1 - num2;
  } else if (operator === "/") {
    answer = num1 / num2;
  } else if (operator === "*") {
    answer = num1 * num2;
  }

  return answer;
}

console.log(math(5, 5, "+"));
console.log(math(15, 5, "-"));
console.log(math(50, 5, "/"))
console.log(math(2, 5, "*"))
