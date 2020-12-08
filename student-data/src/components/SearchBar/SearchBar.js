import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onChange }) => {
    return (
        <div className={styles.SearchBar}>
            <input
                type="search"
                placeholder={'Search by Name'}
                onChange={onChange}
            />
        </div>
    );
};

SearchBar.propTypes = {};

export default SearchBar;
