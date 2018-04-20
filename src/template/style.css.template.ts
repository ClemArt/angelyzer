export const cssTemplate = () => {
  return `body {
    font: 14px helvetica neue, helvetica, arial, sans-serif;
}
.toolbar {
    position: absolute;
    box-shadow: none;
    background: #1976d2;
    color: #fff;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    min-height: 64px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
}
.toolbox {
    position: absolute;
    z-index: 10;
    width: 20rem;
    height: 40rem;
    background: #1976d2;
    right: 5px;
    top: 70px;
    box-shadow: 4px 4px 10px 0px;
}
.toolbox-header {
    width:100%;
    height:100%;
    float:left;
    text-align:justify;
    margin-bottom:15px;
}
.title {
    float:left;
    width:80%;
    display:inline-block;
}
h4 {
    margin: 0;
    padding: 10px 10px;
    cursor: pointer;
    font-weight: 400;
    color: #fff;
    font-size: 16px;
    font-family: Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
    text-transform: uppercase;
}
.actions {
    width: 18%;
    float: left;
    margin-top: 5px;
    margin-right: 5px;
}
.actions>button {
    float: right;
}

.toolbar-row {
    padding: 0 16px 0 0;
    height: 64px;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
}

.toolbar-menu {
    flex-direction: row;
    align-items: center;
    width: 80%;
}

.menu-elements {
    list-style-position: inside;
    padding: 0;
    margin: 0;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    letter-spacing: .3px;
    align-items: center;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    list-style-type: disc;
    white-space: nowrap;
}
.menu-element {

    padding-bottom: 2px;
    list-style-type: none;
    cursor: pointer;
    letter-spacing: .3px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    display: list-item;
    text-align: -webkit-match-parent;
}
.menu-link {
    margin: 0;
    padding: 24px 16px;
    cursor: pointer;
    font-weight: 400;
    color: #fff;
    font-size: 16px;
    font-family: Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
    text-transform: uppercase;
    text-decoration: none;
}

#cy {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

table {
    border-spacing: 0;
    border-collapse: collapse;
    display: table;
    border-color: grey;
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
}
th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
    padding: 8px;
    line-height: 1.42857143;
}
td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
}
pre {
    background: #2a2827;
    color: #f7f7f7;
    line-height: 1.5;
}
.logo {
    padding: 20px;
    width: 150px;
    height: 40px;
}
.sticky {
    position: fixed;
    top: 0;
    width: 100%;
}
.sticky + .content {
    padding-top: 60px;
}`;
};