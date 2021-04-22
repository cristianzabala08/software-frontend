import React from 'react'

function App(props) {
 
    const { Title, subTitle, dataimg ,link} = props;
    return (
        <div className="col-sm" >
            <div className="card border-text" >
                <img src={dataimg} className="card-img-top " alt="..." />
                <div className="card-body text-center ">
                    <h6 className="card-subtitle mb-2 text-muted text-uppercase">{Title}</h6>
                    <h6 className="card-subtitle mb-2 color-langues text-uppercase">{subTitle}</h6>

                </div>
                <button class="btn btn-danger roll-over" type="button">{link}</button>
               
               

            </div>
        </div>
    );
}

export default App;
