import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExamplesPage from './pages/Exsample';
import ContactsPage from './pages/ContactsPage';
import Layot from 'Layout';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layot />}>
          <Route index element={<HomePage />} />
          <Route path="/examples" element={<ExamplesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
      </Route>
          
    </Routes>
  );
}

export default App;
