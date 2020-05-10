import React from 'react';
import Auxiliary from '../HOC/Auxiliary';
import ImageSlider from '../AroundComponents/ImageSlider/ImageSlider'
import Section from '../AroundComponents/Section/Section'
import SectionCloth from '../AroundComponents/SectionCloth/SectionCloth';




function HomePage() {
    return (
        <Auxiliary>
            <ImageSlider />
            <Section page='sectionHomepage' />
            <Section page='sectionBestselllers'/>
            <SectionCloth />
            <Section page='sectionSale' />
        </Auxiliary>
    )
}

export default HomePage