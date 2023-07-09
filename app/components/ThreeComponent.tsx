export default function ThreeComponent ({left, center, right, styles}) {
    // expect 3 props exactly from prompt
    // to be positioned in respective places

    /**
     * question mark styling for optional styles prop
     */
    return (
        <div className={styles ? styles.main : ""}>
            
            {/** left */}
            <div className={styles ? styles.leftContainer : ""}>
                {left}
            </div>

            {/** center */}
            <div className={styles ? styles.centerContainer : ""}>
                {center}
            </div>  

            {/** right */}
            <div className={styles ? styles.rightContainer : ""}>
                {right}
            </div>

        </div>
    )
}