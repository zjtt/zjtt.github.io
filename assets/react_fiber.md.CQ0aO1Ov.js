import{_ as i,o as a,c as n,ag as l}from"./chunks/framework.C9sp7nFj.js";const c=JSON.parse('{"title":"什么是fiber？","description":"","frontmatter":{},"headers":[],"relativePath":"react/fiber.md","filePath":"react/fiber.md"}'),p={name:"react/fiber.md"};function e(t,s,h,k,r,E){return a(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="什么是fiber" tabindex="-1">什么是fiber？ <a class="header-anchor" href="#什么是fiber" aria-label="Permalink to &quot;什么是fiber？&quot;">​</a></h1><ul><li>Fiber 是react 17.x 引入的一个数据结构，本质是为了使之前的 stack reconciler 变成 fiber reconciler</li><li>本质就是一个数据结构，一个对象</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> FiberNode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tag, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 标识我是什么类型的 Fiber 0 FunctionComponent、1 ClassComponent、 2不确定类型  3根节点（HostRoot）、4 HostPortal、 5宿主组件（Host Component），例如一个 DOM 元素（如 &lt;div&gt;、&lt;span&gt; 等）, 6 HostText</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    key, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 唯一标识</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // The resolved function/class/ associated with this fiber.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 标识我的类型 1. 字符串（标签）2. 类组件3. 函数组件4. 其他</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 存储dom</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stateNode, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 指向对应的 DOM 节点或者组件实例</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 构建复杂链表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    return, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 指向父级 Fiber 节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    child, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 指向子级的第一个 Fiber 节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sibling, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 指向兄弟 Fiber 节点</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // hook</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hooks, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 存储函数组件的 hooks</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 判断是否要更新</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pendingProps, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 新的 props</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    memoizedProps, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 上一次渲染完成的 props </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    memoizedState, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 上一次渲染完成的状态</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    updateQueue, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 更新队列，存放更新状态</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 副作用链</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    effectTag, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 副作用标识，标识当前 Fiber 节点需要进行的操作，比如更新UPDATE、删除DELETION、替换PLACEMENT等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nextEffect, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 指向下一个有副作用的 Fiber 节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    firstEffect, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 指向第一个有副作用的 Fiber 节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lastEffect, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 指向最后一个有副作用的 Fiber 节点</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 双缓存节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    alternate, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 保存上一次的fiber树</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    deletions, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 存储被删除的子节点数组</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 其他</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lanes, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 优先级相关，用于存储该 Fiber 所代表的任务的优先级</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    childLanes, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 子节点的优先级</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,3)])])}const g=i(p,[["render",e]]);export{c as __pageData,g as default};
