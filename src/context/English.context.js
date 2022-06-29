import React, { useState } from 'react';
import { english } from '../data/english';

export const EnglishContext = React.createContext({});

export const EnglishContextProvider = (props) => {
    const { children } = props;
    const [_english, setEnglish] = useState(english);

    const options = {
        english: _english,
        addLesson(english) {
            setEnglish([..._english, english]);
        },
    };

    return <EnglishContext.Provider value={options}>
        { children }
    </EnglishContext.Provider>
}