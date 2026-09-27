import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import Landing from './pages/Landing.jsx'
import Watch from './pages/Watch.jsx'
import Create from './pages/Create.jsx'
import Fund from './pages/Fund.jsx'
import FundDetail from './pages/FundDetail.jsx'
import Trade from './pages/Trade.jsx'
import Placeholder from './pages/Placeholder.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<AppLayout />}>
        <Route path="/watch" element={<Watch />} />
        <Route path="/create" element={<Create />} />
        <Route path="/fund" element={<Fund />} />
        <Route path="/fund/:id" element={<FundDetail />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/library" element={<Placeholder title="내 라이브러리" desc="저장하고 구매한 쇼츠가 여기에 모입니다." />} />
        <Route path="/my" element={<Placeholder title="마이페이지" desc="프로필, 투자 내역, 거래 내역을 관리합니다." />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
