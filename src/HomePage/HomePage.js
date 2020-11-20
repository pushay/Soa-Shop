import React from 'react';
import Auxiliary from '../HOC/Auxiliary';
import ImageSlider from '../Components/ImageSlider/ImageSlider'
import Section from '../Components/Section/Section'
import SectionCloth from '../Components/SectionCloth/SectionCloth';




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