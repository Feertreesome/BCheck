import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/react';

export const SideNav: React.FC = () => (
    <>
        <IonMenu side="start" menuId="first" contentId='main'>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Start Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent id='main'>
                <IonList>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    </>
);
