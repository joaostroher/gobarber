import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function Dashboard() {
  api.get('appointments?page=1');
  return <h1>Dashboard</h1>;
}
