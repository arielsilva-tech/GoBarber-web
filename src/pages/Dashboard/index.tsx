import React, { useState } from 'react';
import { FiClock, FiPower } from 'react-icons/all';
import {
  Container,
  Profile,
  HeaderContent,
  Appointment,
  Calendar,
  Content,
  Header,
  Schedule,
  NextAppointment,
  Section,
} from './style';
import logImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();
  console.log(user);
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logImg} alt="GOBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-Vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button name="signOut" type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-Feira</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="http://localhost:3333/files/a10143da0ead935832b8-Ariel_Viana_Silva.jpg"
                alt="-"
              />
              <strong>Ariel</strong>
              <span>
                <FiClock>08:00</FiClock>
              </span>
            </div>
          </NextAppointment>
          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="http://localhost:3333/files/a10143da0ead935832b8-Ariel_Viana_Silva.jpg"
                  alt="-"
                />
                <strong>Ariel Viana</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="http://localhost:3333/files/a10143da0ead935832b8-Ariel_Viana_Silva.jpg"
                  alt="-"
                />
                <strong>Ariel Viana</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};
export default Dashboard;
