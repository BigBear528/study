// 模拟对象
const obj = {
  student: [
    {
      name: "xiaoming",
      age: 18,
    },
    {
      name: "xiaohong",
      age: 20,
    },
  ],
  teacher: {
    name: "zhansan",
    age: 30,
  },
  books: ["java", "c++"],
  className: "class1",
  test: [],
}

// 对象扁平化方法
const objectFlatten = (obj) => {
  // 定义结果对象
  const resultObj = {}

  // 循环取到对象的键
  for (const item in obj) {
    if (typeof obj[item] !== "object") {
      // 普通类型
      resultObj[item] = obj[item]
    } else if (Array.isArray(obj[item])) {
      // 数组类型
      if (obj[item] && typeof obj[item][0] !== "object") {
        resultObj[item] = obj[item][0]
      }
    } else {
      // 对象类型
    }
  }

  console.log(resultObj)
}
objectFlatten(obj)
