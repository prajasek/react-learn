import React, {useRef, useCallback, useMemo, 
                useEffect,useLayoutEffect, useState, 
                useReducer, useContext} from 'react';
import PropTypes from 'prop-types';
import './index.css';
import {Routes, Route, Link} from 'react-router-dom';

const Example1 = () => {
    useEffect(()=> console.log("1 USEEffect"))

    console.log("Example1 called")
    return (
        <>
            <h1>Example 1</h1>
        </>
    )
}

const Example2 = () => {
    useEffect(()=> console.log("2 USEEffect"))

    console.log("Example2 called")

    return (
        <>
            <h1>Hello World2 </h1>
        </>
    )

}

export default Example1;
export {Example2};