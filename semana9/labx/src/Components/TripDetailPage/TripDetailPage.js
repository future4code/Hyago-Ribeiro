import useProtect from './../hooks/useProtect';
import React from 'react';

function TripDetailPage() {

  useProtect("chamou");
  return (
    <div>TripDetailPage</div>
  );
}

export default TripDetailPage;
