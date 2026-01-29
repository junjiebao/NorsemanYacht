# 快速命令参考

## 🚀 基础命令

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm start
```
访问: http://localhost:3000

### 构建生产版本
```bash
npm run build
```
输出目录: `build/`

### 运行测试
```bash
npm test
```

### 代码格式化 (需要先安装 Prettier)
```bash
npm install --save-dev prettier
npx prettier --write "src/**/*.{js,jsx,json,css}"
```

---

## 📦 依赖管理

### 查看已安装的包
```bash
npm list --depth=0
```

### 更新依赖包
```bash
npm update
```

### 检查过时的包
```bash
npm outdated
```

### 安装特定版本
```bash
npm install package-name@version
```

---

## 🐛 故障排除

### 清除缓存并重新安装
```bash
# Windows PowerShell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install

# macOS/Linux
rm -rf node_modules package-lock.json
npm install
```

### 清除 npm 缓存
```bash
npm cache clean --force
```

### 修复权限问题 (macOS/Linux)
```bash
sudo chown -R $USER ~/.npm
```

---

## 🔧 开发工具

### VS Code 推荐插件

1. **ES7+ React/Redux/React-Native snippets**
   - ID: `dsznajder.es7-react-js-snippets`
   - 快捷代码片段

2. **Tailwind CSS IntelliSense**
   - ID: `bradlc.vscode-tailwindcss`
   - CSS 类名智能提示

3. **Prettier - Code formatter**
   - ID: `esbenp.prettier-vscode`
   - 代码格式化

4. **Auto Rename Tag**
   - ID: `formulahendry.auto-rename-tag`
   - 自动重命名标签

### 快速安装命令
```bash
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
code --install-extension formulahendry.auto-rename-tag
```

---

## 🎨 Tailwind 实用命令

### 生成 Tailwind 配置
```bash
npx tailwindcss init -p
```

### 构建 Tailwind CSS (如需单独构建)
```bash
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```

---

## 📱 测试命令

### 在不同端口运行
```bash
# Windows
set PORT=3001 && npm start

# macOS/Linux
PORT=3001 npm start
```

### 禁用自动打开浏览器
```bash
# Windows
set BROWSER=none && npm start

# macOS/Linux
BROWSER=none npm start
```

---

## 🌐 部署命令

### Vercel 部署
```bash
npm i -g vercel
vercel
```

### Netlify 部署
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### GitHub Pages 部署
```bash
npm install --save-dev gh-pages

# 添加到 package.json:
# "homepage": "https://username.github.io/repo-name"
# "deploy": "gh-pages -d build"

npm run build
npm run deploy
```

---

## 📊 分析命令

### 分析包大小
```bash
# 安装分析工具
npm install --save-dev source-map-explorer

# 添加到 package.json scripts:
# "analyze": "source-map-explorer 'build/static/js/*.js'"

npm run build
npm run analyze
```

### 性能审计
```bash
# 使用 Lighthouse
npm install -g lighthouse
lighthouse http://localhost:3000 --view
```

---

## 🔍 调试命令

### 查看 React 版本
```bash
npm list react react-dom
```

### 检查 Node 和 npm 版本
```bash
node --version
npm --version
```

### 查看环境变量
```bash
# Windows
set

# macOS/Linux
printenv
```

---

## 🚨 紧急修复

### 端口被占用
```bash
# Windows - 查找并结束占用 3000 端口的进程
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### 清理所有并重新开始
```bash
# 完全重置项目
rm -rf node_modules package-lock.json build
npm cache clean --force
npm install
npm start
```

---

## 📝 Git 命令 (如果使用版本控制)

### 初始化仓库
```bash
git init
git add .
git commit -m "Initial commit: NORSEMAN YACHTS website"
```

### 推送到 GitHub
```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

### 创建新分支
```bash
git checkout -b feature/new-feature
```

---

## 💡 快捷键提示

### VS Code 常用快捷键
- `Ctrl + P` - 快速打开文件
- `Ctrl + Shift + P` - 命令面板
- `Alt + Shift + F` - 格式化代码
- `Ctrl + /` - 切换注释
- `Ctrl + D` - 选择下一个相同内容

### Chrome DevTools
- `F12` - 打开开发者工具
- `Ctrl + Shift + M` - 切换设备模拟
- `Ctrl + Shift + C` - 选择元素
- `Ctrl + R` - 刷新页面
- `Ctrl + Shift + R` - 强制刷新

---

## 📚 有用的脚本

### 批量重命名文件扩展名 (js -> jsx)
```bash
# Windows PowerShell
Get-ChildItem *.js | Rename-Item -NewName {$_.Name -replace '.js$','.jsx'}

# macOS/Linux
for file in *.js; do mv "$file" "${file%.js}.jsx"; done
```

---

## 🎯 常见任务速查

| 任务 | 命令 |
|------|------|
| 安装项目 | `npm install` |
| 启动开发 | `npm start` |
| 生产构建 | `npm run build` |
| 清理缓存 | `npm cache clean --force` |
| 更新依赖 | `npm update` |
| 查看版本 | `npm list --depth=0` |

---

**提示**: 将此文件保存为书签，随时查阅！ 📌
