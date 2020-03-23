import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonButton } from '@ionic/react';

export const SideNav: React.FC = () => (
  <>
    <IonMenu side="start" menuId="first" contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="main">
        <IonList>
          <IonButton expand="full" color='light'>
            New list
          </IonButton>
          <IonButton expand="full" color='light'>
            Settings
          </IonButton>
        </IonList>
      </IonContent>
    </IonMenu>
  </>
);
