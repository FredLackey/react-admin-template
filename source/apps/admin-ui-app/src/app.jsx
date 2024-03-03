import { Suspense, lazy } from 'preact/compat';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PrivateLayout from './layouts/private/PrivateLayout'
import PublicLayout from './layouts/public/PublicLayout'

import DashboardFeature from './features/dashboard/DashboardFeature';

import MainPage from './features/dashboard/main/MainPage';

import WidgetPage from './features/dashboard/widgets/WidgetPage';
import WidgetHud from './features/dashboard/widgets/hud/Hud';
import WidgetList from './features/dashboard/widgets/list/List';
import WidgetAddEdit from './features/dashboard/widgets/add-edit/AddEdit';

import Loading from './components/Loading';

export const queryClient = new QueryClient({});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Suspense fallback={<Loading txt="Suspense" />}> */}
      <BrowserRouter>
        <Routes>

          <Route path="app" element={<PrivateLayout />}>
            <Route path="widgets" element={<WidgetPage />}>
              <Route path="list" element={<WidgetList />} />
              <Route path="item" element={<WidgetAddEdit />} />
              <Route index element={<WidgetHud />} />             {/* When all else fails, display the HUD. */}
            </Route>
            <Route index element={<MainPage />} />
          </Route>
          <Route path="*" element={<PublicLayout />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
