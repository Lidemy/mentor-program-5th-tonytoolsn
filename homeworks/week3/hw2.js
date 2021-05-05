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
  const temp = lines[0].split(' ')
  const n = Number(temp[0])
  const m = Number(temp[1])
  for (let i = n; i <= m; i++) {
    let cpi = i
    const digits = String(cpi).length
    let sum = 0
    while (cpi !== 0) {
      const num = cpi % 10
      sum += Math.pow(num, digits)
      cpi = Math.floor(cpi / 10)
    }
    if (sum === i) console.log(i)
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines)
})
