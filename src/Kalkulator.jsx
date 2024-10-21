import { createSignal } from "solid-js";

export default function Kalkulator() {
    const [shape, setShape] = createSignal("kocka");
    const [firstNumber, setFirstNumber] = createSignal();
    const [secondNumber, setSecondNumber] = createSignal();
    const [result, setResult] = createSignal(null);

    function calculateVolume() {
        let volume;
        switch (shape()) {
            case "kocka":
                volume = Math.pow(firstNumber(), 3);
                break;
            case "valjak":
                volume = Math.PI * Math.pow(firstNumber(), 2) * secondNumber();
                break;
            case "kvadar":
                volume = firstNumber() * secondNumber() * secondNumber(); 
                break;
            case "piramida":
                volume = (1 / 3) * Math.pow(firstNumber(), 2) * secondNumber();
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
                
                {shape() === "valjak" || shape() === "kvadar" || shape() === "piramida" ? (
                    <input 
                        type="number" 
                        name="secondNumber" 
                        placeholder="Visina" 
                        onInput={(event) => setSecondNumber(event.target.value)} 
                    />
                ) : null }

                <input type="submit" value="Izračunaj volumen" />
            </form>

            {result() !== null ? <div>Volumen {shape()} je: {result()}</div> : null}
        </div>
    );
}