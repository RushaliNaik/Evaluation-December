import React from 'react';
import styles from './StudentDataContainer.module.css';

const StudentDataContainer = ({ name, age, course }) => {
    return (
        <div className={styles.StudentDataContainer}>
            <div className={styles.Name}> Name: {name} </div>
            <div className={styles.Age}> Age: {age} </div>
            <div className={styles.Course}> Course: {course} </div>
        </div>
    );
};

StudentDataContainer.propTypes = {};

export default StudentDataContainer;
