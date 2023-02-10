

const Cards = ( props ) => {
    return (
      
     <div className="col-xl-4 col=md-4 col-sm-4 col-xs-12 my-4">
        <div className="card"  >
      
            <img src={props.img}className="card-img-top" alt="..."/>
             <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                 <p className="card-text">{props.text}</p>
                 <a href="/#" className="btn btn-primary">Go somewhere</a>
             </div>
         </div> 
      </div>
   )
    
}





export default Cards