import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/index.router';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <div id="app">
      <BrowserRouter children={<AppRoutes />} />
      <SpeedInsights />
    </div>
  );
}

export default App;
