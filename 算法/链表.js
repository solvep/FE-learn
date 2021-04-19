// 回文链表

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var isPalindrome = function (head) {
  let arr = [];
  let temNode = head;
  while (temNode) {
    arr.push(temNode.val);
    temNode = temNode.next;
  }
  let temHeap = head;
  let result = true;
  for (let index = arr.length - 1; index >= 0; index--) {
    if (arr[index] !== temHeap.val) {
      result = false;
      break;
    }
    temHeap = temHeap.next;
  }
  return result;
};

let link3 = new ListNode(1);
let link2 = new ListNode(2, link3);
let link1 = new ListNode(2, link2);
let link = new ListNode(1, link1);

console.log("isPalindrome", isPalindrome(link));
