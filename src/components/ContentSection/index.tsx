import React, { JSX } from 'react';
import css from './ContentSection.module.scss';

const ContentSection = (): JSX.Element => {
    return (
        <section className={css.container}>
            <div className={css.square} />
        </section>
    );
};

export default ContentSection;
