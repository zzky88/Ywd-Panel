const fs = require('fs')
// const { execSync } = require('child_process')
const moment = require('moment')

// git 最新标签
// const latestTag = execSync('git describe --tags --abbrev=0').toString().trim()

// 设置默认时区为 'Asia/Shanghai'
const packDate = moment().utc().format('YYYYMMDD')

const versionLine = `VITE_APP_VERSION=${packDate}`
// 读取文件原始内容
const envFilePath = '.env'
let envContent = fs.readFileSync(envFilePath, 'utf-8')

const versionRegex = /^VITE_APP_VERSION=.*$/m
if (versionRegex.test(envContent)) {
  // 只替换版本行本身，避免每次构建把多余空行写进 .env
  envContent = envContent.replace(versionRegex, versionLine)
}
else {
  envContent = `${envContent.replace(/\s*$/, '')}\n${versionLine}`
}

// 规范结尾：移除版本行前后的多余空白，只保留单个换行结束
envContent = envContent.replace(/\n*VITE_APP_VERSION=.*$/m, `\n${versionLine}`)
envContent = `${envContent.replace(/\s*$/, '')}\n`

// 将新内容写回 .env 文件
fs.writeFileSync(envFilePath, envContent)

console.log('update to .env file.', versionLine)
