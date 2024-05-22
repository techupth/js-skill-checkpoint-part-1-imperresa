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

const promotionCode = "";
function calculateTotalPrice(callback,promotionCode,products){
  let total = callback(products)
  console.log(total);
  if(promotionCode === "SALE20"){
    return total*0.8
  }if (promotionCode === "SALE50") {
    return total*0.5
  }else{
    return total
  }
}
function check(all){
  let total =0
  for (let i of all){
    total += i.price*i.quantity
  }
  return total
  }



console.log(calculateTotalPrice(check,promotionCode,products));