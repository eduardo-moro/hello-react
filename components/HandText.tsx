import * as React from 'react';

export function HandText(props) {
    startCounter(props);
    return(
        <div id="test"></div>
    );
}


function startCounter(props)
{
    let index = 0
    let text = window.setInterval(
        () => {
            document.getElementById('test').innerText += props["children"][index];
                if(index +1 == props["children"].length)
                {
                    clearInterval(text);
                }
            index++;
        },
      80 + 20 * Math.random()
    )
}