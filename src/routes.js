import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '@/pages/Home'
import Catalog from '@/pages/Catalog'
import Item from '@/pages/Item'
import Erro from '@/pages/Erro'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Erro />} />
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
