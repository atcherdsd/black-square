import React from 'react';
import css from './App.module.scss';
import ContentSection from '../ContentSection';

const App = () => {
    return (
        <main className={css.main}>
            <ContentSection />
        </main>
    );
};

export default App;
