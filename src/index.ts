import {lstat} from 'fs'

let a = 1 + 2
let b = a + 3
let c = {
  apple: a,
  banana: b
}
let d = c.apple * 4
let e = 'abc'

// any
let x: any = 1
let y: any = ['abc']
let z = x + y

// unknown
let i: unknown = 10
let j = i === 123
// let k = i + 10 // error

if (typeof i === 'number') {
  let k = i + 10
}

// symbol
const m = Symbol('m')
const n: unique symbol = Symbol('n')
// let o: unique symbol = Symbol('n') // error

// object
let p: object = {
  b: 'a'
}
// p.b // error

let s: {b: number} = {
  b: 1
}
s.b

let person: {
  firstName: string
  lastName: string
} = {
  firstName: 'John',
  lastName: 'Smith'
}

class Person {
  constructor(public firstName: string, public lastName: string) {}
}

person = new Person('Jane', 'Smith')

let seats: {
  [seatNumber: string]: string
} = {
  '34D': 'Boris',
  '34E': 'Ivan'
}

let user: {
  readonly firstName: string
} = {
  firstName: 'Bob'
}

// user.firstName = 'baba' // error

type Age = number
let age: Age = 42

type Human = {
  name: string
  age: Age
}

let driver: Human = {
  name: 'John',
  age: age
}
