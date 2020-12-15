import React, {useEffect, useState} from 'react';
import {Text, TextProps} from "./Themed";

export function HandText(props) {
    const [text, setTextVal] = useState('');
    let index = 0;
    let string = '';
        useEffect(() =>{
            let textInterval = setInterval(() => {
                string += props.children[index];
                setTextVal(text + string);
                if(index +1 == props.children.length)
                {
                    clearInterval(textInterval);
                }
                index++ ;
            },
          60 + 20 * Math.random())
        }, []);

    return <>
        <Text style={props.style}>
            { text }
        </Text>
    </>;
}
