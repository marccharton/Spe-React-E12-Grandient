import React from 'react';
import NbColors from 'src/components/NbColors';
import RandomButtons from 'src/containers/RandomButtons';
import Colors from 'src/containers/Colors';
import Gradient from 'src/containers/Gradient';
import DirectionButton from 'src/containers/DirectionButton';

const App = () => (
    <div className="app">
        Pouet
        <NbColors message="ça c'est cool" />
        <RandomButtons />
        <Colors />
        <Gradient />
        <div className="buttons group">
            {
                [
                    ['A gauche', '270deg'],
                    ['A droite', '90deg'],
                    ['to45', '45deg'],
                    ['to135', '135deg'],
                    ['to225', '225deg'],
                    ['to315', '315deg'],
                ].map(([label, direction]) => <DirectionButton key={`key-${direction}`} label={label} direction={direction} />)
            }
        </div>
    </div>
);

export default App;
