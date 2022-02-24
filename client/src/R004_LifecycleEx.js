import React, { Component } from 'react';

class R004_LifecycleEx extends Component {
    render() {
        console.log('3. render Call');
        return (
            <div>
                <h2>[THIS IS RENDER FUNCTION]</h2>
            </div>
        );
    }
}

export default R004_LifecycleEx;