// default app mode flags
// avoid using directly in components, prefer use inside more semantic tests
export const devMode = () => (process.env.NODE_ENV === 'development');
export const prodMode = () => (process.env.NODE_ENV === 'production');

// Whether to show components/pages related to Donors
export const donorFlag = () => devMode();
