export function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("Invalid count: count must not be negative");
  }

  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
}