import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppRouter from './routes/App.router'
import { store } from './store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import AuthPage from './pages/auth/AuthPage'
import 'react-toastify/dist/ReactToastify.min.css'
import './App.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  )
}

export default App
