// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
let update = inventory.find(item => item.quantity === 100 )
if (update){
  update.quantity = 200
}
inventory.push({ name: "Orange", price: 20, quantity: 300})
let total = inventory.reduce((arr,curr)=>{
  let money = curr.price
  let stock = curr. quantity
  return arr + stock*money
},0)
console.log(inventory);
console.log('มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก'+' '+ total +' '+'บาท');