import{_ as t,o as i,c as l,V as e}from"./chunks/framework.b8955dba.js";const H=JSON.parse('{"title":"http","description":"","frontmatter":{},"headers":[],"relativePath":"browser/http.md","filePath":"browser/http.md"}'),a={name:"browser/http.md"},T=e('<h1 id="http" tabindex="-1">http <a class="header-anchor" href="#http" aria-label="Permalink to &quot;http&quot;">​</a></h1><h2 id="http状态码status" tabindex="-1">http状态码status <a class="header-anchor" href="#http状态码status" aria-label="Permalink to &quot;http状态码status&quot;">​</a></h2><ul><li>200表示请求已成功，服务器已经正确处理了客户端的请求。</li><li>301 Moved Permanently 永久重定向，表示请求的资源已被永久移动到新的URL，客户端应该使用新的URL进行后续的请求。</li><li>302 Found 临时重定向，表示请求的资源暂时移动到了新的URL，客户端应该使用新的URL进行后续的请求。</li><li>401 Unauthorized 表示客户端请求需要身份验证，但客户端尚未提供有效的身份验证凭据，或者提供的凭据无效。简单来说，就是用户未登录或登录信息有误，服务器不知道你是谁，所以拒绝请求。</li><li>403 Forbidden 意味着服务器已经识别了客户端的身份，但基于某些策略、权限设置等原因，明确禁止客户端访问所请求的资源。也就是说，服务器知道你是谁，但不允许你访问该资源。</li><li>404 Not Found 资源不存在，表示服务器无法找到请求的资源，可能是因为资源不存在或者已经被删除。</li><li>405 Method Not Allowed 表示客户端请求的HTTP方法不被服务器支持。简单来说，就是服务器知道你是谁，但是你请求的方法服务器不支持。</li><li>406 Not Acceptable 表示服务器无法根据客户端请求的内容特性完成请求。简单来说，就是服务器知道你是谁，但是你请求的资源类型不被支持。</li><li>408 Request Timeout 表示客户端请求超时，服务器等待客户端发送请求的时间过长，客户端没有在规定时间内发送请求。</li><li>413 Payload Too Large 表示客户端发送的请求体过大，服务器无法处理。简单来说，就是服务器知道你是谁，但是你发送的数据太大，服务器处理不过来。</li><li>500 Internal Server Error 服务器内部错误，表示服务器遇到了一个意外的情况，无法完成客户端的请求。</li><li>502 Bad Gateway 服务器作为网关或代理，从上游服务器收到无效响应。简单来说，就是服务器作为代理，去请求上游服务器，上游服务器返回了无效的响应，导致服务器无法正常处理请求。</li><li>503 Service Unavailable 表示服务器暂时无法处理客户端的请求，可能是服务器过载、维护或者维护中。客户端应该稍后重试请求。</li><li>504 Gateway Timeout 超时，服务器作为网关或代理，但是没有及时从上游服务器收到请求的响应。简单来说，就是服务器作为代理去请求上游服务器，但是上游服务器没有在规定时间内返回响应，导致服务器无法正常处理请求。</li></ul><h2 id="http1与http0-9的区别" tabindex="-1">http1与http0.9的区别 <a class="header-anchor" href="#http1与http0-9的区别" aria-label="Permalink to &quot;http1与http0.9的区别&quot;">​</a></h2><ul><li>HTTP/0.9 只支持 GET 方法，没有状态码和头部信息，只能返回纯文本格式的 HTML 文档，无法返回其他类型的数据（如 JSON、XML 等）。</li><li>HTTP/0.9 没有版本号，所有的 HTTP 请求和响应都没有版本号，无法区分不同版本的 HTTP 协议。</li><li>状态码：HTTP/1.0 引入了状态码，用于表示请求的处理结果。例如，200 表示成功，404 表示未找到资源等。</li><li>头部信息(请求头和响应头)：HTTP/1.0 引入了状态码和头部信息(请求头和响应头)， <ul><li>请求头 <ul><li>accept: text/html</li><li>accept-encoding: gzip, deflate, br</li><li>accept-Charset:Iso-8859-1,utf-8</li><li>accept-language: zh-CN,zh</li></ul></li><li>响应头 <ul><li>content-encoding: br</li><li>content-type:text/html; charset=UTF-8</li></ul></li></ul></li><li>请求方法：支持多种 HTTP 方法（如 POST、PUT、DELETE 等），可以返回各种类型的数据。</li><li>版本号：HTTP/1.0 引入了版本号，所有的 HTTP 请求和响应都有版本号，可以区分不同版本的 HTTP 协议。</li><li>cache机制：HTTP/1.0 提供了cache机制，允许服务器和客户端缓存资源，减少了不必要的网络传输。 pragma(请求头)、expires、last-modified、If - Modified - Since、如果响应头有pragma: no-cache，则不使用缓存。</li></ul><h2 id="http1-1与http1的区别" tabindex="-1">http1.1与http1的区别 <a class="header-anchor" href="#http1-1与http1的区别" aria-label="Permalink to &quot;http1.1与http1的区别&quot;">​</a></h2><ul><li>改进持久连接：HTTP/1.1 支持持久连接，即在一个TCP连接上可以发送http多个请求和响应，避免了HTTP/1.0中每次请求都需要建立一个新的TCP连接的问题，提高了连接的利用率。</li><li>不成熟的管线化：HTTP/1.1 虽然引入了管线化技术，但是它并不成熟。在 HTTP/2 中，我们使用了多路复用机制来替代管线化，解决了队头阻塞的问题。HTTP/1.1 中的管线化是指将多个 HTTP 请求整批提交给服务器的技术，虽然可以整批发送请求，不过服务器依然需要根据请求顺序来回复浏览器的请求。FireFox、Chrome 都做过管线化的试验，但是由于各种原因，它们最终都放弃了管线化技术。</li><li>提供虚拟主机的支持：即一台物理服务器虽然只有一个ip地址，多个虚拟主机共享一个IP地址，但是利用虚拟主机一个ip可以对应多个域名。HTTP/1.1 的请求头中增加了Host 字段，用来表示当前的域名地址，这样服务器就可以根据不同的 Host 值做不同的处理。</li><li>对动态生成的内容提供了完美支持：在设计 HTTP/1.0 时，需要在响应头中设置完整的数据大小，如Content-Length:901，这样浏览器就可以根据设置的数据大小来接收数据。HTTP/1.1 通过引入Chunk transfer 机制来解决不能动态生成内容的这个问题，服务器会将数据分割成若干个任意大小的数据块，每个数据块发送时会附上上个数据块的长度，最后使用一个零长度的块作为发送数据完成的标志。这样就提供了对动态内容的支持。</li><li>引入了cookie：HTTP/1.1 引入了 cookie 技术，允许服务器在响应头中设置cookie信息，客户端可以将这些信息存储在本地，并在后续的请求中自动携带。</li><li>安全机制：HTTP/1.1 引入了更多的安全机制，如 HTTPS、基本认证（Basic Authentication）、摘要认证（Digest Authentication）等。</li><li>增加缓存控制字段：HTTP/1.1 引入了更多的缓存控制机制，如 Cache-Control、Etag 等。</li></ul><h2 id="http2与http1-1的区别" tabindex="-1">http2与http1.1的区别 <a class="header-anchor" href="#http2与http1-1的区别" aria-label="Permalink to &quot;http2与http1.1的区别&quot;">​</a></h2><ul><li>HTTP/2 一个域名只建立一个 TCP 连接，避免了 HTTP/1.1 中一个域名最多建立6个TCP连接互相竞争带宽的问题。</li><li>新增二进制分帧实现多路复用解决了HTTP/1.1中的队头阻塞(后一个http必须等到前一个http请求完成才能发送)问题，实现了头部压缩，服务器推送、请求优先级等特性。 <ul><li>二进制分帧：HTTP/2 使用二进制分帧层，将 HTTP/1.1 的文本格式请求和响应消息拆分成更小的二进制帧</li><li>多路复用：HTTP/2 支持多路复用，允许在一个 TCP 连接上同时发送http多个请求和响应，避免了 HTTP/1.1 中多个请求和响应需要建立多个 TCP 连接的问题，提高了连接的利用率。</li><li>头部压缩：HTTP/2 使用 HPACK 算法对 HTTP 头信息进行压缩，减少了传输的数据量，提高了数据传输的效率。</li><li>服务器推送：HTTP/2 允许服务器在客户端请求之前主动发送资源，减少了客户端的等待时间。</li><li>请求优先级：HTTP/2 允许客户端和服务器为请求设置优先级，使得重要的资源可以更快地被加载。</li><li>安全性：HTTP/2 默认使用 TLS 加密，保证了数据传输的安全性。</li></ul></li></ul><h2 id="http3与http2的区别" tabindex="-1">http3与http2的区别 <a class="header-anchor" href="#http3与http2的区别" aria-label="Permalink to &quot;http3与http2的区别&quot;">​</a></h2><p>tcp的对头阻塞问题：在 TCP 传输过程中，由于单个数据包的丢失而造成的阻塞称为 TCP 上的队头阻塞。HTTP/3 就是为了解决这个问题而诞生的。</p><p>QUIC（Quick UDP Internet Connections）是一种基于UDP的传输层协议，它提供了类似于TCP的多路复用、流量控制、拥塞控制和可靠性等特性，同时解决了 TCP 的队头阻塞问题。</p><p>HTTP/3 使用基于 UDP 的 QUIC 协议，而不是 TCP，解决了 TCP 的队头阻塞问题。</p><p>QUIC 协议集合了以下几点功能</p><ul><li>流量控制：HTTP/3 使用了新的流量控制机制，可以更好地控制数据的传输速率。</li><li>安全性：HTTP/3 默认使用 TLS 加密，保证了数据传输的安全性。</li><li>多路复用：HTTP/3 支持多路复用，允许同时在一个 UDP 连接上发送多个请求和响应，避免了 HTTP/2 中多个 TCP 连接互相竞争带宽的问题。</li><li>头部压缩：HTTP/3 使用了 QPACK 算法对 HTTP 头信息进行压缩，减少了传输的数据量，提高了数据传输的效率。</li><li>服务器推送：HTTP/3 允许服务器在客户端请求之前主动发送资源，减少了客户端的等待时间。</li><li>请求优先级：HTTP/3 允许客户端和服务器为请求设置优先级，使得重要的资源可以更快地被加载。</li></ul>',15),h=[T];function o(p,P,r,n,c,s){return i(),l("div",null,h)}const d=t(a,[["render",o]]);export{H as __pageData,d as default};
