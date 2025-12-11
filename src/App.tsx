import React from 'react'
import { Tabbar } from 'react-vant'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './view/home/index'
import Friends from './view/friends/index'
import SearchPage from './view/search/index'
import Settings from './view/settings/index'

function AppContent() {
  const navigate = useNavigate()
  const [active, setActive] = React.useState(0)

  const handleTabChange = (index: string | number) => {
    const numericIndex = typeof index === 'string' ? parseInt(index, 10) : index
    console.log('xxxx', numericIndex)
    setActive(numericIndex)
    switch (numericIndex) {
      case 0:
        navigate('/')
        break
      case 1:
        navigate('/search')
        break
      case 2:
        navigate('/friends')
        break
      case 3:
        navigate('/settings')
        break
      default:
        navigate('/')
    }
  }

  return (
    <>
      <div style={{ paddingBottom: '50px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Tabbar value={active} onChange={handleTabChange}>
        <Tabbar.Item icon={<HomeO />}>首页</Tabbar.Item>
        <Tabbar.Item icon={<Search />}>搜索</Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>朋友</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>设置</Tabbar.Item>
      </Tabbar>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App