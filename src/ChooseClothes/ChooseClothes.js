import React, { useEffect,useState} from 'react';
import styles from './ChooseClothes.module.css';
import ChooseClothesDropdown from './ChooseClothesDropdown/ChooseClothesDropdown';
import NavigationMenuList from '../Components/Navigation/NavigationMenu/NavigationMenuList/NavigationMenuList';
import ChooseClothesSingleCloth from './ChooseClothesSingleCloth/ChooseClothesSingleCloth';
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions';
import Button from '../Components/Button/Button';

function ChooseClothes(props) {

    const [sqlData, setsqlData] = useState([])
    const [filters, setFilters] = useState({})

    useEffect(()=> {
        props.onStoreFilters(filters, setFilters)
            fetchSql()
    },[])

    useEffect(() => {
        fetchSql()
    }, [filters])

    const clearSort = () => {
        setFilters({})
    }

    const fetchSql = () => {
        let formData = new FormData()
        if (filters){
            for (let [filterKey, filterValue] of Object.entries(filters)) {
                formData.append(filterKey, filterValue) }
        }
        fetch('https://database-test-832.herokuapp.com/', {
            method: 'POST',
            mode: 'cors',
            body: formData
        }).then(response => response.json()).then(data => {
            setsqlData(data)
        })
    }

    const getSorts = () => {
        let sorts = '';
        for (let value of Object.values(filters)){
            sorts += value + ';  ';
        }
        return sorts
        }
       
    return (
        <div className={styles.chooseClothes}>
            <div className={styles.chooseClothesSidebar}>
                <div className={styles.chooseClothesOffers}>
                    <NavigationMenuList onClick={setFilters} filters={filters} with='Arrivals' styled='chooseClothes' navigation='NavigationChooseClothes1' />
                </div>
                <div className={styles.chooseClothesByProduct}>
                   <NavigationMenuList onClick={setFilters} filters={filters} filter='type' with='Shop by Product' styled='chooseClothes' navigation='NavigationChooseClothes2' />
                </div>
                {Object.keys(filters).length !== 0 ? 
                    <div style={{width:'300px', marginBottom:'2rem'}}>
                        Sorts applied:
                        <p style={{textDecoration:'underline'}}>{getSorts()} </p> 
                    </div>  
                : null}
                <Button svg='no' clear='clearSort' onClick={()=> {clearSort()}} choose='Clear sort' className={styles.chooseClothesSortButton}/>
                <div className={styles.chooseClothesSortBlock}>
                    <h1 className={styles.chooseClothesHeader} >Filters and Sorts</h1>
                    <div className={styles.dropdownforSort}>
                        <ChooseClothesDropdown onClick={setFilters} filters={filters} choose='Sort by'/>
                        <ChooseClothesDropdown choose='Choose size'/>
                        <ChooseClothesDropdown choose='Choose quality'/>
                    </div>
                </div>
            </div>
            <div className={styles.chooseClothesMain}>
                {sqlData.map((cloth, index)=> {
                    return(
                        <div key={index} className={styles.chooseSingleClothBlock}>
                            <ChooseClothesSingleCloth cloth={cloth} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
    onStoreFilters:(filters, setFilters) => dispatch({
        type:actionTypes.STORE_FILTERS,
        filters,
        setFilters
    }),
}}

const mapStateToProps = state => {
    return {
        filters:state.sort.filter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseClothes)
