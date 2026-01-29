# NORSEMAN YACHTS 官网

**源自北欧的探险传奇** - 一个充满探险精神的高端游艇品牌官网

## 🚢 项目简介

NORSEMAN YACHTS 是一个现代化的响应式单页应用，展示了北欧游艇品牌的探险精神与极致工艺。网站采用 React 18+ 构建，融合了北欧极简设计美学与现代交互体验。

## ✨ 特性

- **现代化技术栈**: React 18+ / React Router v6 / Tailwind CSS
- **流畅动画**: 使用 Framer Motion 实现丝滑的页面过渡和滚动动画
- **响应式设计**: 完美适配桌面端、平板和移动设备
- **北欧美学**: 深海军蓝 + 铂金色的配色方案
- **优雅字体**: Playfair Display (标题) + Inter (正文)
- **完整页面**: 首页、船队展示、品牌故事、全球活动、合作网络、联系我们

## 📦 安装依赖

### 前置要求
- Node.js 14+ 
- npm 或 yarn

### 安装步骤

```bash
# 克隆项目
git clone <repository-url>
cd NorsemanYacht

# 安装依赖
npm install
# 或
yarn install
```

## 🚀 运行项目

```bash
# 开发模式
npm start
# 或
yarn start

# 项目将在 http://localhost:3000 启动
```

## 🏗️ 构建生产版本

```bash
# 构建
npm run build
# 或
yarn build

# 构建产物将在 build/ 目录下
```

## 📁 项目结构

```
NorsemanYacht/
├── public/
│   ├── index.html          # HTML 模板
│   └── favicon.ico         # 网站图标
├── src/
│   ├── components/         # 可复用组件
│   │   ├── Navbar.jsx      # 导航栏
│   │   ├── Footer.jsx      # 页脚
│   │   ├── ScrollToTop.jsx # 路由切换滚动到顶部
│   │   └── Timeline.jsx    # 时间线组件
│   ├── pages/              # 页面组件
│   │   ├── Home.jsx        # 首页
│   │   ├── Yachts.jsx      # 船队展示
│   │   ├── Story.jsx       # 品牌故事
│   │   ├── Events.jsx      # 全球活动
│   │   ├── Network.jsx     # 合作网络
│   │   └── Contact.jsx     # 联系我们
│   ├── App.js              # 根组件
│   ├── index.js            # 入口文件
│   └── index.css           # 全局样式
├── package.json            # 项目配置
├── tailwind.config.js      # Tailwind 配置
├── postcss.config.js       # PostCSS 配置
└── README.md               # 项目说明
```

## 🎨 设计系统

### 颜色方案
```css
/* 主色调 */
--slate-900: #0f172a      /* 深海军蓝 */
--amber-100: #fef3c7      /* 铂金色 */
--white: #ffffff          /* 纯白 */

/* 辅助色 */
--slate-800: #1e293b      /* 深灰 */
--slate-600: #64748b      /* 中灰 */
```

### 字体系统
- **标题**: Playfair Display (衬线字体)
- **正文**: Inter (无衬线字体)

## 📄 页面说明

### 1. 首页 (Home)
- 全屏英雄区域，展示品牌核心理念
- 三大品牌价值：探险精神、极致工艺、纯粹设计
- 特色船型预览

### 2. 船队展示 (Yachts)
- 三大系列游艇展示
- 每艘游艇的详细规格和特点
- 悬停交互效果

### 3. 品牌故事 (Story)
- 设计哲学阐述
- 品牌发展时间线
- 工艺传承展示

### 4. 全球活动 (Events)
- 即将举行的游艇展和活动
- 过往活动记录
- 活动订阅功能

### 5. 合作网络 (Network)
- 全球办公室分布
- 欧洲、美洲、亚太三大区域
- 合作伙伴标准

### 6. 联系我们 (Contact)
- 完整的联系表单（使用 react-hook-form）
- 表单验证
- 全球办公室联系方式
- 服务承诺展示

## 🛠️ 技术栈详情

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18.2+ | 前端框架 |
| React Router | 6.20+ | 路由管理 |
| Tailwind CSS | 3.3+ | 样式框架 |
| Framer Motion | 10.16+ | 动画库 |
| React Hook Form | 7.49+ | 表单处理 |
| React Icons | 4.12+ | 图标库 |
| React Feather | 2.0+ | Feather 图标 |

## 🎯 核心功能

### 导航系统
- 固定导航栏，滚动时背景变化
- 活动路由高亮
- 移动端响应式菜单

### 动画效果
- 页面切换动画
- 滚动触发动画 (scroll-triggered)
- 悬停交互效果
- 滚动指示器

### 表单功能
- 实时验证
- 错误提示
- 必填字段标识
- 提交处理

## 📱 响应式设计

- **桌面端**: 1280px+ (完整布局)
- **平板**: 768px - 1279px (优化布局)
- **移动端**: < 768px (单列布局)

## 🌐 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 🔧 自定义配置

### 修改颜色
编辑 `tailwind.config.js`:
```javascript
colors: {
  'norseman-blue': '#0f172a',
  'norseman-gold': '#fef3c7',
}
```

### 修改字体
编辑 `public/index.html` 中的 Google Fonts 链接

### 添加新页面
1. 在 `src/pages/` 创建新组件
2. 在 `src/App.js` 添加路由
3. 在 `src/components/Navbar.jsx` 添加导航链接

## 📝 待办事项

- [ ] 添加图片懒加载
- [ ] 集成后端 API
- [ ] 添加多语言支持 (i18n)
- [ ] SEO 优化
- [ ] 添加 Google Analytics
- [ ] 性能优化（代码分割）
- [ ] 添加单元测试

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目仅供学习和参考使用。

## 📞 联系方式

- 项目演示: [待部署]
- 问题反馈: [GitHub Issues]

---

**NORSEMAN YACHTS** - 源自北欧的探险传奇 ⛵
