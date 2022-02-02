import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = properti => ( 
    // Arrow function bakal return object kalau pake bracket dan hilangin 'return'
    // Parameter Properti ini akan jadi objek di CardList pas dirender
    // Biasanya properti ditaro di dalam JSX-html mirip atribut HTML, tp bukan atribut valid HTML
    // Properti utama dari Properti ini adalah/disebut '.children'
    // Children adalah apapun yang ditaro antara bracket <CardList> 'children' <CardList/> 
    // Kalau 'children' ga ada isinya, properti '.children' tetep ada dengan value 'null'

    // console.log(properti);
    <div className='card-list'> 
        {
            properti.siluman.map( siMonster => (
                <Card key={siMonster.id} namaSiluman={siMonster}/>
            ))
        }
    </div>
);