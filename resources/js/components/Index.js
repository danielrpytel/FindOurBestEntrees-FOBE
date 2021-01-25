import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class fobe extends Component{
    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">React Component</div>

                            <div className="card-body">I'm an example REACT component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('fobe')) {
    ReactDOM.render(<fobe />, document.getElementById('fobe'));
}