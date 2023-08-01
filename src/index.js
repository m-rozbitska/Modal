const stringChecker = function (s, p1, p2) {
  const result = (first, second) => 
    (first + second === s.length) ||
    (p1[first] === s[first + second] && result(first + 1, second)) ||
    (p2[second] === s[first + second] && result(first, second + 1));
    return s.length === p1.length + p2.length && result(0, 0);
};
console.log(stringChecker('radency', 'rdnc', 'aey'));
console.log(stringChecker('radency', 'rdnd', 'aey'));




