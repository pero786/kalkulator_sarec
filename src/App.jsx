import styles from './App.module.css';
import Kalkulator from './Kalkulator';

function App() {
  return (
    <>
    <div class={styles.App}>
    <h1>Kalkulator za izračun volumena geometrijskih tijela </h1>
    <Kalkulator/>
    </div>
    </>
  );
}

export default App;
