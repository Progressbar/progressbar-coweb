let data = require('../../data.json')

// let orders = data.orders
let ordersArr = Object.entries(data.orders)
// console.log(ordersArr)

let orderSum = {}
for (let n of ordersArr) {
  let month = new Date(parseInt(n[0])).getMonth()
  let day = new Date(parseInt(n[0])).getDate()
  Object.assign(orderSum, {[n[0]]: [n[1].length, month, day]})
}

console.log(orderSum)


// Match request for coworker open
// let requestedcoworker = '3a5c5a17-a351-4dba-94e0-99073bb23a1b'
// let now = Date.now()
//
// let year = new Date(now).getFullYear()
// let month = new Date(now).getMonth()
// let day = new Date(now).getDate()
//
// let dateToday = new Date(year, month, day).getTime()
// let orderDateToday = data.orders[dateToday]
// let openDoor = orderDateToday.find(x => x === requestedcoworker)
// // console.log(data)
// console.log(now)
// console.log(dateToday)
// console.log(`openning doors to ${openDoor}`);
