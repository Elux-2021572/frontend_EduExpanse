import { PublicationView } from './components/publications/PublicationView';
import { DashboardPage } from "./pages/dashboard"
import { getPublics } from './services';

export const routes = [
    { path: '/', element: <DashboardPage /> },
    { path: '/publication/:id', element: <PublicationView getPublics={getPublics} /> },
]