import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import './index.css'
import Layout from './pages/Layout'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import EditarCliente, {loader as editarClientesLoader, action as editarClienteAction} from './pages/EditarCliente'
import Index, {loader as clientesLoader} from './pages/Index'
import ErrorPage from './components/ErrorPage'
import { action as eliminarClienteAction } from './components/Cliente'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} errorElement={<ErrorPage/>}>
        <Route 
          index 
          element={<Index/>}
          loader={clientesLoader}
        />

        <Route 
          path='/clientes/nuevo' 
          element={<NuevoCliente/>}
          action={nuevoClienteAction}
        />

        <Route 
          path='/clientes/:id/editar' 
          element={<EditarCliente/>}
          loader={editarClientesLoader}
          action={editarClienteAction}
        />

        <Route 
          path='/clientes/:clienteId/eliminar' 
          action={eliminarClienteAction}
        />
        
        <Route 
          path='/*' 
          element={<p className='text-3xl text-center font-extrabold'>404 Not Found</p>} 
        />
      </Route>
    )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
