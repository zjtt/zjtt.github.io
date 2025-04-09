import{_ as s,o as a,c as e,V as l}from"./chunks/framework.b8955dba.js";const d=JSON.parse('{"title":"从 React 17 开始在 JSX 文件中不需要手动import React","description":"","frontmatter":{},"headers":[],"relativePath":"react/other/1.md","filePath":"react/other/1.md"}'),t={name:"react/other/1.md"},n=l(`<h1 id="从-react-17-开始在-jsx-文件中不需要手动import-react" tabindex="-1">从 React 17 开始在 JSX 文件中不需要手动import React <a class="header-anchor" href="#从-react-17-开始在-jsx-文件中不需要手动import-react" aria-label="Permalink to &quot;从 React 17 开始在 JSX 文件中不需要手动import React&quot;">​</a></h1><h2 id="_1-历史原因-早期版本需要手动导入" tabindex="-1">1. 历史原因（早期版本需要手动导入） <a class="header-anchor" href="#_1-历史原因-早期版本需要手动导入" aria-label="Permalink to &quot;1. 历史原因（早期版本需要手动导入）&quot;">​</a></h2><p>在 React 早期，JSX 会被 Babel 等工具转译为纯 JavaScript 代码。例如，下面的 JSX 代码</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> element </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Hello, React!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><p>会被转译为类似这样的 JavaScript 代码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> element </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> React</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, React!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>这里React.createElement用于创建 React 元素，所以在早期必须手动导入 React，才能在代码中使用React对象调用createElement方法。</p><h2 id="_2-自动导入-react-的原理" tabindex="-1">2. 自动导入 React 的原理 <a class="header-anchor" href="#_2-自动导入-react-的原理" aria-label="Permalink to &quot;2. 自动导入 React 的原理&quot;">​</a></h2><p>从 React 17 开始，引入了新的 JSX 转换机制。Babel 不再将 JSX 转换为React.createElement，而是使用了新的入口函数jsx和jsxDEV（用于开发环境）。这些函数位于react/jsx - runtime和react/jsx - dev - runtime模块中。</p><p>例如，上述同样的 JSX 代码，在新机制下转译后的 JavaScript 代码大致如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">jsx</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">_jsx</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react/jsx - runtime</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> element </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">_jsx</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, React!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>这里jsx函数负责创建 React 元素。由于 Babel 自动导入了react/jsx - runtime模块中的jsx函数，开发者无需再手动导入React。</p><h2 id="_3-对开发者的影响" tabindex="-1">3. 对开发者的影响 <a class="header-anchor" href="#_3-对开发者的影响" aria-label="Permalink to &quot;3. 对开发者的影响&quot;">​</a></h2><ul><li>简化代码：开发者无需再在每个包含 JSX 的文件顶部添加import React from&#39;react&#39;;语句，使代码更加简洁，尤其是在一个项目中有大量的 JSX 文件时，这种简化效果更为明显。</li><li>兼容性注意：如果项目仍在使用旧版本的 React，或者使用的工具链不支持新的 JSX 转换机制，依然需要手动导入 React。例如，在 React 16 及更早版本中，手动导入 React 是必不可少的。</li></ul>`,14),o=[n];function p(c,r,D,i,y,F){return a(),e("div",null,o)}const h=s(t,[["render",p]]);export{d as __pageData,h as default};
