import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import ChooseClothes from './ChooseClothes/ChooseClothes';
import ChosenCloth from './ChooseClothes/ChosenCloth/ChosenCloth';
import ShoppingCard from './ShoppingCard/ShoppingCard'



function Routing() {
    return (
            <Switch>
                <Route exact path="/" >
                    <HomePage />
                </Route>
                <Route exact path="/choose-clothes" >
                    <ChooseClothes />
                </Route>
                <Route path="/choose-clothes/women-collection">
                    <ChooseClothes/>
                </Route>
                <Route path="/choose-clothes/men-collection">
                    <ChooseClothes />
                </Route>
                <Route exact path="/shopping-cart">
                    <ShoppingCard/>
                </Route>
                <Route path="/choose-clothes/bestsellers">
                    <ChooseClothes />
                </Route>
                <Route path="/choose-clothes/good-price">
                    <ChooseClothes />
                </Route>
                <Route path="/choose-clothes/t-shirt">
                    <ChooseClothes />
                </Route>
                <Route path="/choose-clothes/jumpsuit">
                    <ChooseClothes />
                </Route>
                <Route path="/choose-clothes/hoodie">
                    <ChooseClothes />
                </Route>
                <Route path="/chosenCloth">
                    <ChosenCloth />
                </Route>
            </Switch>
    )
}

export default Routing