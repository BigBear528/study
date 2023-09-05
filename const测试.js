/* const age = 10;
console.log(age); */

/* var age = 10;
console.log(window.age);

let height = 20;
console.log(height);
console.log(window.height);
 */

/* 
const arr = [1, 2, 3];
console.log(arr.length);
console.log(arr.length / 2);
console.log(parseInt(arr.length / 2));
 */

// var search = function (nums, target) {
//   let start = 0;
//   let end = nums.length - 1;
//   let middle = parseInt(start + end);

//   while (start <= end) {
//     if (nums[middle] === target) {
//       return middle;
//     } else if (nums[middle] > target) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }

//     middle = parseInt(start + end);
//   }
// };

// const arr = [-1, 0, 3, 5, 9, 12];
// const num = search(arr, 9);
// console.log(num);

/* 
输入：nums = [3,2,4], target = 6
输出：[1,2] 
*/

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) {
//         continue;
//       } else {
//         if (nums[i] + nums[j] === target) {
//           return [i, j];
//         }
//       }
//     }
//   }
// };

// nums = [3, 2, 4];
// target = 6;
// console.log(twoSum(nums, target));
/* 
var addTwoNumbers = function (l1, l2) {
  let node1 = l1;
  let node2 = l2;

  let flag = 0;
  let result = null;

  while (node1 || node2 || flag === 1) {
    let num1 = node1 ? node1.val : 0;
    let num2 = node2 ? node2.val : 0;

    let num = num1 + num2 + flag;
    if (num >= 10) {
      num = num % 10;
      if (result !== null) {
        let node = result;
        while (node.next) {
          node = node.next;
        }
        node.next = new ListNode(num);
      } else {
        result = new ListNode(num);
      }
      flag = 1;
    } else {
      if (result !== null) {
        let node = result;
        while (node.next) {
          node = node.next;
        }
        node.next = new ListNode(num);
      } else {
        result = new ListNode(num);
      }
      flag = 0;
    }
    node1 = node1?.next;
    node2 = node2?.next;
  }

  return result;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const l1 = new ListNode(9);
l1.next = new ListNode(9);
l1.next.next = new ListNode(9);
l1.next.next.next = new ListNode(9);
l1.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next.next = new ListNode(9);

const l2 = new ListNode(9);
l2.next = new ListNode(9);
l2.next.next = new ListNode(9);
l2.next.next.next = new ListNode(9);

console.log(addTwoNumbers(l1, l2)); */

// 使用集合set
// var lengthOfLongestSubstring1 = function (s) {
//   let len = s.length;
//   let sliceString;
//   let set;

//   while (len > 1) {
//     let start = 0;
//     let end = len;

//     while (end <= s.length) {
//       sliceString = s.slice(start, end);
//       set = new Set(sliceString);
//       if (set.size === len) {
//         return len;
//       }
//       start++;
//       end++;
//     }
//     len--;
//   }

//   return len;
// };

// 字符串滑动判断
/* 
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }

  let len = 1;
  let result = 1;

  for (let i = 0; i <= s.length - len; i++) {
    // console.log(i, "----");
    while (len <= s.length) {
      let sliceString = s.slice(i, i + len);
      // console.log(sliceString);
      let set = new Set(sliceString);
      if (set.size === len) {
        result = len;
        len++;
        // console.log(result, len);
      } else {
        break;
      }
    }
  }

  return result;
};
 */

// const s = "aab";
// console.log(lengthOfLongestSubstring(s));

// console.log(s.indexOf(s[0]));

var findMedianSortedArrays = function (nums1, nums2) {
  // 合并数组
  let numArr = [...nums1, ...nums2]

  // 排序
  numArr = numArr.sort((x, y) => {
    return x - y
  })

  // 返回结果
  const length = numArr.length
  if (length % 2 == 0) {
    return (numArr[length / 2] + numArr[length / 2 - 1]) / 2
  } else {
    return numArr[parseInt(length / 2)]
  }
}
// [1,2]
// [3,4]
// console.log(findMedianSortedArrays([3], [-2, -1]));

// console.log(
//   [15, 2, 4, 10, 20].sort((x, y) => {
//     if (x > y) {
//       return 1;
//     } else if (x < y) {
//       return -1;
//     } else {
//       return 0;
//     }
//   })
// );

// console.log(
//   [15, 2, 4, 10, 20].sort((x, y) => {
//     return x - y;
//   })
// );
// console.log(["a", "C", "A", "b"].sort());

// const time = {
//   year: 2017,
//   month: 12,
//   day: 1,
// };

// let date  = new

// let date = new Date("2022-12-30");
// console.log(date);
// console.log(date.getMonth());

// function dateTest(paramsDate) {
//   const maxDate = new Date(`${paramsDate.year}-${paramsDate.month}-${paramsDate.day}`);
//   const minDateFormat = new Date(maxDate.setMonth(maxDate.getMonth() - 1));
//   return {
//     year: minDateFormat.getFullYear(),
//     month: minDateFormat.getMonth() + 1,
//     day: minDateFormat.getDate(),
//   };
// }

// const testData = {
//   year: 2022,
//   month: 5,
//   day: 31,
// };

// console.log(dateTest(testData));

// let time1 = "2022-07-12T05:44:25.141+00:00";

// let time2 = new Date(time1).getFullYear();

// console.log(time2);

// console.log(5 / 4);
// console.log(2 ** 3);

// const obj = {
//   height: 1.88,
//   age: 22,
// };

// for (const item in obj) {
//   console.log(item);
// }

// const date = new Date();

// console.log(date);
// console.log(date.toDateString("YYYY-MM-DD "));
// console.log(date.valueOf());

// let obj1 = {
//   m: 1,
//   n: 2,
//   attr: {
//     name: "Jack",
//     age: 18,
//   },
// };

// let test = {
//   h: 500,
// };

// let obj2 = Object.assign(test, obj1);

// obj1.attr.name = "Tom";
// console.log(obj1.attr.name); // Tom
// console.log(obj2.attr.name); // Tom

// obj2.attr.name = "Jarry";
// console.log(obj1.attr.name); // Jarry
// console.log(obj2.attr.name); // Jarry

// console.log("--------------");
// console.log(obj1);
// console.log(obj2);

// obj1.n = 100;
// console.log(obj1.n);
// console.log(obj2.n);

// let stringValue = " hello world ";
// let trimmedStringValue = stringValue.trim();
// console.log(stringValue); // " hello world "
// console.log(trimmedStringValue); // "hello world"

// let values = [1, 2, 3, 4, 5, 6, 7, 8];
// let max = Math.max(...values);

// console.log(max);

// const a1 = [1, 2, 3, 4, [1, 2, 3]];
// const a2 = Array.from(a1);

// a1[4].push(4);
// console.log(a1); // [1, 2, 3, 4]
// console.log(a2); // [1, 2, 3, 4]
// console.log(a1 === a2); // false

// const a3 = [1, 2, 3];
// const a4 = a3;

// console.log(a3 === a4);

// let stringValue = "hello world"

// console.log(stringValue.substring(4, -1)) // "hel"

// eval("function sayHi() { console.log('hi'); }")
// sayHi()

// eval("let msg = 'hello world';")
// console.log(msg) // Reference Error: msg is not defined

// const obj = {
//   age: 18,
//   5: 20,
// }

// console.log(obj)

// console.log(obj["5"])
// console.log(obj[5])

// const arr = [1, 2, 3]

// console.log(arr)
// arr[5] = 5
// console.log(arr)
// console.log(arr.length)

// console.log(arr.toString())
// console.log(arr.valueOf())
// console.log(typeof arr.toString())
// console.log(Array.isArray(arr.valueOf()))
// console.log(arr === arr.valueOf())

// const arr = [1, 5, 2, 10, 8, 20, 6]

// console.log(arr.sort())
// console.log(
//   arr.sort((value1, value2) => {
//     // return value1 > value2 ? 1 : -1
//     return value1 - value2
//   })
// )

// console.log(arr.slice(-2, -1))

const arr = [1, 2, 3]
// console.log(arr.splice(1, 1, "a", "b"))
// console.log(arr)

// console.log(
//   arr.every((item, index, array) => {
//     if (item >= 2) {
//       return true
//     }

//     return false
//   })
// )

// console.log(
//   arr.filter((item, index, array) => {
//     if (item >= 2) {
//       return true
//     }

//     return false
//   })
// )

// arr.forEach((item, index, array) => {
//   console.log(item)
// })

// console.log(
//   arr.map((item, index, array) => {
//     return item * item
//   })
// )

console.log(
  arr.some((item, index, array) => {
    if (item >= 3) {
      return true
    }

    return false
  })
)
