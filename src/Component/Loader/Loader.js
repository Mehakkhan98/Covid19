import React from 'react';
import GifLoader from 'react-gif-loader';
 
export default class ReactGifLoader extends React.Component {
    render() {
        return (
            <GifLoader
              
                loading={true}
                imageSrc="https://media.giphy.com/media/l378zKVk7Eh3yHoJi/source.gif"
                 imageStyle={{height:100,width:100,margintop:50}}
                 overlayBackground="rgba(0,0,0,0.5)"
            /> 
        );
    }
}