# SEO 上线与收录配置 阶段判断规则

## 本阶段目标

上线前后完成 SEO/GEO/AEO 复核：页面矩阵、indexability、schema、GSC、sitemap、AI 可引用结构。

## 必须保留的内部流程精华（已脱敏）

### 1. 页面矩阵对账
每个 indexable 页面有主词、H1、title、description、canonical、内链、schema、唯一价值。

### 2. Indexability
noindex 页面不进 sitemap；placeholder/prototype/pending data 不得索引。

### 3. SERP 竞争力
对照 Top 3：首屏价值、工具/数据/答案、FAQ、short answer、AI 可引用块。

### 4. 技术 SEO
robots、sitemap、canonical、HTTPS 301、status code、OG、schema、性能基础检查。

### 5. GSC/提交
验证站点、提交 sitemap、记录首次抓取风险；无权限就输出待办而非假完成。

### 6. GEO/AEO
补清晰定义、步骤、数据表、Q&A、引用友好段落。

### 7. 交接
给 QA/运营：可索引清单、阻塞页、提交状态、首周监控项。


## 质量门槛

- [ ] sitemap 只含可索引真实页面
- [ ] 核心页有唯一 H1/title/meta/canonical
- [ ] GSC 状态真实
- [ ] 生产 HTTP → HTTPS 301 已验证
- [ ] 没有薄页污染初始抓取

## 常见失败模式

- 正文写 noindex 但 HTML 没设置
- login/admin/app 进 sitemap
- 只生成 sitemap 不提交 GSC
- 上线后才发现 canonical 指错域名

## 脱敏原则

- 不写服务器路径、真实 token、私有账号、内部群聊或生产数据库细节。
- 保留判断标准、交接格式、质量闸门和复盘口径。
- 对学员可执行：先自然语言 Prompt，脚本只是可选。

## 2026-06 统一判分补充

本阶段无论具体产物是什么，都必须满足以下新版做站实践：

- 有明确输入来源和证据；没有证据的结论标 `待确认` 或 `missing_evidence`。
- 有下游可消费合同：路由、文案、数据、设计、接口、验收项不能只写自然语言愿望。
- 有 BLOCKED / NEEDS_REPAIR / DONE 的状态判断，以及解锁动作。
- 涉及生产、付费、公开发布、外部账号、预算、真实用户数据时，必须保留人工确认门。
- 输出必须能被总控放回 Kanban / project-control，供下一阶段继续。
