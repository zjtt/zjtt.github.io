import{_ as s,o as n,c as a,V as l}from"./chunks/framework.b8955dba.js";const F=JSON.parse('{"title":"什么是fiber？","description":"","frontmatter":{},"headers":[],"relativePath":"react/fiber.md","filePath":"react/fiber.md"}'),p={name:"react/fiber.md"},o=l(`<h1 id="什么是fiber" tabindex="-1">什么是fiber？ <a class="header-anchor" href="#什么是fiber" aria-label="Permalink to &quot;什么是fiber？&quot;">​</a></h1><ul><li>Fiber 是react 17.x 引入的一个数据结构，本质是为了使之前的 stack reconciler 变成 fiber reconciler</li><li>本质就是一个数据结构，一个对象</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> FiberNode </span><span style="color:#89DDFF;">={</span></span>
<span class="line"><span style="color:#BABED8;">    tag</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 标识我是什么类型的 Fiber 0 FunctionComponent、1 ClassComponent、 2不确定类型  3根节点（HostRoot）、4 HostPortal、 5宿主组件（Host Component），例如一个 DOM 元素（如 &lt;div&gt;、&lt;span&gt; 等）, 6 HostText</span></span>
<span class="line"><span style="color:#BABED8;">    key</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 唯一标识</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// The resolved function/class/ associated with this fiber.</span></span>
<span class="line"><span style="color:#BABED8;">    type</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 标识我的类型 1. 字符串（标签）2. 类组件3. 函数组件4. 其他</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 存储dom</span></span>
<span class="line"><span style="color:#BABED8;">    stateNode</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 指向对应的 DOM 节点或者组件实例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 构建复杂链表</span></span>
<span class="line"><span style="color:#BABED8;">    return</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 指向父级 Fiber 节点</span></span>
<span class="line"><span style="color:#BABED8;">    child</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 指向子级的第一个 Fiber 节点</span></span>
<span class="line"><span style="color:#BABED8;">    sibling</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 指向兄弟 Fiber 节点</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// hook</span></span>
<span class="line"><span style="color:#BABED8;">    hooks</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 存储函数组件的 hooks</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 判断是否要更新</span></span>
<span class="line"><span style="color:#BABED8;">    pendingProps</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 新的 props</span></span>
<span class="line"><span style="color:#BABED8;">    memoizedProps</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 上一次渲染完成的 props </span></span>
<span class="line"><span style="color:#BABED8;">    memoizedState</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 上一次渲染完成的状态</span></span>
<span class="line"><span style="color:#BABED8;">    updateQueue</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 更新队列，存放更新状态</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 副作用链</span></span>
<span class="line"><span style="color:#BABED8;">    effectTag</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 副作用标识，标识当前 Fiber 节点需要进行的操作，比如更新UPDATE、删除DELETION、替换PLACEMENT等</span></span>
<span class="line"><span style="color:#BABED8;">    nextEffect</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 指向下一个有副作用的 Fiber 节点</span></span>
<span class="line"><span style="color:#BABED8;">    firstEffect</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 指向第一个有副作用的 Fiber 节点</span></span>
<span class="line"><span style="color:#BABED8;">    lastEffect</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 指向最后一个有副作用的 Fiber 节点</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 双缓存节点</span></span>
<span class="line"><span style="color:#BABED8;">    alternate</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 保存上一次的fiber树</span></span>
<span class="line"><span style="color:#BABED8;">    deletions</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 存储被删除的子节点数组</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 其他</span></span>
<span class="line"><span style="color:#BABED8;">    lanes</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 优先级相关，用于存储该 Fiber 所代表的任务的优先级</span></span>
<span class="line"><span style="color:#BABED8;">    childLanes</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 子节点的优先级</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,3),e=[o];function t(c,r,i,y,D,B){return n(),a("div",null,e)}const f=s(p,[["render",t]]);export{F as __pageData,f as default};
