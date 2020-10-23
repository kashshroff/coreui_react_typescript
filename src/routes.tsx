import React from 'react';


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Submission = React.lazy(() => import('./views/film/Submission'));
const About = React.lazy(() => import('./views/film/About'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/film-submission', name: 'Film Submission', component: Submission },
  { path: '/about-film', name: 'About Film', component: About },
];

export default routes;
