import React, { useState } from 'react';
import styles from './StudentDataFilter.module.css';
import StudentDataContainer from '../StudentDataContainer/StudentDataContainer';
import StudentDatabase from '../data/StudentDatabase';
import SearchBar from '../SearchBar/SearchBar';

function StudentDataFilter() {
    const [searchFilter, setSearchFilter] = useState('');
    const handleChange = (e) => {
        setSearchFilter(e.target.value);
    };

    function filterStudent(students) {
        return students.filter((student) =>
            student.name.toLowerCase().includes(searchFilter.toLowerCase())
        );
    }
    let finalFiltered = filterStudent(StudentDatabase);
    return (
        <div className={styles.StudentDataFilter}>
            <SearchBar onChange={handleChange} />
            {finalFiltered.length > 0 ? (
                filterStudent(StudentDatabase).map((student) => (
                    <StudentDataContainer
                        name={student.name}
                        age={student.age}
                        course={student.course}
                    />
                ))
            ) : (
                <div className={styles.NoResult}> No results found! </div>
            )}
        </div>
    );
}

StudentDataFilter.propTypes = {};

export default StudentDataFilter;
