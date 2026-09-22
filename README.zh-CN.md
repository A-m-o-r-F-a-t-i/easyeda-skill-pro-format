# 嘉立创 EDA 专业版格式 Skill

[English](README.md) | 简体中文

该 Skill 提供嘉立创 EDA 专业版底层原理图、PCB、符号、封装、拼板、规则和元数据记录的类型文档、示例、JSON Schema 与校验器。它用于**生成和验证格式记录**，不负责当前 PCB 的布局布线工程决策。

## 使用方式

AI 代理应先阅读 [SKILL.md](SKILL.md)，再按目标对象查阅 `documents/`、`primitives/`、`schemas/`、`examples/` 和 `types-index.md`。以 JSON Schema 和 `node validate.js` 的机器校验结果作为接受条件，Markdown 示例只作为辅助说明。

```powershell
npm ci
npm run validate -- <待校验文件或目录>
```

对于完整离线 `.eprj3` 工程的组装和打开，请使用 `easyeda-eprj3`；对于已打开 PCB 的布局、布线和工程判断，请使用 `easyeda-pcb-layout-routing` 与 `easyeda-pcb-mcp`。

## 来源与许可证

本仓库基于 EasyEDA 的 MIT 许可项目进行 AgentDock 集成，固定来源提交为 `b2170ff1685561a070689b3c539472d9ab95822c`。原始 Schema、文档、示例和校验器均保留，许可证见 [LICENSE](LICENSE)。

