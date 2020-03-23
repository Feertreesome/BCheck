import React from 'react';
import { IonToolbar, IonTitle, IonButtons, IonMenuButton, IonHeader } from '@ionic/react';
import { SideNav } from './SideNav';

export const Header: React.FC = () => (
  <>
    <IonHeader color='primary'>
      <IonToolbar>
        <IonTitle>BCheck</IonTitle>
        <IonButtons slot="end">
          <IonMenuButton />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <SideNav />
  </>
);
