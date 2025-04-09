import{_ as s,o as a,c as n,V as e}from"./chunks/framework.b8955dba.js";const u=JSON.parse('{"title":"react class生命周期与函数组件生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"react/生命周期.md","filePath":"react/生命周期.md"}'),l={name:"react/生命周期.md"},o=e(`<h1 id="react-class生命周期与函数组件生命周期" tabindex="-1">react class生命周期与函数组件生命周期 <a class="header-anchor" href="#react-class生命周期与函数组件生命周期" aria-label="Permalink to &quot;react class生命周期与函数组件生命周期&quot;">​</a></h1><h2 id="react-class-组件生命周期" tabindex="-1">React Class 组件生命周期 <a class="header-anchor" href="#react-class-组件生命周期" aria-label="Permalink to &quot;React Class 组件生命周期&quot;">​</a></h2><h3 id="_1-初始化阶段" tabindex="-1">1. 初始化阶段 <a class="header-anchor" href="#_1-初始化阶段" aria-label="Permalink to &quot;1. 初始化阶段&quot;">​</a></h3><ul><li>constructor(props) 构造函数，用于初始化状态和绑定事件。</li><li>static getDerivedStateFromProps(nextProps, prevState) 静态方法，用于在组件接收到新的 props 时更新 state</li><li>componentWillMount 从 React v16.3 开始被弃用</li><li>render() 返回虚拟DOM结构，但不涉及真实的 DOM 渲染。</li><li>componentDidMount() 在组件挂载完成后调用，可以进行 DOM 操作。</li></ul><h3 id="_2-更新阶段" tabindex="-1">2. 更新阶段 <a class="header-anchor" href="#_2-更新阶段" aria-label="Permalink to &quot;2. 更新阶段&quot;">​</a></h3><ul><li>componentWillReceiveProps(nextProps) 从 React v16.3 开始被弃用</li><li>static getDerivedStateFromProps(nextProps, prevState) 静态方法，用于在组件接收到新的 props 时更新 state</li><li>shouldComponentUpdate(nextProps, nextState) 返回一个布尔值，决定是否需要更新组件。</li><li>componentWillUpdate(nextProps, nextState) 从 React v16.3 开始被弃用</li><li>render() 返回虚拟DOM结构。</li><li>getSnapshotBeforeUpdate(prevProps, prevState) 在最近一次渲染输出（提交到 DOM 节点）之前调用。返回的任何值将作为 componentDidUpdate() 的第三个参数,主要用于在 DOM 更新前捕获一些信息，比如滚动位置、元素尺寸等，以便在 componentDidUpdate 中基于这些信息进行操作。</li><li>componentDidUpdate(prevProps, prevState, snapshot) 在更新完成后调用。</li></ul><h3 id="_3-卸载阶段" tabindex="-1">3. 卸载阶段 <a class="header-anchor" href="#_3-卸载阶段" aria-label="Permalink to &quot;3. 卸载阶段&quot;">​</a></h3><ul><li>componentWillUnmount()</li></ul><h3 id="_4-错误处理" tabindex="-1">4. 错误处理 <a class="header-anchor" href="#_4-错误处理" aria-label="Permalink to &quot;4. 错误处理&quot;">​</a></h3><ul><li>static getDerivedStateFromError(error)</li><li>componentDidCatch(error, info)</li></ul><h2 id="react-函数组件生命周期" tabindex="-1">React 函数组件生命周期 <a class="header-anchor" href="#react-函数组件生命周期" aria-label="Permalink to &quot;React 函数组件生命周期&quot;">​</a></h2><p>React 函数组件本身没有生命周期方法，但是可以使用 <code>useEffect</code> Hook 来模拟类组件的生命周期。</p><h3 id="使用-useeffect-模拟生命周期" tabindex="-1">使用 useEffect 模拟生命周期 <a class="header-anchor" href="#使用-useeffect-模拟生命周期" aria-label="Permalink to &quot;使用 useEffect 模拟生命周期&quot;">​</a></h3><ul><li><strong>挂载阶段</strong>：使用一个空的依赖数组（例如 <code>useEffect(() =&gt; {}, [])</code>），这样效果只会在第一次渲染后执行一次，类似于 <code>componentDidMount()</code>。</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">useEffect</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 这里是类似 componentDidMount 的代码</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#BABED8;"> [])</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 空数组表示只在首次渲染时运行此副作用</span></span></code></pre></div><ul><li><strong>更新阶段</strong>：如果你需要在每次渲染后都执行某些操作，可以省略第二个参数或者提供一个包含所需状态的数组。</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">count</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> setCount</span><span style="color:#89DDFF;">]</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">0</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">useEffect</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 这里是在 count 变化后的逻辑</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>如果要模仿 <code>shouldComponentUpdate</code> 或 <code>getSnapshotBeforeUpdate</code> 和 <code>componentDidUpdate</code>，你可以这样做：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">useEffect</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 这里是在 count 变化后的逻辑</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#BABED8;"> [count])</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 只在这个值改变的时候重新执行这个副作用</span></span></code></pre></div><h3 id="卸载阶段" tabindex="-1">卸载阶段 <a class="header-anchor" href="#卸载阶段" aria-label="Permalink to &quot;卸载阶段&quot;">​</a></h3><p>在函数组件中，你可以通过返回一个函数来模拟 <code>componentWillUnmount</code>。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">useEffect</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 在这里进行清理操作，相当于 componentWillUnmount</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#BABED8;"> [])</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 这个空的依赖数组意味着这个</span></span></code></pre></div>`,22),t=[o];function p(c,r,i,D,d,y){return a(),n("div",null,t)}const h=s(l,[["render",p]]);export{u as __pageData,h as default};
