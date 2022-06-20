import './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import style from "./App.module.css"

function App(props) {
  return (
    <div className={style.App}>
      <Header />
      <main>
      <Content TaskState={props.state.tasksPage} dispatch={props.dispatch} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
