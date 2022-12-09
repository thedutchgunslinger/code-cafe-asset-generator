#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import {exec} from 'child_process';
import {createSpinner} from 'nanospinner';
import express from 'express';
import cors from 'cors';
import { resolve } from 'path';

const app = express();
const PORT = 3001;

app.use(cors());
app.listen(PORT, () => console.log('server gestard'));






	app.get('/lowerThirdValue', (req, res) => {
		res.status(200).send({
			value: text.text,
		});
	});
	


	app.get('/qrCodeValue', (req, res) => {
		res.status(200).send({
			value: text.url,
		});
	});


	app.get('/subPercValue', (req, res) => {
		res.status(200).send({
			value: text.percent,
		});
	});
	
	app.get('/titleCard', (req, res) => {
		res.status(200).send({
			value: text.text,
		});
	});
	


exec("npm run preview");