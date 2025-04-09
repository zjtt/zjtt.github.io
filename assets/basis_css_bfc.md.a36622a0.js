import{_ as e,o,c as l,V as i}from"./chunks/framework.b8955dba.js";const x=JSON.parse('{"title":"css中的BFC、IFC、GFC、FFC","description":"","frontmatter":{},"headers":[],"relativePath":"basis/css/bfc.md","filePath":"basis/css/bfc.md"}'),t={name:"basis/css/bfc.md"},a=i('<h1 id="css中的bfc、ifc、gfc、ffc" tabindex="-1">css中的BFC、IFC、GFC、FFC <a class="header-anchor" href="#css中的bfc、ifc、gfc、ffc" aria-label="Permalink to &quot;css中的BFC、IFC、GFC、FFC&quot;">​</a></h1><p>在CSS中，我们经常听到与布局和渲染相关的几个概念，如BFC（Block Formatting Context）、IFC（Inline Formatting Context）、GFC（Grid Formatting Context）和FFC（Flex Formatting Context）。这些概念都与盒模型的布局方式有关，它们定义了如何计算元素的大小、位置以及与其他元素的关系。</p><h2 id="bfc块级格式化上下文-block-formatting-context" tabindex="-1">BFC块级格式化上下文（Block Formatting Context） <a class="header-anchor" href="#bfc块级格式化上下文-block-formatting-context" aria-label="Permalink to &quot;BFC块级格式化上下文（Block Formatting Context）&quot;">​</a></h2><h3 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h3><ol><li>清除浮动，包含内部浮动，避免父元素高度塌陷</li><li>排除外部浮动，阻止元素被浮动元素覆盖</li><li>避免外边距重叠，相邻子兄弟元素magin重叠，子元素和元素本身的margin重叠,没有内容的元素自身的margin-top和margin-bottom发生重叠</li></ol><h3 id="常见实现" tabindex="-1">常见实现 <a class="header-anchor" href="#常见实现" aria-label="Permalink to &quot;常见实现&quot;">​</a></h3><ol><li>根元素（<code>&lt;html&gt;</code>）</li><li>浮动元素（float值不为 <code>none</code>）</li><li>绝对定位元素：position (<code>absolute</code>、<code>fixed</code>)</li><li>overflow值不为 <code>visible</code>、<code>clip</code> 的块元素, 比如overflow:hidden, overflow:auto, overflow:scroll</li><li>display为<code>inline-block</code>，<code>table-cell</code>，<code>flex</code>，<code>grid</code></li></ol><h2 id="ifc内联格式化上下文-inline-formatting-context" tabindex="-1">IFC内联格式化上下文（Inline Formatting Context） <a class="header-anchor" href="#ifc内联格式化上下文-inline-formatting-context" aria-label="Permalink to &quot;IFC内联格式化上下文（Inline Formatting Context）&quot;">​</a></h2><p>内联格式化上下文。IFC决定了内联元素（如文本、链接、span等）如何布局。在IFC中，元素从左到右水平排列，直到一行排满，然后换到下一行。IFC的宽度只与包含块（Containing Block）有关，与IFC中的元素多少没有关系。</p><h3 id="作用-1" tabindex="-1">作用 <a class="header-anchor" href="#作用-1" aria-label="Permalink to &quot;作用&quot;">​</a></h3><ol><li>内联元素在同一行排列</li><li>内联元素的高度由行高决定</li><li>内联元素之间的空白字符会被忽略</li><li>内联元素可以设置<code>vertical-align</code>属性来调整垂直对齐方式</li></ol><h3 id="常见实现-1" tabindex="-1">常见实现 <a class="header-anchor" href="#常见实现-1" aria-label="Permalink to &quot;常见实现&quot;">​</a></h3><ol><li>内联元素（如<code>&lt;span&gt;</code>、<code>&lt;a&gt;</code>、<code>&lt;em&gt;</code>等）</li><li><code>&lt;textarea&gt;</code>元素</li><li><code>&lt;input&gt;</code>元素（除非设置了<code>display: block;</code>）</li><li><code>&lt;select&gt;</code>元素（除非设置了<code>display: block;</code>）</li><li><code>&lt;button&gt;</code>元素（除非设置了<code>display: block;</code>）</li><li><code>&lt;label&gt;</code>元素（除非设置了<code>display: block;</code>）</li><li><code>&lt;img&gt;</code>元素（除非设置了<code>display: block;</code>）</li></ol><h2 id="gfc网格格式化上下文-grid-formatting-context" tabindex="-1">GFC网格格式化上下文（Grid Formatting Context） <a class="header-anchor" href="#gfc网格格式化上下文-grid-formatting-context" aria-label="Permalink to &quot;GFC网格格式化上下文（Grid Formatting Context）&quot;">​</a></h2><p>网格格式化上下文。GFC是CSS Grid布局创建的上下文。在Grid布局中，元素按照定义的网格线进行排列，可以创建复杂的二维布局。Grid布局提供了强大的布局能力，可以处理复杂的页面布局需求。</p><h3 id="作用-2" tabindex="-1">作用 <a class="header-anchor" href="#作用-2" aria-label="Permalink to &quot;作用&quot;">​</a></h3><ol><li>创建二维布局</li><li>控制行和列的尺寸、对齐方式等</li><li>支持跨行或跨列的元素排列</li><li>可以使用<code>grid-template-areas</code>属性来定义网格区域，并通过<code>grid-area</code>属性将子项放置到这些区域内。</li><li>可以使用<code>grid-gap</code>属性来设置网格线之间的间隙。</li><li>可以使用<code>grid-auto-flow</code>属性来控制网格项的排列方向和顺序。</li><li>可以使用<code>grid-template-columns</code>和<code>grid-template-rows</code>属性来定义网格的列数、行高以及它们的尺寸。</li></ol><h3 id="常见实现-2" tabindex="-1">常见实现 <a class="header-anchor" href="#常见实现-2" aria-label="Permalink to &quot;常见实现&quot;">​</a></h3><ol><li>使用<code>display: grid;</code>或<code>display: inline-grid;</code>的元素</li><li>使用<code>grid-template-columns</code>、<code>grid-template-rows</code>、<code>grid-template-areas</code>等属性定义网格布局的元素</li></ol><h2 id="ffc弹性盒格式化上下文-flex-formatting-context" tabindex="-1">FFC弹性盒格式化上下文（Flex Formatting Context） <a class="header-anchor" href="#ffc弹性盒格式化上下文-flex-formatting-context" aria-label="Permalink to &quot;FFC弹性盒格式化上下文（Flex Formatting Context）&quot;">​</a></h2><p>弹性盒格式化上下文。FFC是CSS Flexbox布局创建的上下文。在Flexbox布局中，子元素（称为flex项）可以在容器（称为flex容器）中沿一个维度（行或列）进行排列，并且可以动态地调整大小以适应不同屏幕尺寸和布局需求。Flexbox布局非常适合于构建复杂的、响应式的布局。</p><h3 id="作用-3" tabindex="-1">作用 <a class="header-anchor" href="#作用-3" aria-label="Permalink to &quot;作用&quot;">​</a></h3><ol><li>创建一维布局</li><li>控制子元素在容器中的排列方向、对齐方式等</li><li>支持子元素动态调整大小以适应容器</li><li>可以使用<code>flex-direction</code>属性来控制主轴方向</li><li>可以使用<code>justify-content</code>属性来控制主轴上的对齐方式</li><li>可以使用<code>align-items</code>属性来控制交叉轴上的对齐方式</li><li>可以使用<code>flex-wrap</code>属性来控制子元素是否换行</li></ol><h3 id="常见实现-3" tabindex="-1">常见实现 <a class="header-anchor" href="#常见实现-3" aria-label="Permalink to &quot;常见实现&quot;">​</a></h3><ol><li>使用<code>display: flex;</code>或<code>display: inline-flex;</code>的元素</li><li>使用<code>justify-content</code>、<code>align-items</code>、<code>flex-direction</code>等属性定义Flexbox布局的元素</li></ol><p>这些格式化上下文的概念有助于我们理解和控制CSS布局，它们为开发者提供了强大的工具来构建复杂且响应式的页面布局。每种上下文都有其特定的布局规则和特性，可以根据需要选择适合的布局方式来满足设计需求。</p>',26),c=[a];function d(r,n,s,h,f,m){return o(),l("div",null,c)}const F=e(t,[["render",d]]);export{x as __pageData,F as default};
