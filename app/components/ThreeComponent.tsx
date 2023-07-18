export default function ThreeComponent ({left, center, right, styles}) {
    // expect 4 props exactly from prompt
    // to be positioned in respective places

    // styles could be a desconstruced object
    /**
     * styles: {
     *   main: '',
     *   leftContainer: '',
     *   centerContainer: '',
     *   rightContainer: ''
     * }
     */

    /**
     * question mark styling for optional styles prop
     */
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