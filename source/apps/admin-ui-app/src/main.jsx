import { render } from 'preact'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app.jsx'
import './index.css'

import { AuthProvider } from './context/AuthContext.jsx'
import { UserDataProvider } from './context/UserDataContext.jsx'

// render(<App />, document.getElementById('app'))
render(
  <AuthProvider dataKey="authData">
    <UserDataProvider dataKey="userData">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserDataProvider>
  </AuthProvider>,
  document.getElementById('app')
)

// ReactDOM.createRoot(document.getElementById('app')).render(
//   <React.StrictMode>
//     <AuthProvider dataKey="authData">
//       <UserDataProvider dataKey="userData">
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </UserDataProvider>
//     </AuthProvider>
//   </React.StrictMode>,
// )
