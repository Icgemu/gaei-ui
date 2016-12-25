import React from 'react'
import { Link } from 'react-router'
import styles from "./tabs.scss"
class Tabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      let {height} = this.props;
      let style = {height};
      let links = this.props.links.map((item,i) => {
        return (
          <li><Link to={item.path} id={item.id} title={item.title}>{item.title}</Link></li>
        )
      })
      // return (
      //   <ul>
      //     {links}
      //   </ul>
      // )
      return (
        <ul>
                <li>序言
                    <ul>
                        <li><a href="releases">版本说明</a>
                        </li>
                        <li><a href="upgrade">升级指南</a>
                        </li>
                        <li><a href="contributions">贡献指南</a>
                        </li>
                        <li><a href="../../api/5.1">API 文档</a>
                        </li>
                    </ul>
                </li>
                <li>安装设置
                    <ul>
                        <li><a href="installation">安装</a>
                        </li>
                        <li><a href="homestead">Homestead</a>
                        </li>
                    </ul>
                </li>
                <li>教程
                    <ul>
                        <li><a href="quickstart">入门学习任务</a>
                        </li>
                        <li><a href="quickstart-intermediate">中级学习任务</a>
                        </li>
                    </ul>
                </li>
                <li>基础知识
                    <ul>
                        <li><a href="routing">路由</a>
                        </li>
                        <li><a href="middleware">中间件</a>
                        </li>
                        <li><a href="controllers">控制器</a>
                        </li>
                        <li><a href="requests">请求</a>
                        </li>
                        <li><a href="responses">响应</a>
                        </li>
                        <li><a href="views">视图</a>
                        </li>
                        <li><a href="blade">Blade 模板</a>
                        </li>
                    </ul>
                </li>
                <li>系统架构
                    <ul>
                        <li><a href="lifecycle">请求的生命周期</a>
                        </li>
                        <li><a href="structure">应用程序结构</a>
                        </li>
                        <li><a href="providers">服务提供者</a>
                        </li>
                        <li><a href="container">服务容器</a>
                        </li>
                        <li><a href="contracts">Contract</a>
                        </li>
                        <li><a href="facades">Facade</a>
                        </li>
                    </ul>
                </li>
                <li>系统服务
                    <ul>
                        <li><a href="authentication">认证</a>
                        </li>
                        <li><a href="authorization">授权</a>
                        </li>
                        <li><a href="artisan">Artisan 控制台</a>
                        </li>
                        <li><a href="billing">计费</a>
                        </li>
                        <li><a href="cache">缓存</a>
                        </li>
                        <li><a href="collections">集合</a>
                        </li>
                        <li><a href="elixir">Elixir</a>
                        </li>
                        <li><a href="encryption">加密</a>
                        </li>
                        <li><a href="errors">错误与日志</a>
                        </li>
                        <li><a href="events">事件</a>
                        </li>
                        <li><a href="filesystem">文件系统 / 云存储</a>
                        </li>
                        <li><a href="hashing">哈希</a>
                        </li>
                        <li><a href="helpers">辅助方法</a>
                        </li>
                        <li><a href="localization">本地化</a>
                        </li>
                        <li><a href="mail">邮件</a>
                        </li>
                        <li><a href="packages">扩展包开发</a>
                        </li>
                        <li><a href="pagination">分页</a>
                        </li>
                        <li><a href="queues">队列</a>
                        </li>
                        <li><a href="redis">Redis</a>
                        </li>
                        <li><a href="session">会话</a>
                        </li>
                        <li><a href="envoy">SSH 任务</a>
                        </li>
                        <li><a href="scheduling">任务调度</a>
                        </li>
                        <li><a href="testing">测试</a>
                        </li>
                        <li><a href="validation">验证</a>
                        </li>
                    </ul>
                </li>
                <li>数据库
                    <ul>
                        <li><a href="database">入门</a>
                        </li>
                        <li><a href="queries">查询构造器</a>
                        </li>
                        <li><a href="migrations">迁移</a>
                        </li>
                        <li><a href="seeding">数据填充</a>
                        </li>
                    </ul>
                </li>
                <li>Eloquent ORM
                    <ul>
                        <li><a href="eloquent">入门</a>
                        </li>
                        <li><a href="eloquent-relationships">关系</a>
                        </li>
                        <li><a href="eloquent-collections">集合</a>
                        </li>
                        <li><a href="eloquent-mutators">调整修改</a>
                        </li>
                        <li><a href="eloquent-serialization">序列化</a>
                        </li>
                    </ul>
                </li>
            </ul>
      )
    }
}

export default Tabs;
