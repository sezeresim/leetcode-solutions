/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var recursiveReader = function (node) {
    if (node.next) {
        return recursiveReader(node.next) + "" + node.val
    }

    return node.val
}

var generatorNodeList = function (value) {
    if (!value.length) {
        return null;
    }

    const reversedList = value.reverse();
    const head = new ListNode(Number(reversedList[0]));
    let current = head;

    for (let i = 1; i < reversedList.length; i++) {
        current.next = new ListNode(Number(reversedList[i]));
        current = current.next;
    }

    return head;
};

var addTwoNumbers = function (l1, l2) {
    const t1 = recursiveReader(l1);
    const t2 = recursiveReader(l2);
    const total = BigInt(t1) + BigInt(t2);

    return generatorNodeList(String(total).split(""));
}