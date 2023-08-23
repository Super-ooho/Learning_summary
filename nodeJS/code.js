// 704二分查找
// let nums = [-1,0,3,5,9,12], target = 9
// var search = function(nums, target) {
//     let left = 0, mid, right = nums.length - 1
//     while(left <= right){
//         mid = left + ((right-left) >> 1)
//         if(nums[mid] > target)
//             right = mid - 1
//         else if(nums[mid] < target)
//             left = mid + 1
//         else
//             return mid
//     }
//     return -1
// };

// let nums = [-1,0,3,5,9,12], target = 3
// function search(nums, target){
//     let left = 0, right = nums.length - 1
//     while(left <= right){
//         let mid = left + ((right-left) >> 1)
//         if(nums[mid] > target){
//             right = mid - 1
//         }
//         else if(nums[mid] < target){
//             left = mid + 1
//         }
//         else{
//             return mid
//         }
//     }
//     return -1
// }


// let res = search(nums,target)
// console.log(res)

// 35搜索插入位置

// var searchInsert = function(nums, target) {
//     let left=0, right=nums.length-1, mid
//     while(left <= right){
//         if(nums[left] > target)
//             return left
//         if(nums[right] < target)
//             return right + 1
//         mid = left + ((right-left) >> 1)
//         if(nums[mid] > target)
//             right = mid - 1
//         else if(nums[mid] < target) 
//             left = mid + 1
//         else
//             return mid
//     }
// };

// let res = searchInsert([1,3,5,6], 5)
// console.log(res)

// 34.在排序数组中查找元素的第一个和最后一个位置

// var searchRange = function(nums, target) {
//     let left=0, right=nums.length-1, mid
//     while(left <= right && nums.length){
//         mid = left + ((right-left)>>1)
//         if(nums[mid] > target){
//             right = mid - 1
//             // console.log(left,right,mid)
//         }
//         else if(nums[mid] < target){
//             left = mid + 1
//             // console.log(left,right,mid)
//         }
//         else{
//             let toRight=mid, toLeft=mid
//             // console.log(left,right,mid)
//             while(nums[toLeft] == target)
//                 toLeft--
//             while(nums[toRight] == target)
//                 toRight++
//             return [toLeft+1, toRight-1]
//         }
//     }
//     return [-1, -1]
// };

// let res = searchRange([], 8)
// console.log(res)

// 69. x 的平方根 
// var mySqrt = function(x) {
//     let left=1, right=x/2, mid
//     let ans
//     if(x == 0)
//         return 0
//     if(x == 1)
//         return 1
//     while(left <= right){
//         mid = left + ((right-left) >> 1)
//         if(mid*mid > x){
//             right = mid - 1
//         }
//         else if(mid*mid < x){
//             ans = mid
//             left = mid + 1
//         }
//         else{
//             return mid
//         }
//     }
//     return ans
// };

// let res = mySqrt(16)
// console.log(res)

// 367. 有效的完全平方数

// var isPerfectSquare = function(num) {
//     let left=1, right=num/2, mid 
//     if(num == 1)
//         return true
//     while(left <= right){
//         mid = left + ((right-left) >> 1)
//         if(mid*mid < num)
//             left = mid + 1
//         else if(mid*mid > num)
//             right = mid - 1
//         else
//             return true
//     }
//     return false
// };

// let res = isPerfectSquare(25)
// console.log(res)

