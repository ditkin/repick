import React, {Component} from 'react';
import LeftPanel from './LeftPanel';

class App extends Component {

    render() {
        return (
            <div className="App u-margin">
                <div className="Grid Grid--gutter">
                    <div className="Grid-item u-size1of4">
                        <LeftPanel/>
                    </div>
                    <div className="Grid-item u-size3of4">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
