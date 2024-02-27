import FotoPet from "./ImagensMain/NinaEOrpheu.jpg";
import "./Main.css";

function Main() {
  return (
    <main>
      <section>
        <img
          src={FotoPet}
          alt="Foto de dois cachorros deitados olhando pra frente"
        />
        <p>
          O amor puro e sincero não precisa de palavras. Latidos são
          suficientes...
        </p>
      </section>
    </main>
  );
}

export default Main;
