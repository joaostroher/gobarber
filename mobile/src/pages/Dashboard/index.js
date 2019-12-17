import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Appointment from '~/components/Appointment';
import Background from '~/components/Background';
import { Container, Title, List } from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('appointments');
      setAppointments(response.data);
    }
    loadData();
  }, []);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);
    const newAppointments = appointments.map(appointment =>
      appointment.id === id
        ? { ...appointment, canceled_at: response.data.canceled_at }
        : appointment
    );
    setAppointments(newAppointments);
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment data={item} onCancel={() => handleCancel(item.id)} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  // eslint-disable-next-line
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
