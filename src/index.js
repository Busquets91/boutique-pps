import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

var express = require('express');
var browserify = require('browserify');
var React = require('react');
var jsx = require('node-jsx');
var app = express();  

const app = document.getElementById('root');

ReactDOM.render(<Layout/>, app);
