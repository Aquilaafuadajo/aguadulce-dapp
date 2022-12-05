import React from 'react';
import MemberList from './pages/MembersList';
import RolesListPage from './pages/RolesList';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { MembersProvider, RolesProvider, useApp } from './state';

function App() {
  const { loading, contract, error } = useApp();

  if (loading) {
    return <p>Loading app...</p>;
  }
  if (error || !contract) {
    return <p>Error loading application</p>;
  }
  return (
    <MembersProvider>
      <RolesProvider>
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
      </RolesProvider>
    </MembersProvider>
  );
}

export default App;
