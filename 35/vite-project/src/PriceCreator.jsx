import React, {useState} from 'react'

const PriceCreator = () => {
    const [pricesList, setPrices] = useState([]);
    const [priceName, setPriceName] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [priceDescription, setPriceDescription] = useState('');

    function AddPrice(){
        const newPrice ={
            name: priceName,
            value: priceValue,
            description: priceDescription
        }

        setPrices(pricesList=>[...pricesList, newPrice]);
        setPriceName('');
        setPriceValue('');
        setPriceDescription('');
    }
    function changeName(e){
        setPriceName(e.target.value);
    }
    function changeValue(e){
        setPriceValue(e.target.value);
    }
    function changeDescription(e){
        setPriceDescription(e.target.value)
    }

    function deletePrice(indexEl){
        setPrices(pricesList=>pricesList.filter((item, index) => index != indexEl));
    }
    function setExampleValues(){
        setPriceName('Pro');
        setPriceValue('4.99');
        setPriceDescription('20 users included&#10;10 GB of storage&#10;Priority email support&#10;Help center access');
    }

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-6">
                <div className="mb-3">
                    <span>Plan Name</span><br/>
                    <input 
                    placeholder='ex: Start/Pro/Advanced' 
                    type="text"
                    onChange={changeName}
                    value={priceName} />
                </div>
                <div className="mb-3">
                    <span>Plan Price</span><br/>
                    <input 
                    placeholder='ex: 1.99/4.99/12.99' 
                    type="text"
                    onChange={changeValue}
                    value={priceValue} />
                </div>
                <div className="mb-3">
                    <span>Plan Price</span><br/>
                    <textarea  
                    className='create-description'
                    type="text"
                    onChange={changeDescription}
                    value={priceDescription}
                    placeholder=
                    'ex:&#10;20 users included&#10;10 GB of storage&#10;Priority email support&#10;Help center access'  />
                </div>
                <div className="mb-3">
                    <button className="btn btn-success" onClick={AddPrice}>Create</button>
                    <button className="btn btn-primary" onClick={setExampleValues}>Set Example Values</button>
                </div>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="card-deck mb-3 text-center row">
        {pricesList.map((item, index)=>{
            return <div key={index} className="card col-4 box-shadow">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{item.name}</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">{item.value}$<small className="text-muted">/month</small></h1>
                    <p className='description'>{item.description}</p>

                    <button type="button" className="btn btn-danger" onClick={() => deletePrice(index)}>Delete</button><hr/>
                    <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                </div>
            </div>
        })}
        </div>
      </div>
    </div>
  )
}

export default PriceCreator
