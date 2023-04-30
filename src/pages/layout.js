/**
 * @author CXY
 * @version Create Time:2023年4月1日
 * @Description Route設定、<Header>中搭配Menu顥示
 *
 */

import { Layout } from "antd";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Router已改新寫法

import Header from "../components/header";
import Footer from "../components/footer";
import Blank from "../pages/blank";
import Login from "../pages/login";
import Llzy from "../pages/Llzy";
import XXZLList from "../pages/XXZLList";
import Test1 from "../pages/test1";

const layout = () => {
  return (
    <div>
      <Layout>
        <Router>
          {/** Menu 中因為有 Link所以必需包在Router中*/}
          <Header
            //  將Header固定在上方
            style={{
              position: "fixed",
              zIndex: 1,
              width: "100%",
            }}
          />
          <Routes>
            {/**  exact 作用:path的名稱絕對符合 */}
            <Route path={"/"} element={<Blank />} exact></Route>
            <Route path={"/login"} element={<Login />} exact></Route>
            <Route path={"/llzy"} element={<Llzy />} exact></Route>
            <Route path={"/XXZLList"} element={<XXZLList />} exact></Route>
            <Route path={"/test1"} element={<Test1 />} exact></Route>
          </Routes>
        </Router>
        {/* <Content>Content</Content> */}
        <Footer />
      </Layout>
    </div>
  );
};

export default layout;
