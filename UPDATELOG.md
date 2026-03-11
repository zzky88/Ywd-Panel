# 更新说明

> 当前仓库已收口为 `Ywd-Panel` 的 MVP 预览线。若你是从旧底座迁移而来，请在升级前备份重要数据。

## v0.1.0-preview

- 基于现有面板底座收口为 `Ywd-Panel` 首版 MVP
- 默认入口聚焦到分组管理（`ItemGroupManage`）
- 控制台保留：`ItemGroupManage` / `Style` / `UserInfo` / `About`
- 对外默认部署口径统一为：`3002`、`./data:/data`、`YWD_DATA_DIR=/data`
- 配置默认值调整为：`db_name=ywd_panel`、`prefix=ywd_panel:`
- 首页卡片新增首版服务状态点：`online / offline / unknown`
- 导入导出默认切换到 `Ywd-Panel-Config` 与 `.ywd-panel.json`
- 保留旧导入格式兼容：`Sun-Panel-Config` / `.sun-panel.json`
- 新增交付说明文件：`MVP_STATUS.md`、`GITHUB_HANDOFF.md`、`TEST_PLAN.md`
- GitHub 仓库已切换为：`https://github.com/zzky88/Ywd-Panel`

## 旧版本说明（历史参考）

以下内容来自旧底座项目阶段，仅保留作历史参考，不代表当前 `Ywd-Panel` MVP 的实际交付边界。

### v1.1.0
> 支持上个版本直接升级无需特殊处理

- [新增] 增加分组，拖拽排序
- [新增] 搜索框
- [新增] 应用图标支持URL外链
- [新增] 图标支持纯透明
- [新增] 壁纸背景增加遮罩设置
- [新增] 右键菜单新增打开局域网或者互联网地址
- [优化] 网址输入框增加https/http提示
- [优化] 小图标模式，鼠标悬浮显示详情，支持隐藏图标标题
- [优化] 详情图标样式，支持隐藏描述信息
- [优化] 添加用户密码时限制字符
- [其他] 历史上曾新增 arm 版本 Docker 支持
- [其他] 历史上曾提供多平台二进制发布

### v1.0.0
- 首个版本
