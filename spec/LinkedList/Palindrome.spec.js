const isPalindrome = require('../../src/LinkedList/Palindrome')
const SinglyLinkedList = require('../../src/LinkedList/SinglyLinkedList')

describe('Linked List - Palidrome', () => {
  beforeEach(() => {
    this.list = new SinglyLinkedList()
  })
  it ('should return false when empty', () => {
    expect(isPalindrome(this.list)).toBe(false)
  })
  it ('should return true when list is a->b->c->b->a', () => {
    this.list.push('a')
    this.list.push('b')
    this.list.push('c')
    this.list.push('b')
    this.list.push('a')
    expect(isPalindrome(this.list)).toBe(true)
  })

  it ('should return false when list is a->b->c', () => {
    this.list.push('a')
    this.list.push('b')
    this.list.push('c')
    expect(isPalindrome(this.list)).toBe(false)
  })
})