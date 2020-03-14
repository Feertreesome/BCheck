import {IonContent, IonPage} from '@ionic/react';
import React from 'react';
import './Home.css';
import {Header} from "../components/Header";

const Home: React.FC = () => {
  return (
    <IonPage>
        <Header/>
        <IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
