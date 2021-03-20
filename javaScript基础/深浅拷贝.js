// 1. Object.assign
// 

let target = {a: 1, b: 2}
let source = {c: 3, d: {f: 100}}

Object.assign(target, source)

source.c = 100
source.d.f = 1000
console.log('---', target, source)

// --- { a: 1, b: 2, c: 3, d: { f: 1000 } } { c: 100, d: { f: 1000 } }

// 2. 