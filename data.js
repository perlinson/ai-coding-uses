// AI Coding用法数据
// 收集Twitter上讨论的AI Coding技巧和用法

const aiCodingUses = [
  {
    id: "cursor-tab-autocomplete",
    title: "Cursor Tab自动补全代码",
    description: "使用Cursor的Tab键智能补全，比传统IDE更懂你的代码意图。",
    author: "AI Developer",
    twitterHandle: "@aideveloper",
    twitterLink: "https://twitter.com/aideveloper/status/123456789",
    likes: 2340,
    retweets: 456,
    tags: ["Cursor", "自动补全", "效率"],
    category: "代码补全",
    date: "2025-01-15"
  },
  {
    id: "claude-code-debug",
    title: "Claude Code快速Debug技巧",
    description: "用Claude Code分析报错日志，5分钟定位问题。配合context提示效果更好。",
    author: "Tech Lead",
    twitterHandle: "@techlead",
    twitterLink: "https://twitter.com/techlead/status/123456790",
    likes: 3456,
    retweets: 789,
    tags: ["Claude", "Debug", "问题排查"],
    category: "调试技巧",
    date: "2025-01-18"
  },
  {
    id: "github-copilot-chat",
    title: "GitHub Copilot Chat编程对话",
    description: "用自然语言描述需求，Copilot直接生成代码。适合快速原型开发。",
    author: "Full Stack Dev",
    twitterHandle: "@fullstackdev",
    twitterLink: "https://twitter.com/fullstackdev/status/123456791",
    likes: 1890,
    retweets: 234,
    tags: ["GitHub Copilot", "对话式编程", "原型"],
    category: "代码生成",
    date: "2025-01-20"
  },
  {
    id: "cursor-rule-file",
    title: "Cursor .cursorrules自定义规则",
    description: "通过.cursorrules文件定制AI行为，让它更懂你的代码风格和项目结构。",
    author: "Cursor Expert",
    twitterHandle: "@cursorxpert",
    twitterLink: "https://twitter.com/cursorxpert/status/123456792",
    likes: 4567,
    retweets: 890,
    tags: ["Cursor", "规则定制", "个性化"],
    category: "工具配置",
    date: "2025-01-22"
  },
  {
    id: "ai-comment-generator",
    title: "AI自动生成代码注释",
    description: "让AI为复杂函数自动生成清晰的注释和文档，提高代码可读性。",
    author: "Code Quality",
    twitterHandle: "@codequality",
    twitterLink: "https://twitter.com/codequality/status/123456793",
    likes: 1234,
    retweets: 167,
    tags: ["注释", "文档", "代码质量"],
    category: "代码质量",
    date: "2025-01-25"
  },
  {
    id: "multi-file-refactor",
    title: "AI辅助多文件重构",
    description: "用AI同时修改多个相关文件的重构，保持代码一致性。",
    author: "Refactor Master",
    twitterHandle: "@refactormaster",
    twitterLink: "https://twitter.com/refactormaster/status/123456794",
    likes: 2345,
    retweets: 345,
    tags: ["重构", "多文件", "代码优化"],
    category: "代码重构",
    date: "2025-01-28"
  },
  {
    id: "test-generation",
    title: "AI快速生成测试用例",
    description: "让AI根据函数签名自动生成单元测试，提高测试覆盖率。",
    author: "QA Engineer",
    twitterHandle: "@qaengineer",
    twitterLink: "https://twitter.com/qaengineer/status/123456795",
    likes: 3456,
    retweets: 567,
    tags: ["测试", "自动化", "单元测试"],
    category: "测试辅助",
    date: "2025-02-01"
  },
  {
    id: "legacy-code-explain",
    title: "AI解释遗留代码",
    description: "把老旧代码扔给AI，让它帮你理解业务逻辑和实现细节。",
    author: "Legacy Coder",
    twitterHandle: "@legacycoder",
    twitterLink: "https://twitter.com/legacycoder/status/123456796",
    likes: 4567,
    retweets: 678,
    tags: ["遗留代码", "代码理解", "文档"],
    category: "代码理解",
    date: "2025-02-05"
  },
  {
    id: "api-integration",
    title: "AI帮你对接第三方API",
    description: "描述API需求，AI自动生成调用代码和处理逻辑。",
    author: "Backend Dev",
    twitterHandle: "@backenddev",
    twitterLink: "https://twitter.com/backenddev/status/123456797",
    likes: 2345,
    retweets: 234,
    tags: ["API", "集成", "后端"],
    category: "代码生成",
    date: "2025-02-08"
  },
  {
    id: "sql-query-generator",
    title: "自然语言转SQL查询",
    description: "用中文描述你要的数据，AI直接生成SQL语句。",
    author: "Data Engineer",
    twitterHandle: "@dataengineer",
    twitterLink: "https://twitter.com/dataengineer/status/123456798",
    likes: 5678,
    retweets: 890,
    tags: ["SQL", "数据分析", "自然语言"],
    category: "代码生成",
    date: "2025-02-10"
  },
  {
    id: "css-layout-generator",
    title: "AI生成CSS布局",
    description: "描述想要的布局效果，AI生成响应式CSS代码。",
    author: "Frontend Dev",
    twitterHandle: "@frontenddev",
    twitterLink: "https://twitter.com/frontenddev/status/123456799",
    likes: 3456,
    retweets: 456,
    tags: ["CSS", "前端", "布局"],
    category: "前端开发",
    date: "2025-02-12"
  },
  {
    id: "regex-generator",
    title: "AI生成正则表达式",
    description: "描述匹配规则，AI生成准确的正则表达式，比自己写省时省力。",
    author: "Regex Master",
    twitterHandle: "@regexmaster",
    twitterLink: "https://twitter.com/regexmaster/status/123456800",
    likes: 2345,
    retweets: 234,
    tags: ["正则", "字符串处理", "自动化"],
    category: "代码生成",
    date: "2025-02-15"
  },
  {
    id: "migration-script",
    title: "AI写数据库迁移脚本",
    description: "描述表结构变更，AI自动生成迁移脚本，减少手动操作错误。",
    author: "DB Admin",
    twitterHandle: "@dbadmin",
    twitterLink: "https://twitter.com/dbadmin/status/123456801",
    likes: 1890,
    retweets: 167,
    tags: ["数据库", "迁移", "脚本"],
    category: "数据库",
    date: "2025-02-18"
  },
  {
    id: "cli-tool-generator",
    title: "AI生成CLI命令行工具",
    description: "描述功能需求，AI自动生成带参数解析的CLI工具。",
    author: "Tool Maker",
    twitterHandle: "@toolmaker",
    twitterLink: "https://twitter.com/toolmaker/status/123456802",
    likes: 2345,
    retweets: 234,
    tags: ["CLI", "命令行", "工具"],
    category: "工具开发",
    date: "2025-02-20"
  },
  {
    id: "security-audit",
    title: "AI代码安全审计",
    description: "用AI扫描代码中的安全漏洞，比人工检查更全面。",
    author: "Security Expert",
    twitterHandle: "@securityexpert",
    twitterLink: "https://twitter.com/securityexpert/status/123456803",
    likes: 5678,
    retweets: 890,
    tags: ["安全", "审计", "漏洞"],
    category: "安全检测",
    date: "2025-02-22"
  },
  {
    id: "performance-optimize",
    title: "AI优化代码性能",
    description: "让AI分析代码性能瓶颈，提供优化建议甚至直接改写。",
    author: "Performance Guru",
    twitterHandle: "@perfguru",
    twitterLink: "https://twitter.com/perfguru/status/123456804",
    likes: 3456,
    retweets: 456,
    tags: ["性能", "优化", "代码质量"],
    category: "性能优化",
    date: "2025-02-25"
  },
  {
    id: "type-con: "AI做语言version",
    title/框架迁移",
    description: "把Python代码转Go，React组件转Vue，AI帮你搞定。",
    author: "Polyglot Dev",
    twitterHandle: "@polyglotdev",
    twitterLink: "https://twitter.com/polyglotdev/status/123456805",
    likes: 4567,
    retweets: 567,
    tags: ["迁移", "多语言", "框架转换"],
    category: "代码重构",
    date: "2025-02-28"
  },
  {
    id: "code-review",
    title: "AI辅助代码Review",
    description: "让AI先过一遍代码，给出初步审查意见，提高Review效率。",
    author: "Tech Lead",
    twitterHandle: "@techlead2",
    twitterLink: "https://twitter.com/techlead2/status/123456806",
    likes: 2345,
    retweets: 234,
    tags: ["Code Review", "代码审查", "团队协作"],
    category: "代码质量",
    date: "2025-03-01"
  },
  {
    id: "documentation",
    title: "AI生成API文档",
    description: "从代码注释自动生成完整的API文档，保持文档同步更新。",
    author: "Doc Master",
    twitterHandle: "@docmaster",
    twitterLink: "https://twitter.com/docmaster/status/123456807",
    likes: 1890,
    retweets: 167,
    tags: ["文档", "API", "自动化"],
    category: "文档生成",
    date: "2025-03-05"
  },
  {
    id: "error-fix-suggestion",
    title: "AI修复编译错误",
    description: "遇到编译错误让AI看看，它经常能给出你没想到的解决方案。",
    author: "Bug Hunter",
    twitterHandle: "@bughunter",
    twitterLink: "https://twitter.com/bughunter/status/123456808",
    likes: 5678,
    retweets: 678,
    tags: ["错误修复", "编译", "问题解决"],
    category: "调试技巧",
    date: "2025-03-08"
  }
];

// 按热度排序
const sortedByLikes = [...aiCodingUses].sort((a, b) => b.likes - a.likes);

// 按时间排序
const sortedByDate = [...aiCodingUses].sort((a, b) => new Date(b.date) - new Date(a.date));

// 按分类分组
const groupedByCategory = aiCodingUses.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category].push(item);
  return acc;
}, {});

// 按标签分组
const groupedByTag = aiCodingUses.reduce((acc, item) => {
  item.tags.forEach(tag => {
    if (!acc[tag]) {
      acc[tag] = [];
    }
    acc[tag].push(item);
  });
  return acc;
}, {});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    aiCodingUses, 
    sortedByLikes, 
    sortedByDate,
    groupedByCategory,
    groupedByTag 
  };
}
