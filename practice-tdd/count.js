export function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  for (const char of stringOfCharacters) {
    if (char === findCharacter) {
      count++;
    }
  }
  return count;
}