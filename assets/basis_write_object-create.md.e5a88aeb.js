import{_ as s,o as a,c as n,V as o}from"./chunks/framework.b8955dba.js";const A=JSON.parse('{"title":"Object.create","description":"","frontmatter":{},"headers":[],"relativePath":"basis/write/object-create.md","filePath":"basis/write/object-create.md"}'),p={name:"basis/write/object-create.md"},l=o(`<h1 id="object-create" tabindex="-1">Object.create <a class="header-anchor" href="#object-create" aria-label="Permalink to &quot;Object.create&quot;">​</a></h1><p>Object.create方法用于创建一个新对象，新对象的原型为指定的对象。其语法为Object.create(proto[, propertiesObject])，其中proto是新对象的原型对象，propertiesObject是可选的，用于定义新对象的属性描述符</p><h2 id="内部原理剖析" tabindex="-1">内部原理剖析 <a class="header-anchor" href="#内部原理剖析" aria-label="Permalink to &quot;内部原理剖析&quot;">​</a></h2><h3 id="步骤一-创建新对象" tabindex="-1">步骤一：创建新对象 <a class="header-anchor" href="#步骤一-创建新对象" aria-label="Permalink to &quot;步骤一：创建新对象&quot;">​</a></h3><p>首先，Object.create会在内存中创建一个新的空对象。这类似于使用new关键字调用构造函数时创建新实例的过程。在 JavaScript 引擎内部，会为这个新对象分配内存空间，用于存储对象的属性和相关元数据。</p><h3 id="步骤二-设置原型" tabindex="-1">步骤二：设置原型 <a class="header-anchor" href="#步骤二-设置原型" aria-label="Permalink to &quot;步骤二：设置原型&quot;">​</a></h3><p>关键的一步是将新创建对象的内部[[Prototype]]属性设置为传入的proto参数所指定的对象。这个[[Prototype]]属性在 JavaScript 中扮演着重要角色，它决定了对象的原型链。例如：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> proto </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello from prototype</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> newObj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#BABED8;">(proto)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPrototypeOf</span><span style="color:#BABED8;">(newObj) </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> proto)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div><p>这里newObj的[[Prototype]]被设置为proto，意味着当访问newObj上不存在的属性时，JavaScript 引擎会沿着proto对象（即newObj的原型）向上查找。</p><h3 id="步骤三-处理属性描述符-如果有" tabindex="-1">步骤三：处理属性描述符（如果有） <a class="header-anchor" href="#步骤三-处理属性描述符-如果有" aria-label="Permalink to &quot;步骤三：处理属性描述符（如果有）&quot;">​</a></h3><p>如果提供了propertiesObject参数，Object.create会使用Object.defineProperties方法将这些属性描述符添加到新创建的对象上。属性描述符可以定义属性的各种特性，如value（属性值）、writable（是否可写）、enumerable（是否可枚举）和configurable（是否可配置）。例如：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> proto </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> properties </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">writable</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">enumerable</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">configurable</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> newObj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#BABED8;">(proto</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> properties)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(newObj</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">name)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// &#39;John&#39;</span></span></code></pre></div><p>这里通过propertiesObject为newObj定义了name属性及其特性。</p><h2 id="模拟实现object-create" tabindex="-1">模拟实现Object.create <a class="header-anchor" href="#模拟实现object-create" aria-label="Permalink to &quot;模拟实现Object.create&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">myCreate</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">proto</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">propertiesObject</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">proto</span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">proto</span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">TypeError</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">The first argument must be an object or null</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">F</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">F</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">proto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">newObj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">F</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">propertiesObject</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperties</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">newObj</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">propertiesObject</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">newObj</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,15),e=[l];function t(c,r,F,y,D,i){return a(),n("div",null,e)}const b=s(p,[["render",t]]);export{A as __pageData,b as default};
