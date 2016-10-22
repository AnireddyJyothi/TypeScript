// @filename: file.tsx
// @jsx: preserve
// @module: amd
// @noLib: true
// @libFiles: react.d.ts,lib.d.ts

import React = require('react')
declare function OneThing(): JSX.Element;
declare function OneThing(l: {yy: number, yy1: string}): JSX.Element;

let obj = {
    yy: 10,
    yy1: "hello"
}

let obj1 = {
    yy: true
}

let defaultObj = undefined;

// OK
const c1 = <OneThing />
const c2 = <OneThing {...obj}/>
const c3 = <OneThing {...{}} />
const c4 = <OneThing {...obj1} {...obj} />
const c5 = <OneThing {...obj1} yy={42} />
const c6 = <OneThing {...obj1} {...{yy: 10000, yy1: "true"}} />
const c7 = <OneThing {...defaultObj} yy {...obj}/>;  // No error. should pick second overload
