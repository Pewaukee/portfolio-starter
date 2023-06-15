// similar component to house navbar and footer
import React from 'react';

export default function CustomComponent ({left, center, right, styles}) {
    // expect 3 props exactly from prompt
    // to be positioned in respective places
    return (
        <div className={styles.main}>
            
            {/** left */}
            <div className={styles.leftContainer}>
                {left}
            </div>

            {/** center */}
            <div className={styles.centerContainer}>
                {center}
            </div>  

            {/** right */}
            <div className={styles.rightContainer}>
                {right}
            </div>

        </div>
    )

}