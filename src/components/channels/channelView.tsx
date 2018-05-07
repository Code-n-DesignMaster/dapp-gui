import * as React from 'react';
// import ChannelStatus from './channelStatus';
// import EndpointView from '../endpoints/endpointView';

export default function(props:any){
/*
    return <div> channel view component
        status: <ChannelStatus channelId={props.channel.id} /> <br />
        endpoint: <EndpointView channelId={props.channel.id} />
    </div>;
*/
    return <div className='col-lg-9 col-md-8 col-sm-12 col-xs-12 m-b-20'>
        <div className='card m-b-20'>
            <h5 className='card-header'>General info</h5>
            <div className='col-md-12 col-sm-12 col-xs-12 p-0'>
                <div className='card-body'>
                    <table className='table table-striped'>
                        <tbody>
                            <tr><td width='30%'>Id:</td><td>{props.channel.id}</td></tr>
                            <tr><td>Server:</td><td>[[ server ]]</td></tr>
                            <tr><td>Offering:</td><td>{props.channel.offering}</td></tr>
                            <tr><td>Contract Status:</td><td>{props.channel.channelStatus}</td></tr>
                            <tr><td>Service Status:</td><td>{props.channel.serviceStatus}</td></tr>
                            <tr><td>Usage:</td><td>[[ 120 Mb ]]</td></tr>
                            <tr><td>Income:</td><td>[[ 14 PRIX ]]</td></tr>
                            <tr><td>Deposit:</td><td>{props.channel.totalDeposit}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className='card m-b-20'>
            <h5 className='card-header'>Access info</h5>
            <div className='col-md-12 col-sm-12 col-xs-12 p-0'>
                <div className='card-body'>
                    <table className='table table-striped'>
                        <tbody>
                            <tr><td width='30%'>Country:</td><td><img src='images/country/ua.png' width='30px'/></td></tr>
                            <tr><td>Hostname:</td><td>[[ ip ]]</td></tr>
                            <tr><td>port:</td><td>[[ 443 ]]</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>;
}
