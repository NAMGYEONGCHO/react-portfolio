import React, { Component } from 'react';

import DropBox from './components/DropBox';
import './styles/Buttons.css'

class Buttons extends Component {

    render() {
        const options1 = [{
            name: 'users',
            link: '/users'
        }, {
            name: 'todos',
            link: '/todos'
        }];
        const options2 = [{
            name: 'buttons',
            link: '/buttons'
        }];

        return (
            <div>
                <DropBox name="First one" options={options1} />
                <DropBox name="Other one" additionalClasses="right" options={options2} />

                {/* Footer */}
                <footer>
                    <DropBox name="Footer Dropbox" options={options1} />
                </footer>
            </div>
        );
    }
}

export default Buttons;