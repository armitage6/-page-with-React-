import Jumbotron from "./componentss/Jumbotron"
import Navbar from "./componentss/navbar"
import Cards from "./componentss/cards"
import Footer from "./componentss/footer"
import Carrusel from "./componentss/01"
const App = () => {
  return <>
     <Navbar />
     <div>
     <Carrusel />
     </div>
     <div className="container-fluid">
     
        <Jumbotron />
              
        <div className="container mb-4 mt-4">
               <div className="row"> 
                  <Cards img="https://picsum.photos/id/231/200/300" title="img" text="Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature"/>
                  <Cards img="https://picsum.photos/id/232/200/300" title="img" text="Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature"/>
                  <Cards img="https://picsum.photos/id/233/200/300" title="img" text="Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature"/>
                  <Cards img="https://picsum.photos/id/234/200/300" title="img" text="Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature"/>
                  <Cards img="https://picsum.photos/id/235/200/300" title="img" text="Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature"/>
                  <Cards img="https://picsum.photos/id/236/200/300" title="img" text="Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature"/>
               </div>
        </div>
              
       </div>  
         
        <Footer />
         


  </>
}





export default App