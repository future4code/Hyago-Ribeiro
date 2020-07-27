import React from 'react';

import {Loader1, Loader2, ContainerLoader, TextLoader} from './styled';

function Loader() {
    return (
        <ContainerLoader>
            <Loader1>
                <Loader2></Loader2>
            </Loader1>
            <TextLoader>Procurando pessoas</TextLoader>
        </ContainerLoader>
    );
}

export default Loader;
