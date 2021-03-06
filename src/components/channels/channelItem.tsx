import * as React from 'react';
import { withRouter } from 'react-router-dom';

import ChannelUsage from './channelUsage';
import LinkToProductByOfferingId from '../products/linkToProductByOfferingId';
import ProductNameByOffering from '../products/productNameByOffering';
import PgTime from '../utils/pgTime';
import ChannelStatusStyle from './channelStatusStyle';
import ContractStatus from './contractStatus';
import Channel from './channel';
import ModalWindow from '../modalWindow';

export default withRouter(function(props:any){

    const elem = <tr>
        <td><ModalWindow customClass='' modalTitle='Service' text={props.channel.id} component={<Channel channel={props.channel} />} /></td>
        <td><LinkToProductByOfferingId offeringId={props.channel.offering} ><ProductNameByOffering offeringId={props.channel.offering} /></LinkToProductByOfferingId></td>
        <td>{props.channel.client}</td>
        <td> <ContractStatus contractStatus={props.channel.channelStatus} /></td>
        <td><ChannelStatusStyle serviceStatus={props.channel.serviceStatus} /></td>
        <td><ChannelUsage channelId={props.channel.id} /></td>
        <td>{(props.channel.receiptBalance/1e8).toFixed(3)}</td>
        <td><PgTime time={props.channel.serviceChangedTime} /></td>
    </tr>;
    return (elem);
});
