//This program checks if a given string includes a palindrome.

const isPalindrome = (string) => {
  if (string.length <= 1) {
    return true;
  }

  const firstSymbol = string[0];
  const lastSymbol = string[string.length - 1];

  if (firstSymbol !== lastSymbol) {
    return false;
  }

  const stringWithoutFirstAndLastSymbols = string.substring(1, string.length - 1);

  return isPalindrome(stringWithoutFirstAndLastSymbols);
};
