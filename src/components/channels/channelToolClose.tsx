import * as React from 'react';
import Button from '../button';

export default function(props:any){

    return <Button endpoint={'/closeChannel'} options={{method: 'post', body: {id: props.channelId}}} title={'close'}/>;

}