import logo from './logo.svg'
import './App.css'
import ImageComponent from './ImageComponent'
import ButtonComponent  from './ButtonComponent'

function App() {

  const stringhePerButtons = ["Hire me", "Dismiss"]
const faceBookPropicVincenzo = "https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/332322660_229280442872270_1966642424894709984_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=H2XKScBc7OMAX8W3FWL&_nc_ht=scontent-fco2-1.xx&oh=00_AfAxmQYPrm3MW0576BmY8MXAK_cWVeoFsbLr4tCV60gVCA&oe=65BD14AB"
  return (
    <div className="App">
      <header className="App-header">

        <h1 id="titleHeader">
          Hello React!
        </h1>
        <ImageComponent src={faceBookPropicVincenzo} alt={"Vincenzo :D"} />
        <div id="buttonWrapper">
      {stringhePerButtons.map((stringaPerButton) => (
        <ButtonComponent buttonText={stringaPerButton} alt={"Testo del bottone:" + stringaPerButton} />
        ))}
        </div>
        </header>

        
    </div>
  );
}

export default App
