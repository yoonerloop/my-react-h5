import React from 'react';
import { Tabbar } from 'react-vant';
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './view/home/index';
import Friends from './view/friends/index';
import SearchPage from './view/search/index';
import Settings from './view/settings/index';

import Mall from './view/mall/index';
import Order from './view/order/index';
import Cart from './view/cart/index';
import Pharmacy from './view/pharmacy/index';
import Sort from './view/sort/index';

// function AppContent() {
//   const navigate = useNavigate()
//   const [active, setActive] = React.useState(0)

//   const handleTabChange = (index: string | number) => {
//     const numericIndex = typeof index === 'string' ? parseInt(index, 10) : index
//     setActive(numericIndex)
//     switch (numericIndex) {
//       case 0:
//         navigate('/')
//         break
//       case 1:
//         navigate('/search')
//         break
//       case 2:
//         navigate('/friends')
//         break
//       case 3:
//         navigate('/settings')
//         break
//       default:
//         navigate('/')
//     }
//   }

//   return (
//     <>
//       <div style={{ paddingBottom: '50px' }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/search" element={<SearchPage />} />
//           <Route path="/friends" element={<Friends />} />
//           <Route path="/settings" element={<Settings />} />
//         </Routes>
//       </div>
//       <Tabbar value={active} onChange={handleTabChange}>
//         <Tabbar.Item icon={<HomeO />}>首页</Tabbar.Item>
//         <Tabbar.Item icon={<Search />}>搜索</Tabbar.Item>
//         <Tabbar.Item icon={<FriendsO />}>朋友</Tabbar.Item>
//         <Tabbar.Item icon={<SettingO />}>设置</Tabbar.Item>
//       </Tabbar>
//     </>
//   )
// }

function AppContent() {
  const navigate = useNavigate();
  const [active, setActive] = React.useState(0);

  const handleTabChange = (index: string | number) => {
    const numericIndex = typeof index === 'string' ? parseInt(index, 10) : index;
    setActive(numericIndex);
    switch (numericIndex) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/mall');
        break;
      case 2:
        navigate('/sort');
        break;
      case 3:
        navigate('/cart');
        break;
      case 4:
        navigate('/order');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <>
      <div style={{ paddingBottom: '50px' }}>
        <Routes>
          <Route path="/" element={<Pharmacy />} />
          <Route path="/mall" element={<Mall />} />
          <Route path="/sort" element={<Sort />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
      <Tabbar value={active} onChange={handleTabChange}>
        <Tabbar.Item icon={<HomeO />}>药房首页</Tabbar.Item>
        <Tabbar.Item icon={<Search />}>药房商城</Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>商品分类</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>购物车</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>我的订单</Tabbar.Item>
      </Tabbar>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
