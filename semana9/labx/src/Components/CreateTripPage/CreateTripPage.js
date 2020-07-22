import useProtect from './../hooks/useProtect';
import React from 'react';

function CreateTripPage() {

  useProtect("chamou");
  return (
    <div>Criar</div>
  );
}

export default CreateTripPage;
