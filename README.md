# 宋凯 · 个人网站

深色极客风的响应式个人网站，使用原生 HTML、CSS 和 JavaScript，无需安装依赖。

## GitHub Pages

网站地址：https://caliwon2077.github.io/

仓库地址：https://github.com/caliwon2077/caliwon2077.github.io

发布源为 `main` 分支根目录，`.nojekyll` 用于直接发布静态文件。

## 打开

直接双击 `index.html` 即可浏览。也可以在此文件夹执行：

```sh
python3 -m http.server 8000
```

然后访问 http://localhost:8000 。停止服务按 `Ctrl+C`。

## 内容维护

- `index.html`：姓名、简介、邮箱、项目卡片和页面结构。
- `styles.css`：配色、排版和移动端布局；主题色位于文件开头的 CSS 变量中。
- `script.js`：项目详情、示例随笔、筛选、详情弹窗和邮箱复制。
- `assets/favicon.svg`：网站图标。

姓名、职业和邮箱来自本人提供的信息。项目和随笔均明确标注为概念／示例，替换为真实内容后再移除对应标记。没有虚构工作经历、客户、项目数据或社交链接。

邮箱链接使用系统默认邮件应用。复制按钮在浏览器允许访问剪贴板时生效，否则提供手动复制提示。网站不使用外部字体、统计、第三方脚本或后端服务；无需联网也能浏览。

## 更新网站

修改并检查页面后，在此文件夹提交和推送：

```sh
git add index.html styles.css script.js assets README.md .gitignore .nojekyll
git commit -m "Update personal website"
git push origin main
```

推送后 GitHub Pages 自动重新发布，可在仓库的 Actions 和 Settings → Pages 中查看结果。
