import styles from './App.module.css';
import Kalkulator from './Kalkulator';

function App() {
  return (
    <>
    <div class={styles.App}>
    <h1>Kalkulator za izračun volumemna geometrijskih tijela </h1>
    </div>
    <Kalkulator/>
    </>
  );
}

export default App;
