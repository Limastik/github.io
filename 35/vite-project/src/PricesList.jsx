import React, {useState} from "react";

function PricesList(props){

    return (
    <div className="container">
        <div className="card-deck mb-3 text-center row">

            <div className="card col-4 box-shadow">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Pro</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                    </ul>

                    <button type="button" class="btn btn-danger">Delete</button><hr/>
                    <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                </div>
            </div>

            <div className="card col-4 box-shadow">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Pro</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                </div>
            </div>

            <div className="card col-4 box-shadow">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Pro</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                </div>
            </div>

        </div>
      </div>
    );
}

export default PricesList;