import React from 'react'
import { createQueryObject } from '../helper/helper';
import { FaListUl } from 'react-icons/fa';

import styles from './SideBar.module.css'
import { categores } from '../constants/List';

const SideBar = ({ query, setQuery }) => {
 

    const categoriHandler = (e) => {
        const { tagName } = e.target;
        const category = e.target.innerText.toLowerCase();
        if (tagName !== 'LI') return;
        setQuery((query) => createQueryObject(query, { category }))
    };


    return (
        <>
            <div className={styles.sidebar}>
                <div>
                    <FaListUl />
                    <p>دسته بندی</p>
                </div>
                <ul onClick={categoriHandler}>
                    {
                        categores.map((item) => (
                            <li
                                key={item.id}
                                className={item.type.toLowerCase() === query.category
                                    ? styles.selected
                                    : null
                                }
                            >
                                {item.type}
                            </li>)
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default SideBar