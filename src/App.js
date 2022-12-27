import './App.css';
import Results from './Results/Results';
import OrderedPosts from './OrderedPosts/OrderedPosts';

const posts = [
  {
    title: "Este artículo es ya de invierno",
    date: "2022-12-01T00:00:00"
  },
  {
    title: "Este artículo es de principio de año",
    date: "2022-01-01T00:00:00"
  },
  {
    title: "Este artículo es de verano",
    date: "2022-07-01T00:00:00"
  },
];

function App() {
  return (
    <div className="App">

      <h2>Lista de noticias ordenadas:</h2>
      <OrderedPosts posts={posts}></OrderedPosts>

      <h2>Resultados:</h2>
      <Results></Results>

    </div>
  );
}

export default App;
