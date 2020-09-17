import React from 'react';
import NbColors from 'src/containers/NbColors';
import RandomButtons from 'src/containers/RandomButtons';

const App = () => (
    <div className="app">
        Pouet
        <NbColors message="ça c'est cool" />
        <RandomButtons />
    </div>
);

export default App;
