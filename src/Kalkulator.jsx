import { createSignal } from "solid-js";
import styles from './App.module.css';

export default function Kalkulator() {
    const [shape, setShape] = createSignal("kocka");
    const [firstNumber, setFirstNumber] = createSignal("");
    const [secondNumber, setSecondNumber] = createSignal("");
    const [result, setResult] = createSignal(null);
    const [error, setError] = createSignal("");

    function calculateVolume() {
        setError("");
        const num1 = parseFloat(firstNumber());
        const num2 = parseFloat(secondNumber());

        if (isNaN(num1) || num1 <= 0 || (shape() !== "kocka" && (isNaN(num2) || num2 <= 0))) {
            setError("Unesite ispravne, pozitivne brojeve za sve dimenzije.");
            return;
        }

        let volume;
        switch (shape()) {
            case "kocka":
                volume = Math.pow(num1, 3);
                break;
            case "valjak":
                volume = Math.PI * Math.pow(num1, 2) * num2;
                break;
            case "kvadar":
                volume = num1 * num2 * num2; 
                break;
            case "piramida":
                volume = (1 / 3) * Math.pow(num1, 2) * num2;
                break;
            default:
                volume = 0;
        }
        setResult(volume);
    }

    function submit(event) {
        event.preventDefault();
        calculateVolume();
    }

    return (
        <div>
            <select onChange={(e) => setShape(e.target.value)} value={shape()}>
                <option value="kocka">Kocka</option>
                <option value="valjak">Valjak</option>
                <option value="kvadar">Kvadar</option>
                <option value="piramida">Piramida</option>
            </select>

            <form onSubmit={submit}>
                <input 
                    type="number" 
                    name="firstNumber" 
                    placeholder={shape() === "kocka" ? "Stranica kocke" : "Osnova"} 
                    onInput={(event) => setFirstNumber(event.target.value)} 
                />
                
                {(shape() === "valjak" || shape() === "kvadar" || shape() === "piramida") && (
                    <input 
                        type="number" 
                        name="secondNumber" 
                        placeholder="Visina" 
                        onInput={(event) => setSecondNumber(event.target.value)} 
                    />
                )}

                <input type="submit" value="Izračunaj volumen" />
            </form>

            {error() && <div className={styles.error}>{error()}</div>}
            {result() !== null && <div>Volumen {shape()} je: {result()}</div>}
        </div>
    );
}