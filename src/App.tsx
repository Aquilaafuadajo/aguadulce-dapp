import React from 'react';
import './App.css';
import MemberList from './pages/MembersList';
import RolesListPage from './pages/RolesList';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="pages">
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
