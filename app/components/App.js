import { React } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';
import Nav from './Nav';
import Results from './Results';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/popular' component={Popular} />
                        <Route exact path='/battle' component={Battle} />
                        <Route path='/battle/results' component={Results} />
                        <Route render={function () {
                            return <p>Not found</p>;
                        }} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;