/** product: calculate the product of an array of numbers. */

const product = (nums, index=0, result=1) => {
  /**If the length of nums is 0 or the hightest count on index return the result
   * Which could be 0 or the product of the array numbers
   */
  if (nums.length === index) return result;
  /** Result is equal to 1 times the first index value then it equals the 
   *  the value of the previous times the value of the next nums[index]
  */
  result = result * nums[index];
  /** Return the function itself with the nums array, the index + 1
   *  and the new result value
  */
  return product(nums, index + 1, result);
}

/** longest: return the length of the longest word in an array of words. */

const longest = (words, index=0, max=0) => {
  /** If the words length is equal to zero or the max index count
   *  then return the max which could be 0 or the longest string length
  */
  if(words.length === index) return max;
  /** If the words array string value length is greater than max
   *  Make that the new max
  */
  if (words[index].length > max) max = words[index].length;
  /** Return the function within itself until there is no more array values*/
  return longest(words, index + 1, max);
}

/** everyOther: return a string with every other letter. */

const everyOther = (str, index=0, result="") => {
  /** If the str length is equal to 0 or the max index count then 
   *  return the result
  */
  if(str.length === index) return result;
  /** If index divided by 2 has no remainder then add that index char value to the
   *  result
  */
  if (index % 2 === 0) result += str[index];
  /** Return everyother until there are nomore chars in the string*/
  return everyOther(str, index + 1, result);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

const isPalindrome = (str, index = 0, leftIndex = index, rightIndex = str.length - index - 1) => {
  /** If left index is greater than or equal to right index return true*/
  if (leftIndex >= rightIndex) return true;
  /** If the str left index value is not equal to right str index value return 
   *  false
  */
  if (str[leftIndex] !== str[rightIndex]) return false;
  /** Return the function within itself to keep comparing index values*/
  return isPalindrome(str, index + 1, leftIndex = index, rightIndex = str.length - index - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

const findIndex = (arr, val, index=0) => {
  /** If the length of the arr is zero then return -1*/
  if (arr.length === index) return -1;
  /** If the arr index value equal to the val parameter then return the index*/
  if (arr[index] === val) return index;
  /** Return the function within itself until the value is found or not*/
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

const revString = (str, index=0, result="") => {
  /** If the str length is equal to 0 or the max value of the index
   *  then return the result which would be empty or have a string value
  */
  if(str.length === index) return result;
  /** Result is adding on the chars from the side denoted by the 
   *  str.length - index - 1. The minus one is to ensure that the first
   *  char is added on the first run since on the first run index is 0
  */
  result += str[str.length - index - 1];
  /** Return the function within itself until the string is fully reversed */
  return revString(str, index + 1, result);
}

/** gatherStrings: given an object, return an array of all of the string values. */

const gatherStrings = (obj, result=[]) => {
  /** Using the for loop to iterate through the obj keys
   *  If the type of obj[key] is a string then push the string into the result
   *  If the type of obj[key] is a object then push the function within itself
   *  and pass the obj[key] as a parameter to access the string value on the next
   *  loop
  */  
  for (let key in obj) {
    if (typeof obj[key] === "string") result.push(obj[key]);
    if (typeof obj[key] === "object") result.push(...gatherStrings(obj[key]));
  }
  /** Return result when everything has been looped through*/
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

const binarySearch = (arr, val, left = 0, right = arr.length) => {
  /** If the left is greater than the right return -1 This happens 
   *  when the value has no been found
  */
  if (left > right) return -1;
  /** Creating the mid index by adding right and left divided by two
   *  and using the math.floor to prevent a number with a decimals likes 4.5
  */
  const mid = Math.floor((right + left) / 2);
  /** If the arr mid value is equal to the val input return mid index*/
  if(arr[mid] === val) return mid;
  /** If the arr mid value is greater than the val return the function
   *  within itself and pass in mid -1 to move the search group to the left 
   *  side. 
  */
  if(arr[mid] > val) return binarySearch(arr, val, left, mid - 1);
  /** Return the function within itself to move the search group to the right
   *  until val is found or not
  */
  return binarySearch(arr, val, mid + 1, right); 
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
