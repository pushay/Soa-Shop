import React, { useEffect,useState} from 'react';
import styles from './ChooseClothes.module.css';
import ChooseClothesDropdown from './ChooseClothesDropdown/ChooseClothesDropdown';
import text from './chooseClothesListOfClothesText';
import {withRouter} from 'react-router-dom';
import NavigationMenuList from '../Components/Navigation/NavigationMenu/NavigationMenuList/NavigationMenuList';
import ChooseClothesSingleCloth from './ChooseClothesSingleCloth/ChooseClothesSingleCloth';


let clothesWithDiscription = text.AllClothes

function ChooseClothes(props) {

    const [startState, setStartState] = useState(props.location.pathname);
    const [sortFilter, setSortFilter] = useState('');

    useEffect(() => {
        setStartState(props.location.pathname)
    }, [props.location.pathname])

    return (
    
        <div className={styles.chooseClothes}>
            <div className={styles.chooseClothesSidebar}>
                <div className={styles.chooseClothesOffers}>
                    <NavigationMenuList with='Arrivals' styled='chooseClothes' navigation='NavigationChooseClothes1' />
                </div>
                <div className={styles.chooseClothesByProduct}>
                   <NavigationMenuList with='Shop by Product' styled='chooseClothes' navigation='NavigationChooseClothes2' />
                </div>
                <div className={styles.chooseClothesSortBlock}>
                    <h1 className={styles.chooseClothesHeader} >Filters and Sorts</h1>
                    <div className={styles.dropdownforSort}>
                        <ChooseClothesDropdown choose='Sort by' sortState={sortFilter} setSortState={setSortFilter}/>
                        <ChooseClothesDropdown choose='Choose size'/>
                        <ChooseClothesDropdown choose='Choose quality'/>
                    </div>
                </div>
            </div>
            <div className={styles.chooseClothesMain}>
                {clothesWithDiscription.filter(cloth => {
                    if (startState === '/choose-clothes/women-collection' && cloth.sex.includes('woman')) return true;
                    else if (startState === '/choose-clothes/men-collection' && cloth.sex.includes('man')) return true;
                    else if (startState === '/choose-clothes/bestsellers' && cloth.sorted === 'Bestsellers') return true;
                    else if (startState === '/choose-clothes/good-price' && cloth.price <= 25) return true;
                    else if (startState ==='/choose-clothes/t-shirt' && cloth.productType === 't-shirt') return true;
                    else if (startState ==='/choose-clothes/jumpsuit' && cloth.productType === 'jumpsuit') return true;
                    else if (startState ==='/choose-clothes/hoodie' && cloth.productType === 'hoodie') return true

                    else return false
                }).filter(cloth => {
                    if (sortFilter === '') return true;
                    else if (cloth.sorted === sortFilter) return true;
                    else return false
                }).map((image,index) => {
                    return (
                        <div key={index} className={styles.chooseSingleClothBlock}>
                            <ChooseClothesSingleCloth image={image} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default withRouter(ChooseClothes)
