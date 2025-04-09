import{_ as e,o as t,c as a,V as r}from"./chunks/framework.b8955dba.js";const _=JSON.parse('{"title":"说-下 react 更新的流程","description":"","frontmatter":{},"headers":[],"relativePath":"react/updateProgress.md","filePath":"react/updateProgress.md"}'),o={name:"react/updateProgress.md"},i=r('<h1 id="说-下-react-更新的流程" tabindex="-1">说-下 react 更新的流程 <a class="header-anchor" href="#说-下-react-更新的流程" aria-label="Permalink to &quot;说-下 react 更新的流程&quot;">​</a></h1><h2 id="beginwork" tabindex="-1">beginWork <a class="header-anchor" href="#beginwork" aria-label="Permalink to &quot;beginWork&quot;">​</a></h2><p>使用 v-dom 和 current fiber 去生成子节点的 workInProgress Fiber期间会执行函数组件、类组件， diff 子节点 给我需要变更的节点，打上 effectTag</p><ul><li>增 placement 2 0010</li><li>删 deletion 8 1080</li><li>改 update 4 0100 -增和改 placementAndUpdate 6 0110</li></ul><h2 id="completework" tabindex="-1">completeWork <a class="header-anchor" href="#completework" aria-label="Permalink to &quot;completeWork&quot;">​</a></h2><ul><li>向上走</li><li>把我所有effectTag 的元素，串联成一个 effectList</li><li>构建真实的DOM，但是不挂载在界面上</li></ul><h2 id="commitwork" tabindex="-1">commitWork <a class="header-anchor" href="#commitwork" aria-label="Permalink to &quot;commitWork&quot;">​</a></h2><ul><li>commitBeforeMutationEffect</li><li>commitMutationEffects <ul><li>处理 effectList</li><li>更新界面</li></ul></li><li>workInProgress Fiber 会切换成 current fiber</li><li>commitLayoutEffects <ul><li>执行 useLayoutEffect,cdm(component did mount)，cdu(component did update)</li></ul></li></ul>',8),l=[i];function c(n,s,d,m,u,f){return t(),a("div",null,l)}const h=e(o,[["render",c]]);export{_ as __pageData,h as default};
