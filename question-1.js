// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
let update =myTodo.find(item => item.id === 4 )
if(update){
  update.todo = "Go to the gym"
}
myTodo.push({ id: 5, todo: "Walk the dog" })
myTodo.pop()

let result = myTodo[myTodo.length -1]
console.log('Todo id:' + result.id+ ' ' + result.todo);
