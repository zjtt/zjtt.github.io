import{_ as a,o as e,c as i,V as t}from"./chunks/framework.b8955dba.js";const p=JSON.parse('{"title":"小程序架构","description":"","frontmatter":{},"headers":[],"relativePath":"basis/miniProgram/doubleThread.md","filePath":"basis/miniProgram/doubleThread.md"}'),r={name:"basis/miniProgram/doubleThread.md"},l=t('<h1 id="小程序架构" tabindex="-1">小程序架构 <a class="header-anchor" href="#小程序架构" aria-label="Permalink to &quot;小程序架构&quot;">​</a></h1><h2 id="小程序-native-bridge" tabindex="-1">小程序 Native Bridge <a class="header-anchor" href="#小程序-native-bridge" aria-label="Permalink to &quot;小程序 Native Bridge&quot;">​</a></h2><h3 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h3><p>小程序 Native Bridge 是指小程序框架中连接 JavaScript 逻辑层和 Native（原生）渲染层的桥梁机制。它使得运行在不同环境（JavaScript 环境与原生环境，如 Android 或 iOS 的原生环境）中的代码能够相互通信和协作，以此实现小程序丰富的功能。</p><h3 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h3><ul><li><strong>能力扩展</strong>：小程序通过 Native Bridge 可以调用原生系统的能力，如摄像头、相册、定位等。因为原生平台在这些能力的实现上具有天然优势，性能更好且功能更强大。例如，通过 Native Bridge 调用原生摄像头，小程序就能实现拍照功能，满足用户在小程序内拍摄照片用于上传等需求。</li><li><strong>优化渲染性能</strong>：一些复杂的 UI 渲染工作由 Native 层完成会更高效。通过 Native Bridge，JavaScript 逻辑层可以将渲染相关的指令传递给 Native 渲染层，让 Native 层利用其高效的图形处理能力来渲染界面，提升小程序的整体渲染性能和用户体验。比如，在实现动画效果或复杂的列表滚动时，Native 渲染层能提供更流畅的表现。</li></ul><h3 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-label="Permalink to &quot;实现原理&quot;">​</a></h3><ul><li>消息传递机制：通常采用消息队列的方式来实现通信。JavaScript 逻辑层将需要调用原生功能的请求封装成消息，放入消息队列中，Native 层会不断监听这个消息队列，当有新消息时，取出并解析消息，然后调用相应的原生代码逻辑。反之，原生层将处理结果同样封装成消息，通过消息队列传递回 JavaScript 逻辑层。</li><li>接口映射：为了使两边代码能够准确交互，需要定义一套接口映射规则。JavaScript 逻辑层调用特定的 API 名称和参数，Native 层根据预先定义好的映射关系，找到对应的原生实现函数。例如，JavaScript 调用 wx.getLocation() 获取位置信息，Native 层根据这个 API 名称，找到对应的原生定位功能实现代码。</li></ul><h2 id="小程序双线程架构" tabindex="-1">小程序双线程架构 <a class="header-anchor" href="#小程序双线程架构" aria-label="Permalink to &quot;小程序双线程架构&quot;">​</a></h2><h3 id="架构概述" tabindex="-1">架构概述 <a class="header-anchor" href="#架构概述" aria-label="Permalink to &quot;架构概述&quot;">​</a></h3><p>小程序采用双线程架构，即逻辑层（JavaScript 线程）和渲染层（Native 线程）相互独立运行，通过 Native Bridge 进行通信。这种架构设计是为了在保证开发效率和灵活性（借助 JavaScript 开发逻辑）的同时，利用原生的高性能来处理渲染相关任务。</p><h3 id="逻辑层" tabindex="-1">逻辑层 <a class="header-anchor" href="#逻辑层" aria-label="Permalink to &quot;逻辑层&quot;">​</a></h3><ul><li>功能：主要负责处理小程序的业务逻辑、数据处理以及与后端服务器的交互。开发者编写的 JavaScript 代码在逻辑层执行，例如处理用户输入、调用 API 获取数据、数据的计算和存储等。比如在一个电商小程序中，逻辑层负责处理商品列表的请求、用户添加商品到购物车的逻辑判断以及与后端服务器进行订单提交等操作。</li><li>运行环境：运行在一个单独的 JavaScript 引擎环境中，它与渲染层隔离，以避免复杂的 JavaScript 逻辑影响渲染性能。逻辑层可以通过 Native Bridge 向渲染层发送数据和指令，告知渲染层如何更新界面。</li></ul><h3 id="渲染层" tabindex="-1">渲染层 <a class="header-anchor" href="#渲染层" aria-label="Permalink to &quot;渲染层&quot;">​</a></h3><ul><li>功能：专注于界面的渲染和绘制，负责将逻辑层传递过来的数据和指令转化为用户可见的界面。它利用原生平台的图形绘制能力，高效地渲染小程序页面。例如，根据逻辑层传递的商品列表数据，渲染层将其以合适的布局方式呈现在屏幕上，包括文字、图片的绘制以及页面的布局排版等。</li><li>运行环境：在原生环境中运行，针对不同的平台（如 Android 和 iOS）有各自的实现。渲染层通过 Native Bridge 接收逻辑层的消息，更新页面的 UI 状态。同时，它也会将用户的交互事件（如点击、滑动等）通过 Native Bridge 传递给逻辑层进行处理。</li></ul><h3 id="双线程架构的优势" tabindex="-1">双线程架构的优势 <a class="header-anchor" href="#双线程架构的优势" aria-label="Permalink to &quot;双线程架构的优势&quot;">​</a></h3><ul><li>提高性能：逻辑层和渲染层分离，各自专注于自己擅长的任务，避免了相互干扰。渲染层利用原生的高性能渲染能力，能够快速响应用户的交互，提供流畅的视觉体验；逻辑层可以独立进行复杂的业务逻辑处理，不会因渲染任务的压力而降低执行效率。</li><li>提升稳定性：由于两层相互隔离，一层出现问题不会影响另一层的运行。例如，如果逻辑层的 JavaScript 代码出现错误，不会导致渲染层崩溃，用户仍然可以看到当前页面的状态，而不会出现整个小程序闪退的情况，增强了小程序的稳定性和可靠性。</li></ul>',17),o=[l];function d(h,n,c,s,u,v){return e(),i("div",null,o)}const _=a(r,[["render",d]]);export{p as __pageData,_ as default};
