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
  const arrLength = Number(lines[0])
  for (let i = 1; i <= arrLength; i++) {
    const [a, b, k] = lines[i].split(' ')
    if (k === 1) {
      if (BigInt(a) > BigInt(b)) {
        console.log('A')
      } else if (BigInt(a) === BigInt(b)) {
        console.log('DRAW')
      } else {
        console.log('B')
      }
    } else {
      if (BigInt(a) > BigInt(b)) {
        console.log('B')
      } else if (BigInt(a) === BigInt(b)) {
        console.log('DRAW')
      } else {
        console.log('A')
      }
    }
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines)
})
