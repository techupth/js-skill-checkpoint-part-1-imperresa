// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้


// let minTotal =Math.min(...inventory.map(item=> item.quantity))
// console.log('สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี'+' '+minTotal+' '+ 'ชิ้น' );



let minTotal = inventory.reduce((arr,curr)=>{
  console.log(arr);
  return curr.quantity < arr? curr.quantity:arr
},Infinity)
console.log('สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี'+' '+minTotal+' '+ 'ชิ้น');
