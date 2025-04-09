import{_ as r,o as e,c as t,V as a}from"./chunks/framework.b8955dba.js";const h=JSON.parse('{"title":"双缓存机制","description":"","frontmatter":{},"headers":[],"relativePath":"react/双缓存机制.md","filePath":"react/双缓存机制.md"}'),o={name:"react/双缓存机制.md"},s=a('<h1 id="双缓存机制" tabindex="-1">双缓存机制 <a class="header-anchor" href="#双缓存机制" aria-label="Permalink to &quot;双缓存机制&quot;">​</a></h1><p>在 React 中，双缓存指的是在内存中维护两棵虚拟 DOM 树，分别称为 current 树 和 workInProgress 树。</p><ul><li>current 树：代表当前在屏幕上呈现的 UI 状态，它对应着已渲染到 DOM 的虚拟 DOM 结构。</li><li>workInProgress 树：这是正在构建或更新的虚拟 DOM 树，React 在对组件进行更新时，会在这棵树上进行操作。当更新完成后，workInProgress树会替换current树，从而将新的 UI 渲染到屏幕上。</li></ul><h2 id="工作流程" tabindex="-1">工作流程 <a class="header-anchor" href="#工作流程" aria-label="Permalink to &quot;工作流程&quot;">​</a></h2><ul><li>初始化阶段：</li></ul><p>首次渲染时，React 会根据组件的初始状态构建一棵current树，并将其渲染到 DOM 上。同时，会创建一棵对应的workInProgress树，初始时workInProgress树与current树结构相同。</p><ul><li>更新阶段：</li></ul><p>当组件状态或属性发生变化时，React 会基于current树创建一棵新的workInProgress树。这个过程中，React 会以 Fiber 节点为单位，逐步对比current树和新的workInProgress树的差异（即进行调和过程）。</p><p>例如，在一个包含列表的组件中，如果列表项的数据发生了变化，React 会在workInProgress树上更新对应的 Fiber 节点，标记需要进行的 DOM 操作（如插入、删除或更新节点）。</p><p>由于 Fiber 的任务是可中断的，workInProgress树的构建过程可能会被暂停和恢复。在这个过程中，current树始终保持不变，确保当前 UI 的稳定显示。</p><ul><li>提交阶段：</li></ul><p>当workInProgress树构建完成（即所有更新任务处理完毕），它会被赋值给current树，这个过程称为提交阶段。此时，React 会根据workInProgress树与current树的差异，批量更新实际的 DOM，将新的 UI 呈现到屏幕上。</p><h2 id="优势" tabindex="-1">优势 <a class="header-anchor" href="#优势" aria-label="Permalink to &quot;优势&quot;">​</a></h2><ul><li>提高性能：双缓存机制允许 React 在内存中构建新的虚拟 DOM 树，而不影响当前显示的 UI。这使得 React 可以对更新任务进行切片处理，利用浏览器的空闲时间逐步完成workInProgress树的构建，避免长时间阻塞主线程，提高了应用的响应性能。</li><li>支持任务中断与恢复：结合 Fiber 架构，由于workInProgress树的构建过程可以中断和恢复，当有更高优先级的任务（如用户事件）需要处理时，React 可以暂停workInProgress树的构建，处理完高优先级任务后再继续从上次中断的位置恢复构建，保证了用户交互的即时响应。</li><li>简化更新逻辑：通过在两棵树之间切换，React 可以清晰地区分当前显示的 UI 和正在更新的 UI，简化了更新过程中的逻辑处理，使得 React 能够更高效地管理和应用状态的变化。</li></ul>',14),n=[s];function c(l,i,_,u,p,I){return e(),t("div",null,n)}const P=r(o,[["render",c]]);export{h as __pageData,P as default};
