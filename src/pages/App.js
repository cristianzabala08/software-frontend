
import '../css/App.css';
import Carview from '../components/cardView';
import FrançaisGeneral from '../img/centre-langues-Francais-general-300x200.jpg';
import ENFANTS from '../img/Cours-francais-Enfants2-300x225.jpg';
import spécialis from '../img/centre-langues-Francais-specialise-300x200.jpg';
import ATELIERS from '../img/centre-arts-peinture-eau-212x300.jpg';

function App() {
  let data = [
    { "Title": "COURS DE", "subTitle": "Français GÉNÉRAL", "dataimg": FrançaisGeneral, "link":"VOIR LES COURS ->" },
    { "Title": "COURS POUR", "subTitle": "ENFANTS", "dataimg": ENFANTS,"link":"VOIR LES COURS ->" },
    { "Title": "COURS DE", "subTitle": "Français spécialis", "dataimg": spécialis,"link":"VOIR LES COURS ->" },
    { "Title": "DÉCOUVREZ", "subTitle": "NOS ATELIERS", "dataimg": ATELIERS ,"link":"VOIR LES COURS ->"}
  ];


  console.log(data)


  return (

    <>

      <section id="section-apprendre" className="homepage">
        <div className="container">

        </div>
      </section>


      <div className="container">
        <div className="row ">
          <div className="col-sm text-center">
            <h2 className="homepage-title--alt2 color-langues">Apprendre le français</h2>
            <p className="homepage-descrip">Le centre de langues de
            l’Alliance française de Bangkok propose une large gamme de cours de
            français, répondant ainsi aux besoins des quelque 1 200 étudiants qui
                            fréquentent chaque trimestre ses locaux.</p>
          </div>
        </div>
        <div className="row">

          {
            data.map((item, idex) => {
              return (
                <Carview  key={idex} Title={item.Title} subTitle={item.subTitle} dataimg={item.dataimg} link={item.link} />
              )
            })
          }
        </div>
      </div>

    </>
  );
}

export default App;
