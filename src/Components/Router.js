import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Home from 'Routes/Home'
import TV from 'Routes/TV';
import Search from 'Routes/Search';
import Header from './Header';

export default () => (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv" component={TV} />
          <Route path="/search" component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );

/** Router > Route
 * exact - 주어진 경로가 정확해야 작동
 * exact를 넣지 않으면 /tv로 시작하는 뭐가 들어와도 일치가 된다.
 * ex) /tv/popular ~라던지 한번에 두개가 렌더 됨.
 * path - url 경로
 * component - 해당 컴포넌트
 * Redirect from='*' to='/' 일치하는 라우터가 없을 경우 
 * 어느 페이지든 받아서 /로 보낸다.
 * 
 */
