import React from 'react';

import { AuthProvider } from './auth';
import { ClassifyProvider } from './classify';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ClassifyProvider>{children}</ClassifyProvider>
  </AuthProvider>
);

export default AppProvider;
