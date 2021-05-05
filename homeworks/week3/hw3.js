const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line)
})

// 前面已宣告過 lines，這裡改用 input 作為參數，拿取內容 lines
function solve(lines) {
  const n = Number(lines[0])
  for (let i = 1; i <= n; i++) {
    let isPrime = true
    if (Number(lines[i]) === 1) isPrime = false
    for (let j = 2; j < Number(lines[i]); j++) {
      if (Number(lines[i]) % j === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) {
      console.log('Prime')
    } else {
      console.log('Composite')
    }
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines)
})
