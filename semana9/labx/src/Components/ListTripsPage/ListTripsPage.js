import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import useProtect from './../hooks/useProtect';

function ListTripsPage() {
  const history = useHistory();
  const allTrips = useProtect(
    'https://us-central1-missao-newton.cloudfunctions.net/futureX/darvas/trips',
    {});


  console.log(allTrips)

  return (
    <div>ListTripsPage</div>
  );
}

export default ListTripsPage;
