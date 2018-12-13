import React from 'react';
import Header from './common/header/header';
import InfoClumn from './pages/infoColumn/infoColumn';
import ArticleList from './pages/articleList/articleList';
import { Route, BrowserRouter } from 'react-router-dom';
import ArticleDetail from './pages/articleDetail/articleDetail';
import './common/app.less';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Header></Header>
          <main>
            <div className="crumbs">
              <span className="text">Home</span>
              <span className="text arrow-right">></span>
              <span className="text">ArticleList</span>
              <span className="text arrow-right">></span>
              <span className="text">ArticleDetail</span>
            </div>
            <div className="wrapper">
              <div className="left-container">
                <InfoClumn></InfoClumn>
              </div>
              <div className="right-container">
                <Route path="/" component={ArticleList}></Route>
                <Route path="/articledetail" component={ArticleDetail}></Route>
              </div>
            </div>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;