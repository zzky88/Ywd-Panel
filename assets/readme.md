## 将静态资源编译成 Go 文件并打包进可执行文件

> 这是一份保留在仓库内的历史构建说明，供后续需要将前端静态资源内嵌进二进制时参考。
> 当前 `Ywd-Panel` MVP 仍以现有项目结构继续推进，此文档仅作可选技术参考，并不代表当前默认交付路径。

### 1. 安装依赖
**注意：`...` 需要保留**

```bash
go get github.com/go-bindata/go-bindata/...
go get github.com/elazarl/go-bindata-assetfs/...

# Go >= 1.17 可改用 install
 go install -a -v github.com/go-bindata/go-bindata/...@latest
 go install -a -v github.com/elazarl/go-bindata-assetfs/...@latest
```

### 2. 将 `GOPATH/bin` 加入环境变量

按你自己的系统方式配置即可。

### 3. 压缩静态文件到 asset 目录

以下命令在 Windows 的 `powershell` 下可能报错，可改用 `cmd` 执行。

```bash
# 开发环境：修改静态文件后更容易及时生效
go-bindata-assetfs -debug -o=assets/bindata.go -pkg=assets static/... view/...
go-bindata-assetfs -debug -o=assets/bindata.go -pkg=assets assets/...

# 正式环境：修改静态文件后需要重新编译
go-bindata-assetfs -o=assets/bindata.go -pkg=assets assets/...
```

> 正式环境请去掉 `-debug`。

### 参考

- Go 语言打包静态文件以及与 Gin 一起使用 Go-bindata
- go-bindata 的安装与使用

如果未来 `Ywd-Panel` 要恢复或重做“单二进制内嵌前端资源”这条交付链，可再基于当前仓库结构重新核对一遍命令与路径。
