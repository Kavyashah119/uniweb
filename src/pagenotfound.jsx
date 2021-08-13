import React, {Component} from 'react';
import pagenotfounds from '../src/pagenotfoundAuthorized.css';
class pagenotfound extends Component{
    render() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
          <title>404 HTML Template by Colorlib</title>
          {/* Google font */}
          <link href="https://fonts.googleapis.com/css?family=Montserrat:700,900" rel="stylesheet" />
          {/* Custom stlylesheet */}
          <link type="text/css" rel="stylesheet" href={pagenotfounds.css} />
          {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
          {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
          {/*[if lt IE 9]>
            
            
          <![endif]*/}
          <div id="notfound">
            <div className="notfound">
              <div className="notfound-404">
                <h1>404</h1>
                <h2>Page not Found</h2>
              </div>
              <a href="/">Homepage</a>
            </div>
          </div>
          {/* This templates was made by Colorlib (https://colorlib.com) */}
        </div>
      )}
}

  export default pagenotfound;