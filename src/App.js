import Card from "./TA1/Card";
import CardPropChildren from "./TA2/CardPropChildren";
function App() {
  return (
    <div className="App">
      <Card 
      titulo = {"Card 1"}
      descripcion = {"Esta es la primera Card"}
      personaAsignada = {"Francisco"}
      fechaInicio = {"12-07-2022"}
      fechaFin = {"12-08-2023"}
      />
      <Card 
      titulo = {"Card 2"}
      descripcion = {"Esta es la segunda Card"}
      personaAsignada = {"Mario"}
      fechaInicio = {"12-06-2022"}
      fechaFin = {"12-09-2024"}
      />
      <Card 
      titulo = {"Card 3"}
      descripcion = {"Esta es la tercera Card"}
      personaAsignada = {"Juancito voldemor"}
      fechaInicio = {"12-09-2023"}
      fechaFin = {"12-02-2024"}
      />
      <CardPropChildren>
            <h1>Card 4 mediante PropsChildren</h1>
            <h2>Esta es la cuarta card</h2>
            <h3>Carmen</h3>
            <h3>27-00-03</h3>
            <h3>30-00-34</h3>
      </CardPropChildren>
    </div>
  );
}

export default App;
