cluster 模式： 一个主进程和多个子进程，从而形成一个集群的概念。

在cluster模式中存在master和worker 的概念， master就是主进程
worker 则是子进程，因此这里需要看下master进程 和 worker进程的创建方式

主要通过环境变量 来判断

const childOrPrimary = 'NODE_UNIQUE_ID' in process.env ? 'child':'primary'

module.exprots = require(`internal/cluster/${childPrPrimary}`)

master： internal/cluster/primary

主子进程 IPC通信方式

node 遇到cpu密集型计算： 使用网络I/O利用node 的异步非阻塞I/O。

cpu 密集计算会真正直接影响到Node.js服务性能，而网络I/O和磁盘I/O都是影响服务器性能，从侧面影响到了node.js的服务性能。

在32位服务器上node的内存限制是 0.7G , 64 - 1.4G，而这个限制主要是因为 Node.js 的垃圾回收线程在超过限制内存时，回收时长循环会大于 1s，从而会影响性能问题。

网络 I/O 的优化方案，也就是应用缓存来减少网络 I/O 或者用高性能网络 I/O 替换性能较低的网络 I/O

缓存问题： 1. 缓存雪崩 2. 缓存穿透（布隆过滤器） 3. 缓存击穿

node中最常见的问题： 内存泄露， 句柄泄露， 网络模块调用


