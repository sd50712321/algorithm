'use strict';
const obj1 = {
  a : 't1',
  sub2 : function () {
    console.log(`hi ${this.a}`)
  }
}
obj1.sub2()
const obj2 = {
  b : 't2',
  sub4 : () => {
    console.log(`${this}`)
    console.log(`hi ${this.b}`)
  }
}
obj2.sub4()