// 27. 移除元素
// var removeElement = function(nums, val) {
//     let flag = 0
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] != val){
//             nums[flag] = nums[i]
//             flag++
//         }
//     }
//     return flag
// };

// let res = removeElement([7,25,21,2,20,7,24,9,24,24,6,22,5,1,26,17,18,29,25,9,8,27,6,26,8,5,27,5,0,29,26,29,24,18,23,14,25,17,15,20,11,22,4,17,15,0,26,3,21,21,12,0,10,10,26,19,15,23,16,7,14,12,7,8,0,0,14,26,18,22,8,21,6,12,0,21,4,26,16,26,18,21],26)
// console.log(res)


// 2023.7.10
// 26. 删除有序数组中的重复项
// var removeDuplicates = function(nums) {
//     let flag = 0
//     for(let i=1;i<nums.length;i++){
//         if(nums[flag] !== nums[i]){
//             flag++
//             nums[flag] = nums[i]
//         }
//     }
//     return flag+1
// };
// let res = removeDuplicates([0,0,1,1,1,2,2,3,3,4])
// console.log(res)


// 冒泡排序
// const bubbleSort = function(nums){
//     for(let i=0; i<nums.length; i++){
//         let flag = true
//         for(let j=0; j<nums.length-1-i; j++){
//             if(nums[j]>nums[j+1]){
//                 [nums[j],nums[j+1]] = [nums[j+1], nums[j]]
//                 flag = false
//             }
//         }
//         if(flag)
//             break
//     }
// }
// let nums = [7,25,21,2,20,7,24,9,24,24,6,22,5,1,26,17,18,29,25,9,8,27,6,26,8,5,27,5,0,29,26,29,24,18,23,14,25,17,15,20,11,22,4,17,15,0,26,3,21,21,12,0,10,10,26,19,15,23,16,7,14,12,7,8,0,0,14,26,18,22,8,21,6,12,0,21,4,26,16,26,18,21]
// bubbleSort(nums)
// console.log(nums)

// 283. 移动零
// var moveZeroes = function(nums) {
//     let slow = 0
//     for(let i = 0; i<nums.length; i++){
//         if(nums[i] !== 0){
//             nums[slow] = nums[i]
//             slow++
//         }
//     }
//     for(let i=slow; i<nums.length;i++){
//         nums[i] = 0
//     }
//     return nums
// };

// let res = moveZeroes([0,0,1,1,1,2,2,3,3,4])
// console.log(res)

// 844. 比较含退格的字符串（快慢指针）
// var backspaceCompare = function(s, t) {
//     let s_slow=0, t_slow=0
//     // 字符串是不可变的 转化成数组可变
//     let arrs = s.split("");
//     let arrt = t.split("");
//     for(let i=0; i<arrs.length; i++){
//         if(arrs[i] != '#'){
//             arrs[s_slow] = arrs[i]
//             s_slow++         
//         }
//         else{
//             s_slow--
//         }
//         // 慢指针不能为负数
//         if(s_slow < 0)
//             s_slow = 0
//     }
//     for(let i=0;i<arrt.length;i++){
//         if(arrt[i] != '#'){
//             arrt[t_slow] = arrt[i]
//             t_slow++
//         }
//         else{
//             t_slow--
//         }
//         if(t_slow < 0)
//             t_slow = 0   
//     }
//     return arrs.join('').substr(0,s_slow) == arrt.join('').substr(0,t_slow)
// };
// let res = backspaceCompare("ab#c", "ad#c")
// console.log(res)

// 844. 比较含退格的字符串（栈）
// var backspaceCompare = function(s, t) {
//     let s_stack = []
//     for(let i=0;i<s.length;i++){
//         if(s[i] != '#')
//             s_stack.push(s[i])
//         else
//             s_stack.pop()
//     }
//     // console.log(s_stack.join(''))

//     let t_stack = []
//     for(let i=0;i<t.length;i++){
//         if(t[i] != '#')
//             t_stack.push(t[i])
//         else
//             t_stack.pop()
//     }
//     // console.log(s_stack.join(''))
//     return s_stack.join('') == t_stack.join('')

// };
// let res = backspaceCompare("ab#c", "ad#c")
// console.log(res)

// 977. 有序数组的平方
// 平方最大会出现在数组开头或末尾
// var sortedSquares = function(nums) {
//     let start=0, end=nums.length-1
//     let index = nums.length-1
//     let emptyList=[]
//     while(start<=end){
//         if(nums[start]*nums[start] > nums[end]*nums[end]){
//             emptyList.push(nums[start]*nums[start])
//             start++
//         }else{
//             emptyList.push(nums[end]*nums[end])
//             end--
//         }
//         index--
//     }
//     return emptyList.reverse()
// };

// 方法2
// var sortedSquares = function(nums) {
//     let start=0, end=nums.length-1
//     let index = nums.length-1
//     let emptyList=[...nums]
//     while(start<=end){
//         if(nums[start]*nums[start] > nums[end]*nums[end]){
//             emptyList[index] = nums[start]*nums[start]
//             start++
//         }else{
//             emptyList[index] = nums[end]*nums[end]
//             end--
//         }
//         index--
//     }
//     return emptyList
// };
// let res = sortedSquares([-4,-1,0,3,10])
// console.log(res)

// // 209. 长度最小的子数组
// var minSubArrayLen = function(target, nums) {
//     let start=0, end=0
//     let sum = 0
//     let ans = Infinity 
//     while(end<nums.length){
//         sum+=nums[end]
//         while(sum >= target){
//             if(ans > end - start)
//                 ans = end - start + 1
//             sum -= nums[start]
//             start++
//         }
//         end++
//     }
//     if(ans == Infinity)
//         return 0
//     else
//         return ans
// };
// let res = minSubArrayLen(4, [1,4,4])
// console.log(res)

// 203. 移除链表元素
// class ListNode{
//     constructor(value,next){
//         this.val = value
//         this.next = next
//     }
// }
// var removeElements = function(head, val) {
//     const ret = new ListNode(0, head)
//     let cur = ret
//     while(cur.next){
//         if(cur.next.val === val){
//             cur.next = cur.next.next
//             continue
//         }
//         cur = cur.next
//     }
//     return ret.next
// };

// // let node7 = new ListNode(6,next=null)
// // let node6 = new ListNode(5,next=node7)
// // let node5 = new ListNode(4,next=node6)
// // let node4 = new ListNode(3,next=node5)
// // let node3 = new ListNode(6,next=node4)
// // let node2 = new ListNode(2,next=node3)
// // let node1 = new ListNode(1,next=node2)
// // console.log(node1)


// let res = removeElements(node1, 6)
// console.log(res)

// 707.设计链表
// class LinkNode{
//     constructor(val, next){
//         this.val = val;
//         this.next = next
//     }
// }

// class MyLinkedList{
//     constructor(){
//         this._size = 0
//         this._tail = null
//         this._head = null
//     }
//     getNode(index){
//         let cur = new LinkNode(0,this._head)
//         for(let i=0;i<=index;i++){
//             cur = cur.next
//         }
//         return cur
//     }

//     get(index){
//         if(index<0 || index>=this._size)
//             return -1
//         let cur = new LinkNode(0,this._head)
//         while(index>0){
//             cur = cur.next
//             index--
//         }
//         return cur.val
//     }

//     addAtHead(val){
//         let node = new LinkNode(val,this._head)
//         this._head = node
//         if(!this._tail){
//             this._tail = node
//         }
//         this._size++
//     }

//     addAtTail(val){
//         let node = new LinkNode(val, null)
//         if(this._tail){
//             this._tail.next = node
//         }
//         else{
//             this._head = node
//         }
//         this._tail = node
//         this._size++
//     }

//     addAtIndex(index, val){

//         if(index == this._size){
//             addAtTail(val)
//             return
//         }
//         if(index > this._size)
//             return
//         if(index <= 0){
//             addAtHead(val)
//             return
//         }
//         // 正常情况
//         let node = this.getNode(index-1)
//         let cur = new LinkNode(val,node.next)
//         node.next = cur
//         this._size++
//     }

//     deleteAtIndex(index){
//         if(index<0 || index>=this._size)
//             return
//         if(index == 0){
//             this._head.next = null
//             if(index == this._size - 1){
//                 this._tail = null
//             }
//             this._size--
//             return
//         }
//         let node = this.getNode(index-1)
//         if(index == this._size-1){
//             node.next = null
//             this._tail = node
//             this._size--
//             return
//         }
//         node.next = node.next.next
//         this._size--        
//     }

// }

// 206. 反转链表
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// var reverseList = function(head) {
//     if(!head || !head.next)
//         return head
//     let cur = head, pre = head, temp = new ListNode(0,null)
//     while(cur){
//         temp = cur.next
//         cur.next = pre
//         pre = cur
//         cur = temp
//     }
//     return pre
// };


// 19. 删除链表的倒数第 N 个结点
// var removeNthFromEnd = function(head, n) {
//     let ret = new ListNode(0, head)
//     let fast = slow = ret
//     for(let i=0;i<n;i++){
//         fast = fast.next
//     }
//     while(fast.next){
//         fast = fast.next
//         slow = slow.next
//     }
//     slow.next = slow.next.next
//     return head
// };

// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// 02.07. 链表相交

// var getLen = function(head){
//     let len = 0
//     let cur = head
//     while(cur){
//         len++
//         cur = cur.next
//     }
//     return len
// }
// var getIntersectionNode = function(headA, headB) {
//     let lenA = getLen(headA), lenB = getLen(headB)
//     let curA = headA, curB = headB
//     if(lenA < lenB){
//         // 注意加分号
//         [curA,curB] = [curB,curA];
//         [lenA, lenB] = [lenB, lenA];
//     }
//     let lendis = lenA-lenB
//     while(lendis){
//         curA = curA.next
//         lendis--
//     }
//     while(curA && curA!=curB){
//         curA = curA.next
//         curB = curB.next
//     }
//     return curA
// }

// let node4 = new ListNode(3,next=null)
// let node3 = new ListNode(6,next=node4)
// let node7 = new ListNode(6,next=node3)
// let node6 = new ListNode(5,next=node7)
// let node5 = new ListNode(4,next=node6)
// let node2 = new ListNode(2,next=node3)
// let node1 = new ListNode(1,next=node2)

// let res = getIntersectionNode(node1,node5)
// console.log(JSON.stringify(res))


// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
// let node7 = new ListNode(6,next=null)
// let node6 = new ListNode(5,next=node7)
// let node5 = new ListNode(4,next=node6)
// let node4 = new ListNode(3,next=node5)
// let node3 = new ListNode(6,next=node4)
// let node2 = new ListNode(2,next=node3)
// let node1 = new ListNode(1,next=node2)


// 哈希表题目
// 242. 有效的字母异位词
// var isAnagram = function(s, t) {
//     let hashArr = new Array(26).fill(0)
//     if(s.length != t.length) return false
//     let baseA = "a".charCodeAt()
//     for(let i=0;i<s.length;i++){
//         let hashNum = s[i].charCodeAt() - baseA
//         hashArr[hashNum]++
//         // console.log(hashNum)
        
//     }
//     for(let i=0;i<t.length;i++){
//         let hashNum = t[i].charCodeAt() - baseA
//         hashArr[hashNum]--
//         // console.log(hashNum)
//     }
//     for(let i=0;i<hashArr.length;i++){
//         if(hashArr[i] != 0)
//             return false
//     }
//     return true
// };

// let res = isAnagram('aoden','anode')
// console.log(res)

// 383. 赎金信
// var canConstruct = function(ransomNote, magazine) {
//     let hashArr = new Array(26).fill(0)
//     let baseA = "a".charCodeAt()
//     for(let i of magazine){
//         hashArr[i.charCodeAt() - baseA]++
//     }
//     for(let i of ransomNote){
//         hashArr[i.charCodeAt() - baseA]--
//     }
//     for(let i=0;i<26;i++){
//         if(hashArr[i]<0)
//             return false
//     }
//     return true
// };

// 49. 字母异位词分组
// var groupAnagrams = function(strs) {
//     let mymap = new Map()
//     for(let i=0;i<strs.length;i++){
//         let k = strs[i].split('').sort().join('')

//         console.log(k)
        
//         if(!mymap.has(k))
//             mymap.set(k,[strs[i]])
//         else
//             mymap.get(k).push(strs[i])
//     }
//     let res = []
//     mymap.forEach((val, key)=>{
//         res.push(val)
//     }) 
//     return res 
// };
// let res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
// console.log(res)

// 438. 找到字符串中所有字母异位词
// var isYiwei = function(s, t){
//     let sSort = s.split('').sort().join('')
//     let tSort = t.split('').sort().join('')
//     if(sSort == tSort)
//         return true
//     else
//         return false

// }

// var findAnagrams = function(s, p) {
//     let slength = s.length
//     let plength = p.length
//     let res = []
//     for(let i=0;i<slength-plength+1;i++){
//         let str = s.substring(i,i+plength)
//         if(isYiwei(str,p)){
//             res.push(i)
//         }
//     }
//     return res
// };
// let res = findAnagrams("abab","ab")
// console.log(res)

// 349. 两个数组的交集
// var intersection = function(nums1, nums2) {
//     let map = new Map()
//     for(let i=0;i<nums1.length;i++){
//         map.set(nums1[i],1)
//     }
//     for(let i=0;i<nums2.length;i++){
//         if(map.has(nums2[i]))
//             map.set(nums2[i],0)
//     }
//     let res = []
//     map.forEach((val,key)=>{
//         if(val == 0)
//             res.push(key)
//     })
//     return res
// }
// let res = intersection([4,9,5],[9,4,9,8,4])
// console.log(res)

// 350. 两个数组的交集 II
// var intersect = function(nums1, nums2) {
//     let obj = {}
//     for(let i in nums1){
//         if(!obj[nums1[i]])
//             obj[nums1[i]] = 1
//         else
//             obj[nums1[i]]++
//     }
//     let res = []
//     for(let i in nums2){
//         if(obj[nums2[i]]){
//             if(obj[nums2[i]]>0){
//                 res.push(nums2[i])
//                 obj[nums2[i]]--
//             }
//         }
//     }
//     return res
// };
// let res = intersect([4,9,5,4],[9,4,9,8,4])
// console.log(res)

// 202. 快乐数
// var getSum = function(n){
//     let sum = 0
//     while(n){
//         sum = sum + (n%10)*(n%10)
//         n=Math.floor(n/10)
//     }
//     return sum
// }

// var isHappy = function(n) {
//     let map = new Map()
//     while(true){
//         n = getSum(n)
//         if(n == 1)
//             return true
//         if(!map.has(n)){
//             map.set(n,1)
//         }
//         else
//             return false
//     }
// };
// console.log(isHappy(19))

// 1. 两数之和
// var twoSum = function(nums, target) {
//     let map = new Map()
//     for(let i=0;i<nums.length;i++){
//         if(map.has(target-nums[i])){
//             return [map.get(target-nums[i]), i]
//         }
//         else
//             map.set(nums[i],i)
//     }
//     return []
// };

// let res = twoSum([3,2,4],6)
// console.log(res)

// 454. 四数相加 II
// var fourSumCount = function(nums1, nums2, nums3, nums4) {
//     let map = new Map()
//     for(let i of nums1){
//         for(let j of nums2){
//             if(!map.has(i+j)){
//                 map.set(i+j, 1)
//             }
//             else{
//                 map.set(i+j, map.get(i+j)+1)
//             }
//         }
//     }

//     let count = 0
//     for(let i of nums3){
//         for(let j of nums4){
//             let cur = i + j
//             if(map.has(0-cur))
//                 count+=map.get(0-cur)
//         }
//     }
//     return count
// };
// let res = fourSumCount([1,2], [-2,-1], [-1,2], [0,2])
// console.log(res)

// 开始字符串
// 344. 反转字符串
// var reverseString = function(s) {
//     let temp
//     let len = s.length
//     for(let i=0;i<len/2;i++){
//         temp = s[i]
//         s[i] = s[len-i-1]
//         s[len-i-1] = temp
//     }
//     return s
// };
// let res = reverseString(["h","e","l","l","o"])
// console.log(res)

// 541. 反转字符串 II
// var reverseStr = function(s, k) {
//     let len = s.length
//     s = s.split('')
//     for(let i=0;i<len;i+=2*k){
//         let l = i
//         let r
//         if(i+k > len)
//             r = len
//         else
//             r = i+k-1
//         while(l<r){
//             // console.log(s[l],s[r]);
//             [s[l],s[r]] = [s[r],s[l]];
//             // console.log(s[l],s[r]);
//             l++
//             r--
//         }
        
//     }
//     return s.join('')
// };
// let res = reverseStr("abcdefg",2)
// console.log(res)

// 剑指 Offer 05. 替换空格
// var replaceSpace = function(s) {
//     s = s.split('')
//     for(let i=0;i<s.length;i++){
//         if(s[i] == ' ')
//             s[i] = '%20'
//     }
//     return s.join('')
// };
// let res = replaceSpace("We are happy.")
// console.log(res)

// 151. 反转字符串中的单词
// var reverse = function(s) {
//     s = deleteBlank(s)
//     s = reverseSentence(s)
//     s = s.split('')
//     let len = s.length
//     let left = 0
//     for(let i=0;i<len;i++){
//         if(s[i] == ' '){
//             s = reverseWords(s,left,i-1)
//             left = i+1
//         }
//         if(i == len-1)
//             s = reverseWords(s,left,i)
//     }
//     return s.join('')
// };

// var reverseSentence = function(s){
//     s = s.split('')
//     let l=0, r=s.length-1
//     for(let i=0;i<s.length/2;i++){
//         [s[l],s[r]] = [s[r],s[l]];
//         l++
//         r--
//     }
//     return s.join('')
// }

// var deleteBlank = function(s){
//     let fast=0, slow=0
//     let len = s.length
//     s = s.split('')
//     while(fast < len){
//         if(s[fast]==' ' && (fast==0||s[fast-1]==' ')){
//             fast++
//         }
//         else{
//             s[slow] = s[fast]
//             slow++
//             fast++
//         }
//     }
//     if(s[slow-1] == ' ')
//         return s.join('').substring(0,slow-1)
//     else 
//         return s.join('').substring(0,slow) 
// }

// var reverseWords = function(s, start, end){
//     let l = start, r = end
//     while(l<r){
//         [s[l],s[r]] = [s[r],s[l]];
//         l++
//         r--
//     }
//     return s

// }
// // let str = '1234'
// // console.log(str.substring(0,2))

// let res = reverse("the sky is blue")
// console.log(res)

// 剑指 Offer 58 - II. 左旋转字符串
// var reverseLeftWords = function(s, n) {
//     s = s.split('')
//     s = reverseWords(s,0,n-1)
//     s = reverseWords(s,n,s.length-1)
//     s = reverseWords(s,0,s.length-1)
//     return s.join('')
// };

// var reverseWords = function(s, start, end){
//     let l = start, r = end
//     while(l<r){
//         [s[l],s[r]] = [s[r],s[l]];
//         l++
//         r--
//     }
//     return s
// }
// let res = reverseLeftWords("the sky is blue",2)
// console.log(res)

// 459. 重复的子字符串
// var repeatedSubstringPattern = function(s) {
//     let str = ''
//     let len = s.length
//     if(len == 1)
//         return false
//     for(let i=0;i<len/2;i++){
//         str+=s[i]
//         if(s == str.repeat(Math.floor(len/str.length)))
//             return true
//     }
//     return false
// };
// let res = repeatedSubstringPattern("ababab")
// console.log(res)

// 开始栈和队列
// 232. 用栈实现队列
// var MyQueue = function() {
//     this.arr = []
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {
//     this.arr[this.arr.length] = x
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {
//     let [a,...newArr] = this.arr
//     this.arr = newArr
//     return a
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
//     return this.arr[0]
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
//     if(this.arr.length == 0) return true
//     else return false
// };

// 225. 用队列实现栈
// var MyStack = function() {
//     this.arr = []
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function(x) {
//     this.arr.push(x)
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function() {
//     this.arr = this.arr.slice(0,-1)
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function() {
//     return this.arr[this.arr.length-1]
// };

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function() {
//     if(this.arr.length == 0) return true
//     else return false
// };

// 20. 有效的括号
// var isValid = function(s) {
//     let len = s.length
//     let stack = []
//     for(let i=0;i<len;i++){
//         let c = s[i]
//         switch(c){
//             case '(':
//                 stack.push(c)
//                 break
//             case '[':
//                 stack.push(c)
//                 break
//             case '{':
//                 stack.push(c)
//                 break
//             case ')':
//                 if(stack.pop() != '(')
//                     return false                
//                 break               
//             case ']':
//                 if(stack.pop() != '[')
//                     return false
//                 break
//             case '}':
//                 if(stack.pop() != '{')
//                     return false
//                 break
//             default:
//                 break
//         }
//     }
    
//     return stack.length == 0
// };


// var isValid = function(s) {
//     let len = s.length
//     let stack = []
//     for(let i=0;i<len;i++){
//         let c = s[i]
//         switch(c){
//             case '(':
//                 stack.push(')')
//                 break
//             case '[':
//                 stack.push(']')
//                 break
//             case '{':
//                 stack.push('}')
//                 break
//             default:
//                 if(stack.pop() != c)
//                     return false
//         }
//     }
//     return stack.length == 0

// };


// let res = isValid("()[]")
// console.log(res)

// 1047. 删除字符串中的所有相邻重复项
// var removeDuplicates = function(s) {
//     let stack = []
//     let len = s.length
//     for(let i=0;i<len;i++){
//         if(stack.length!=0 && s[i] == stack[stack.length-1]){
//             stack.pop()
//         }
//         else{
//             stack.push(s[i])
//         }
//     }
//     return stack.join('')
// };

// let res = removeDuplicates("abbaca")
// console.log(res)

// 150. 逆波兰表达式求值
// var evalRPN = function(tokens) {
//     let stack = []
//     let len = tokens.length
//     for(let i=0;i<len;i++){
//         let c = tokens[i]
//         let m,n
//         switch(c){
//             case '+':
//                 m = Number(stack.pop())
//                 n = Number(stack.pop())
//                 stack.push(m+n)
//                 break
//             case '-':
//                 m = Number(stack.pop())
//                 n = Number(stack.pop())
//                 stack.push(n-m)
//                 break
//             case '*':
//                 m = Number(stack.pop())
//                 n = Number(stack.pop())
//                 stack.push(m*n)
//                 break
//             case '/':
//                 m = Number(stack.pop())
//                 n = Number(stack.pop())
//                 stack.push(parseInt(n/m))
//                 break
//             default:
//                 stack.push(Number(tokens[i]))
//         }
//     }
//     return stack[0]
// };

// let res = evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])
// console.log(res)

// 开始二叉树
// function TreeNode(val, left, right){
//     this.val = (val == undefined ? 0 : val)
//     this.left = (left == undefined ? null : left)
//     this.right = (right == undefined ? null : right)
// }

// 144. 二叉树的前序遍历
// var preorderTraversal = function(root) {
//     let res = []
//     const dfs = function(root){
//         if(root == null)
//             return
//         res.push(root.val)
//         dfs(root.left)
//         dfs(root.right)
//     }
//     dfs(root)
//     return res
// };


// let node3 = new TreeNode(3,null,null)
// let node2 = new TreeNode(2,node3,null)
// let node1 = new TreeNode(1,null,node2)

// let res = preorderTraversal(node1)
// console.log(res)


// let node3 = new TreeNode(3,null,null)
// let node2 = new TreeNode(2,node3,null)
// let node1 = new TreeNode(1,null,node2)

// var preorder = function(root){
//     let res = []
//     const dfs = function(root){
//         if(root == null)
//             return
//         res.push(root.val)
//         dfs(root.left)
//         dfs(root.right)
//     }

//     dfs(root)
//     return res
// }

// let res = preorder(node1)
// console.log(res)

// 102.二叉树的层序遍历2
// var levelOrder = function(root) {
//     let res = []
//     if(!root)
//         return res
//     let queue = []
//     queue.push(root)
//     while(queue.length != 0){
//         let levelRes = []
//         let currentLevelSize = queue.length
//         for(let i=0; i<currentLevelSize; i++){
//             let node = queue.shift()
//             levelRes.push(node.val)
//             if(node.left)
//                 queue.push(node.left)
//             if(node.right)
//                 queue.push(node.right)
//         }
//         res.unshift(levelRes)
//     }
//     return res
// };

// let node3 = new TreeNode(3,null,null)
// let node2 = new TreeNode(2,node3,null)
// let node1 = new TreeNode(1,null,node2)

// let res = levelOrder(node1)
// console.log(res)


// 199.二叉树的右视图
// var rightSideView = function(root) {
//     let res = []
//     if(!root)
//         return res
//     let queue = []
//     queue.push(root)
//     while(queue.length != 0){
//         let currentLevelSize = queue.length
//         for(let i=0; i<currentLevelSize; i++){
//             let node = queue.shift()
//             if(i == currentLevelSize-1)
//                 res.push(node.val)
//             if(node.left)
//                 queue.push(node.left)
//             if(node.right)
//                 queue.push(node.right)
//         }
//     }
//     return res
// };

// let node3 = new TreeNode(3,null,null)
// let node2 = new TreeNode(2,node3,null)
// let node1 = new TreeNode(1,null,node2)

// let res = rightSideView(node1)
// console.log(res)

// 637.二叉树的层平均值
// var averageOfLevels = function(root) {
//     let res = []
//     let queue=[]
//     queue.push(root)
//     while(queue.length != 0){
//         let currentLevelSize = queue.length
//         let ave = 0
//         for(let i=0; i<currentLevelSize; i++){
//             let node = queue.shift()
//             ave+=node.val
//             if(node.left)
//                 queue.push(node.left)
//             if(node.right)
//                 queue.push(node.right)
//         }
//         res.push(ave/currentLevelSize)
//     }
//     return res
// };

// let node3 = new TreeNode(3,null,null)
// let node2 = new TreeNode(2,node3,null)
// let node1 = new TreeNode(1,null,node2)

// let res = averageOfLevels(node1)
// console.log(res)

// 429.N叉树的层序遍历


// function NTreeNode(val, children){
//     this.val = val
//     this.children = children
// }

// var levelOrder = function(root) {
//     let res = []
//     let queue = []
//     if(!root)
//         return res
//     queue.push(root)
//     while(queue.length != 0){
//         let level = []
//         let currentQueueSize = queue.length
//         for(let i=0; i<currentQueueSize; i++){
//             let node = queue.shift()
//             level.push(node.val)
//             for(let child of node.children)
//                 child && queue.push(child)
//         }
//         res.push(level)
//     }
//     return res
// };

// let node3 = new NTreeNode(3,null)
// let node2 = new NTreeNode(2,[node3])
// let node1 = new NTreeNode(1,[node2])

// let res = levelOrder(node1)
// console.log(res)

// 515.在每个树行中找最大值
// var largestValues = function(root) {
//     let res = []
//     let queue=[]
//     if(!root)
//         return res
//     queue.push(root)
//     while(queue.length != 0){
//         let currentLevelSize = queue.length
//         let max = queue[0].val
//         for(let i=0; i<currentLevelSize; i++){
//             let node = queue.shift()
//             max = Math.max(max,node.val)
//             if(node.left)
//                 queue.push(node.left)
//             if(node.right)
//                 queue.push(node.right)
//         }
//         res.push(max)
//     }
//     return res
// };

// let node3 = new TreeNode(3,null,null)
// let node2 = new TreeNode(2,node3,null)
// let node1 = new TreeNode(1,null,node2)

// let res = largestValues(node1)
// console.log(res)

// 104. 二叉树的最大深度
// var maxDepth = function(root) {
//     let res = 0
//     if(!root)
//         return res
//     let queue = []
//     queue.push(root)
//     while(queue.length != 0){
//         let currentQueueSize = queue.length
//         for(let i=0; i<currentQueueSize; i++){
//             let node = queue.shift()
//             if(node.left) 
//                 queue.push(node.left)
//             if(node.right) 
//                 queue.push(node.right)
//         }
//         res++
//     }
//     return res
// };
// let node3 = new TreeNode(3,null,null)
// let node2 = new TreeNode(2,node3,null)
// let node1 = new TreeNode(1,null,node2)

// let res = maxDepth(node1)
// console.log(res)

// 111. 二叉树的最小深度
// var minDepth = function(root) {
//     let res = 0
//     if(!root)
//         return res
//     let queue = []
//     queue.push(root)
//     while(queue.length != 0){
//         let currentQueueSize = queue.length
//         res++
//         for(let i=0; i<currentQueueSize; i++){
//             let node = queue.shift()
//             if(!node.left && !node.right)
//                 return res
//             if(node.left) 
//                 queue.push(node.left)
//             if(node.right) 
//                 queue.push(node.right)
//         }
        
//     }
//     return res
// };
// let node4 = new TreeNode(4,null,null)
// let node3 = new TreeNode(3,null,node4)
// let node2 = new TreeNode(2,null,null)
// let node1 = new TreeNode(1,node2,node3)

// let res = minDepth(node1)
// console.log(res)

// 226. 翻转二叉
// var invertTree = function(root) {
//     if(!root)
//         return
//     let leftNode = root.left
//     root.left = invertTree(root.left)
//     root.right = invertTree(leftNode)
//     return root
// };
// let node3 = new TreeNode(3,null,null)
// let node2 = new TreeNode(2,node3,null)
// let node1 = new TreeNode(1,null,node2)

// let res = invertTree(node1)
// console.log(res)

// 101. 对称二叉树
// var isSymmetric = function(root) {
//     if(root == null)
//         return true
//     function compareTree(left, right){ 
//         if(right!=null && left==null || left!=null && right==null)
//             return false
//         else if(right==null && left==null)
//             return true
//         else if(right.val != left.val)
//             return false

//         let leftComape = compareTree(left.left, right.right)
//         let rightCompare = compareTree(left.right, right.left)
//         return leftComape&&rightCompare
//     }
//     return compareTree(root.left,root.right)
    
// };
// let node3 = new TreeNode(2,null,null)
// let node2 = new TreeNode(2,null,null)
// let node1 = new TreeNode(1,node3,node2)

// let res = isSymmetric(node1)
// console.log(res)
// var isSymmetric = function(root) {
//     let queue = []
//     if(root == null)
//         return true
//     queue.push(root.left)
//     queue.push(root.right)
//     while(queue.length != 0){
//         let currentLevelSize = queue.length
//         for(let i=0; i<currentLevelSize; i++){
//             let leftNode = queue.shift()
//             let rightNode = queue.shift()
//             if(leftNode == null && rightNode == null)
//                 continue
//             if(leftNode==null || rightNode==null || leftNode.val != rightNode.val)
//                 return false
//             queue.push(leftNode.left)
//             queue.push(rightNode.right)
//             queue.push(leftNode.right)
//             queue.push(rightNode.left)
//         }
//     }
//     return true
// };

// let node3 = new TreeNode(2,null,null)
// let node2 = new TreeNode(2,null,null)
// let node1 = new TreeNode(1,node3,node2)

// let res = isSymmetric(node1)
// console.log(res)

// 104. 二叉树的最大深度
// var maxDepth = function(root) {
//     if(root == null)
//         return 0
//     return 1+Math.max(maxDepth(root.left),maxDepth(root.right))
// };
// let node3 = new TreeNode(2,null,null)
// let node2 = new TreeNode(2,null,null)
// let node1 = new TreeNode(1,node3,node2)

// let res = maxDepth(node1)
// console.log(res)


// 111. 二叉树的最小深度
// var minDepth = function(root) {
//     if(root == null)
//         return 0
//     if(root.left == null && root.right == null)
//         return 1
//     if(root.left == null)
//         return 1+minDepth(root.right)
//     if(root.right == null)
//         return 1+minDepth(root.left)
//     return 1+Math.min(minDepth(root.left), minDepth(root.right))
// };

// let node3 = new TreeNode(2,null,null)
// let node2 = new TreeNode(2,null,null)
// let node1 = new TreeNode(1,node3,node2)

// let res = minDepth(node1)
// console.log(res)

// 深拷贝
// function deepclone(obj){
//     let _obj = JSON.stringify(obj)
//     let objClone = JSON.parse(_obj)
//     return objClone
// }
// let a = [0,1,[2,3],4]

// var deepCopy = function(obj) {
//     if(typeof obj !=='object')
//         return obj
//     var newObj = obj instanceof Array?[]:{}
//     for(var key in obj) {
//         if(obj.hasOwnProperty(key)) {
//             newObj[key] = typeof obj[key] === 'object'?deepCopy(obj[key]):obj[key]
//         }
//     }
//     return newObj
// }

// var deepCopy = function(obj){
//     if(typeof obj !== 'object')
//         return obj
//     var newObj = obj instanceof Array ? [] : {}
//     for(let key in obj){
//         if(obj.hasOwnProperty(key))
//             newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
//     }
//     return newObj
// }

// let obj = {
//     name: 'zs',
//     age: 15,
//     hobby:{
//         study: 'maths',
//         sports: 'football'
//     }
// }

// let newobj = deepCopy(obj)
// obj.hobby.sports = 'basketball'
// console.log(newobj)

// 闭包
// function fun1(){
//     var a = 4
//     function fun2(){
//         console.log(a) 
//     }
//     // 函数内部定义函数并返回
//     return fun2
// }

// var fun = fun1()
// // 调用返回函数
// fun()

var combine = function(n, k) {

    let res = []
    let path = []
    const backtracking = function(n,k,startIndex){
        if(path.length === k){
            // 拷贝一份新的数组
            res.push([...path])
            return
        }
        for(let i=startIndex; i<=n; i++){
            path.push(i)
            backtracking(n,k,i+1)
            path.pop()
        }
    }
    backtracking(n,k,1)
    return res
};
let res = combine(4,2)
console.log(res)