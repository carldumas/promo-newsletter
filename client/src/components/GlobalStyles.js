import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: Arial, Helvetica, sans-serif;
  }

  html, body {
    max-width: 100vw;
  }


  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  body {
    line-height: 1.25;
    background: #E8E8E8;
    color: white;
  }

  h1 {
    font-weight: 400;
  }

  h2 {
    font-weight: 300 bold;;
    padding: 12px 0 10px;
  }

  h3 {
    font-weight: 200 bold;
    padding: 12px 0 10px;
  }

  h4 {
    font-weight: 100 bold;
    padding: 12px 0 10px;
  }

  p {
    padding-bottom: 6px;
  }

/* Navigation - sets bkgd color and no bullets on 1st level tabs */

  .menu li {
    display: block;
    list-style-type: none;
    flex-grow: 1;
    background-color: #575555;
    color: #fff;
  }

  /* sets color of links and padding on 1st level tabs */

  .menu li a {
    display: flex;
    text-decoration: none;
    color: #fff;
    justify-content: left;
  }

  .menu li:hover {
    background: #383838;
  }

  /* sets color of dropdown link on hover */

  nav ul ul {
    display: none;
    position: absolute;
    z-index: 10;
  }

  /* shows sub-nav menu on hover */

  nav ul li:hover > ul {
    display: flex;
    flex-flow: column wrap;
    flex-shrink: 1;
    padding-left: 0;
  }

  /* sets styles for sub-nav menu on hover */

  nav ul li:hover > ul li {
    border-top: 1px solid #454545;
  }

  nav ul li:hover > ul li a {
    display: flex;
    text-decoration: none;
    justify-content: flex-start;
    padding-left: 20px;
    padding-right: 20px;
  }

  .menu > li {
    position: relative;
  }

  .menu > li:last-child .sub-menu {
    right: -24px;
  }
`;
