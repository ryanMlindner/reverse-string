function reverseString(str) {
  const length = str.length
  newStr = ""
  for (let index = length; index > 0; index--) {
    newStr = newStr + str.charAt(index - 1)
  }
  return newStr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// pseudocode
/**
 * given a string,
 * take the last element of the string
 * add it as the first element of a new string
 * repeat until done
 */
// And a written explanation of your solution
/**
 * reversing strings is a simple (and solved, mostly) problem that requires some index
 * manipulation. there are efficiency problems that can be addressed by using the same string
 * or by slicing and replacing without having to look at the values of the string at all,
 * but these are not required to solve the issue
 */
