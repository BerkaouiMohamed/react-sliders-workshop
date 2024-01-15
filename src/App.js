
import './App.css';
import Slider from './Slider';
import Sliderback from './Sliderback';

function App() {
  let images=[
    "https://i5.walmartimages.com/asr/403de950-3d65-43c6-8ebf-c2b483e718d1.f04f146bad3c8f5f7b31115bfccced70.jpeg",
    "https://i5.walmartimages.com/asr/757e97db-93ea-4abb-8748-a235a2bfc59b.680f6a21fc41fab6a2cf03d5285d1a8d.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
    "https://th.bing.com/th/id/OIP.njebSPrDLOA2qPlH5nAkCAHaHa?w=800&h=800&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.0d65f27a3e5e918a9b9b927932a7f0c3?rik=0qbvpTRwKlBAxw&riu=http%3a%2f%2fimg.game.co.uk%2fml2%2f7%2f3%2f7%2f2%2f737296_pcw_a.png&ehk=e%2booIYdK56QT6g3njiOYn3PUtNfvbBtwzkY9%2bAnj9ow%3d&risl=&pid=ImgRaw&r=0"
  ]

  return (
    <div className="App">

      <h1>Slider</h1>
   <Slider images={images}/>
   <Sliderback images={images} />
    </div>
  );
}

export default App;
