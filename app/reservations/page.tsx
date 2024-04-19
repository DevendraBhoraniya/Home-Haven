
import React from 'react'
import getCurrentUser from '../actions/getCurrentUser';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import getReservations from '../actions/getReservation';
import ReservationsClient from './ReservationsClient';

const page = async () => {

    const currentUser = await getCurrentUser();
    console.log(currentUser);


    if(!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                title = "Unauthorized"
                subtitle='Please Login to get this page'
                />
            </ClientOnly>
        )
    }

    const reservations =await getReservations({
        authorId : currentUser.id
    });

    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                title = "NO Reservations Found"
                subtitle='It looks like you have no reservations in your properties'
                />
            </ClientOnly>
        )
    }


  return (
    <>
    <ClientOnly>
        <ReservationsClient
        reservations = {reservations}
        currentUser = {currentUser}
        />
    </ClientOnly>
    </>
  )
}

export default page
