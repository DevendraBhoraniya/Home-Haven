"use client";
import React, { useCallback, useState } from "react";
import Heading from "../components/Heading";
import Container from "../components/Container";
import { SafeUser, safeReservation } from "../components/types";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "../components/listing/ListingCard";

interface ReservationsClientProps {
  reservations: safeReservation[];
  currentUser?: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingID] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingID(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation cancelled");
          router.refresh();
        })
        .catch((error) => {
          toast.error("Something went wrong");
        })
        .finally(() => {
          setDeletingID("");
        });
    },
    [router]
  );

  return (
    <>
      <Container>
        <Heading title="Reservations" subtitle="Bookings on your properties" />
          <div
            className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
          >
            {reservations.map((reservation: any) => (
              <ListingCard
                key={reservation.id}
                data={reservation.listing}
                reservation={reservation}
                actionId={reservation.id}
                onAction={onCancel}
                disabled={deletingId === reservation.id}
                actionLabel="Cancel guest reservation"
                currentUser={currentUser}
              />
            ))}
          </div>
      </Container>
    </>
  );
};

export default ReservationsClient;
