import React from 'react';
import './articleList.less';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.list = [1, 2, 3, 4, 5];
  }

  handleList() {
    const items = this.list.map((index) => {
      return (  
        <li className="item" key={index}>
          <div className="title">文章标题{index}</div>
          <div className="content">文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</div>
          <div className="low-right">
            <span className="date">2018年8月19日</span>
            <span className="full-text">阅读全文</span>
          </div>
        </li>  
      ) 
    })
    return items
  }

  render() {
    return (
     <div className="article-list">
      <ul className="list">{this.handleList()}</ul>
     </div> 
    )
  }
}

export default ArticleList;