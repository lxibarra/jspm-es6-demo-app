'use strict';

import jade from './view.jade!';

class jadeHtml {
    constructor() {

        document.getElementById('header').innerHTML = jade();



    }
}

export default new jadeHtml();