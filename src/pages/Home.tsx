import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import './Home.css';
import { Header } from '../components/Header';
import { Card } from '../components/Card';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <Card/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
