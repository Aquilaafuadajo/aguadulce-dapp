import React from 'react';
import MemberList from './pages/MembersList';
import RolesListPage from './pages/RolesList';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="bg-[#f4f9ff] h-screen pt-[6.8rem]">
        <Routes>
          <Route path="/" element={<MemberList />} />
          <Route path="/roles" element={<RolesListPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
