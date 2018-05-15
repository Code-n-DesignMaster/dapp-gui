import * as React from 'react';
import {asyncReactor} from 'async-reactor';

function Loader() {

  return (<h4>Loading info ...</h4>);

}

async function AsyncProductView(props:any){

    return <div>
        <table className='table table-striped'>
            <tbody>
                <tr><td>name:</td><td>{props.product.name}</td></tr>
                <tr><td>dns:</td><td>{}</td></tr>
                <tr><td>ip address:</td><td>{}</td></tr>
                <tr><td>additional_params:</td><td>{}</td></tr>
            </tbody>
        </table>
    </div>;
}

export default asyncReactor(AsyncProductView, Loader);
