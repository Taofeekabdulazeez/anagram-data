async function getJson() {
  const response = await fetch("./anagram.json");
  const data = await response.json();
  // console.log(Object.keys(data));
  const words = Object.keys(data).map((word) => word.toLowerCase());
  console.log(words);
}

// getJson();

function canFormString(source, str) {
  const pattern = new RegExp(`^[${source}]+$`);
  return pattern.test(str);
}

// Example usage:
const source = "master";
// const str1 = "bed";
// const str2 = "hello";

console.log(canFormString(source, "ater")); // Output: true
console.log(canFormString(source, "eat")); // Output: false
