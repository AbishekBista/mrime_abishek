import React from 'react'
import { RouterProvider,
            createBrowserRouter,
            createRoutesFromElements,
            Route
} from 'react-router-dom';
import Layout from './components/Layout';
import Athletes from './pages/Athletes/Athletes';
import AthletesDetail from './pages/AthletesDetail/AthletesDetail';
import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index path="athletes" element={<Athletes />} />
        <Route path="athletes/:id" element={<AthletesDetail />} />
    </Route>
))

const App = () => {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
    
  )
}

export default App