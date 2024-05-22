// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
function calculateTotalPrice(products,promotionCode){
  let total = 0
 for(let i of products){
  total += i.price*i.quantity
  console.log(total);
 } 
  if(promotionCode === "SALE20"){
    return total*0.8
  }if (promotionCode === "SALE50") {
    return total*0.5
  }else{
    return total
  }
}

console.log(calculateTotalPrice(products,promotionCode));
