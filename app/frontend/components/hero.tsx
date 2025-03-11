import styles from './hero.module.css'

export const Hero = () => {
    return (<header className={styles.header}>
        <h1 className={styles.mainHeading}>Vite</h1>
        <h2>Rails</h2>
        <h3>React</h3>
    </header>)
}
