import{_ as a,o as e,c as l,V as s}from"./chunks/framework.b8955dba.js";const V=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue/init/init.md","filePath":"vue/init/init.md"}'),o={name:"vue/init/init.md"},n=s(`<h2 id="初始化流程" tabindex="-1">初始化流程 <a class="header-anchor" href="#初始化流程" aria-label="Permalink to &quot;初始化流程&quot;">​</a></h2><p>Vue.js 是一个渐进式的 JavaScript 框架，用于构建用户界面。它的初始化到渲染的流程涉及多个步骤，包括实例化、数据观察、编译模板、创建虚拟 DOM (Virtual DOM)、以及最终的 DOM 渲染。下面是一个详细的流程描述：</p><h3 id="_1-vue-实例初始化" tabindex="-1">1. Vue 实例初始化 <a class="header-anchor" href="#_1-vue-实例初始化" aria-label="Permalink to &quot;1. Vue 实例初始化&quot;">​</a></h3><p>当你创建一个 Vue 实例时，Vue 的初始化过程开始：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello Vue!</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;div&gt;{{ message }}&lt;/div&gt;</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="_2-初始化参数" tabindex="-1">2. 初始化参数 <a class="header-anchor" href="#_2-初始化参数" aria-label="Permalink to &quot;2. 初始化参数&quot;">​</a></h3><p>Vue 实例初始化时，Vue 会合并传入的选项与默认选项。这个过程包括以下步骤：</p><ul><li>合并选项：Vue 会将传入的选项与全局配置的默认选项进行合并。</li><li>初始化生命周期：Vue 会初始化组件的生命周期状态。</li><li>初始化事件：Vue 会初始化组件的事件系统，使组件能够监听和触发事件。</li><li>初始化渲染函数：Vue 会初始化渲染函数相关的属性和方法。</li><li>初始化依赖注入：如果有依赖注入选项，Vue 会处理这些选项。</li></ul><h3 id="_3-数据观察" tabindex="-1">3. 数据观察 <a class="header-anchor" href="#_3-数据观察" aria-label="Permalink to &quot;3. 数据观察&quot;">​</a></h3><p>Vue 使用响应式系统来跟踪数据变化。初始化数据观察包括以下步骤：</p><ul><li>调用<code>beforeCreate</code></li><li>初始化 data：Vue 会将传入的 data 选项转换为响应式的数据对象。每个属性都会被转换为 getter 和 setter，以便 Vue 能够追踪这些属性的变化。</li><li>调用<code>created</code></li><li>初始化 props：如果组件有 props，Vue 会初始化这些 props，并将它们设置为响应式的。</li><li>初始化 computed：如果有计算属性，Vue 会初始化这些计算属性，并将它们设置为响应式的。</li><li>初始化 methods：如果有方法，Vue 会将这些方法绑定到 Vue 实例上。</li><li>初始化 watch：如果有 watch 选项，Vue 会为每个 watch 表达式创建一个观察者。</li></ul><h3 id="_4-编译模板" tabindex="-1">4. 编译模板 <a class="header-anchor" href="#_4-编译模板" aria-label="Permalink to &quot;4. 编译模板&quot;">​</a></h3><p>Vue 使用模板编译器将模板转换为渲染函数。编译模板包括以下步骤：</p><ul><li>解析模板：Vue 会解析模板字符串，将其转换为抽象语法树 (AST)。</li><li>优化 AST：Vue 会优化 AST，标记静态节点，以提高后续的渲染性能。</li><li>生成渲染函数：Vue 会将优化后的 AST 转换为渲染函数。</li></ul><h3 id="_5-创建虚拟-dom" tabindex="-1">5. 创建虚拟 DOM <a class="header-anchor" href="#_5-创建虚拟-dom" aria-label="Permalink to &quot;5. 创建虚拟 DOM&quot;">​</a></h3><p>渲染函数会返回一个虚拟 DOM 树。虚拟 DOM 是一个轻量级的 JavaScript 对象，描述了真实 DOM 的结构。虚拟 DOM 的创建包括以下步骤：</p><ul><li>调用渲染函数：Vue 会调用渲染函数，生成虚拟 DOM 树。 创建虚拟节点：渲染函数会返回虚拟节点 (VNode)，这些节点描述了真实 DOM 树的结构。</li></ul><h3 id="_6-初次渲染" tabindex="-1">6. 初次渲染 <a class="header-anchor" href="#_6-初次渲染" aria-label="Permalink to &quot;6. 初次渲染&quot;">​</a></h3><p>在初次渲染时，Vue 会将虚拟 DOM 转换为真实 DOM，并插入到页面中。初次渲染包括以下步骤：</p><ul><li>调用<code>beforeMount</code> 创建真实 DOM：Vue 会根据虚拟 DOM 树创建真实 DOM 元素。 插入 DOM：Vue 会将创建的真实 DOM 元素插入到页面中，通常是挂载到 el 选项指定的元素上。</li><li>调用<code>mounted</code></li></ul><h3 id="_7-响应式更新" tabindex="-1">7. 响应式更新 <a class="header-anchor" href="#_7-响应式更新" aria-label="Permalink to &quot;7. 响应式更新&quot;">​</a></h3><p>当响应式数据发生变化时，Vue 会触发更新流程。更新流程包括以下步骤：</p><p>检测变化：当响应式数据的 getter 被调用时，Vue 会将依赖关系记录下来。当 setter 被调用时，Vue 会检测到数据变化。 触发更新：Vue 会触发依赖于变化数据的组件重新渲染。</p><ul><li>调用<code>beforeUpdate</code> 生成新虚拟 DOM：Vue 会调用渲染函数，生成新的虚拟 DOM 树。 比较虚拟 DOM：Vue 会比较新旧虚拟 DOM 树，找出差异。 更新真实 DOM：Vue 会根据虚拟 DOM 树的差异，更新真实 DOM。</li><li>调用<code>updated</code></li></ul><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>Vue 的初始化到渲染流程包括实例化 Vue 实例、初始化参数、数据观察、编译模板、创建虚拟 DOM、初次渲染以及响应式更新。这个流程确保了 Vue 能够高效地响应数据变化，并更新用户界面。</p>`,26),t=[n];function p(i,r,c,u,D,d){return e(),l("div",null,t)}const _=a(o,[["render",p]]);export{V as __pageData,_ as default};
