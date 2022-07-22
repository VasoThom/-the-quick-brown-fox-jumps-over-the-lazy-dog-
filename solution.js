//1. Schreibe eine Funktion, die aus allen übergebenen Strings den längsten String zurückgibt.

function long(arr) {
  var max_str = arr[0].length;
  var ans = arr[0];
  for (var i = 1; i < arr.length; i++) {
    var maxi = arr[i].length;
    if (maxi > max_str) {
      ans = arr[i];
      max_str = maxi;
    }
  }
  return ans;
}
console.log(long(["Ella", "Marcel", "Vaso"]));
console.log(long(["a", "ab", "abc"]));

// 1. 2 option

console.log("---------------");
function findLongestString(arr) {
  return arr.reduce((a, b) => (a.length <= b.length ? b : a));
}
console.log(findLongestString(["Ella", "Marcel", "Vaso", "Mounssif"]));
console.log(findLongestString(["Hello World", "Hi", "Welcome"]));
// 2. Schreibe eine Funktion, die alle Vorkommen eines Wortes in einem Text prüft.

function count(str, find) {
  return str.split(find).length - 1;
}

count("Good", "o"); // 2
console.log(count("Good", "o"));

// 3. Schreibe eine Funktion, die alle Wörter in einem Text rückwärts geschrieben zurückgibt. Die Position der Worte soll sich dabei aber nicht ändern. Beispiel: "the quick brown fox jumps over the lazy dog" => "eht kciuq nworb xof spmuj revo eht yzal god"
function reverseWords(str) {
  let reverseWordArr = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}

console.log(reverseWords("the quick brown fox jumps over the lazy dog"));

console.log("------------");

function wordReverse(text) {
  const word = text.split(" ");
  const words = [];
  for (i = 0; i < word.length; i++) {
    const reverse = word[i].split("").reverse().join("");
    words.push(reverse);
  }
  return words.join(" ");
}
console.log(reverseWords("the quick brown fox jumps over the lazy dog"));
