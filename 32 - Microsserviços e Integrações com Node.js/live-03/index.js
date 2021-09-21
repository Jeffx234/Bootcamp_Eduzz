function checkSign(num) {
  return num > 0 ? 'positive' : num == 0 ? 'zero' : 'negative'
}

console.log(checkSign(-2))
