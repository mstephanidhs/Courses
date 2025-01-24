/*
Challenge:
1. Use numeric separators (_) to separate out
   the digits into chunks of 3 so they are easier to read.
*/


const tomsBankBalanceGBP = BigInt(9_007_199_254_740_991)
// can't interact with other types like numbers
console.log(tomsBankBalanceGBP)

// BigInt is useful in contexts requiring precise handling of large integers
// such as cryptography, or when interacting with databases that use large
// integer identifiers