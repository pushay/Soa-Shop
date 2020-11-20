import React, {useEffect} from 'react';
import styles from './NavigationMenu.module.css';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import NavigationMenuList from './NavigationMenuList/NavigationMenuList';

function NavigationMenu(props) {

     const changeNavHandler = (event) => {
         if (event.target.scrollingElement.scrollTop > 1) { 
            const change = document.getElementById('navId');
            change.style.top = '0';
            change.style.borderBottom = '0.5px solid rgb(218, 214, 214)'
         }
         else if (event.target.scrollingElement.scrollTop < 100) {
            const change = document.getElementById('navId');
            change.style.top = '2.7rem';
            change.style.borderBottom= 'none'
         }
    }

    useEffect(()=> {

        if (props.position == 'main'){
            window.addEventListener('scroll', changeNavHandler);
            return (() => {
            window.removeEventListener('scroll', changeNavHandler)
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    if (props.position == 'main'){
        return (
            <div id='navId' style={{ backgroundColor: '#fff' }} className={styles.navigationMenu} >
                <NavigationMenuList navigation='NavigationMenuMain' including='basic' />
                <div className={styles.navigationMenuLogo}>
                     <h1 className={styles.navigationMenuLogoHeader}>Soa Shop</h1>
                </div>
                <NavigationMenuList navigation='NavigationMenuSecondary' styling='normal' svg='yes' including='svg' />
                <HamburgerMenu />
            </div>
         )
    }

    if (props.position == 'bottom') {
        
        return(
            <div className={styles.navigationBottomInformation}>
                <NavigationMenuList navigation='NavigationMenuBottom' styling='normal' with="More Information"  />
                <NavigationMenuList navigation='NavigationMenuFurther' styling='normal' with='About' />
            </div>     
        )
    }
}

export default NavigationMenu
