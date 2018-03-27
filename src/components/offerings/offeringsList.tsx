import * as React from 'react';
import { Link } from 'react-router-dom';
import {ipcRenderer} from 'electron';
import {fetchFactory} from '../../fetch';
const fetch = fetchFactory(ipcRenderer);
import {asyncReactor} from 'async-reactor';
import OfferingItem from './offeringItem';


function Loader() {

  return (<h2>Loading offerings ...</h2>);

}

async function AsyncOfferings (props: any){

    const endpoint = '/offerings' + (props.match.params.product === 'all' ? '' : `?productId=${props.match.params.product}`);
    const offerings = await fetch(endpoint, {method: 'GET'});
    console.log('OFFERINGS!!!', offerings);
    const title = 
        props.match.params.product === 'all'
        ? <h3>offerings list for all products</h3>
        : <h3>offerings list for product: {props.match.params.product}</h3>;
    const offeringsDOM = (offerings as any).map((offering: any) => <OfferingItem offering={offering} />);
    return <div> 
        {title}
        <hr />
        {offeringsDOM}
        <hr />
        <Link to={'/'}>back</Link>
    </div>;
}

export default asyncReactor(AsyncOfferings, Loader);