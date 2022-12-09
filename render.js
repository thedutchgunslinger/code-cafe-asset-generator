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

console.log(chalk.bgGreenBright.bold('CodeCafé Video Asset Generator'));
await chooseAsset();
async function chooseAsset() {
	const chosenAsset = await inquirer.prompt({
		name: 'asset',
		type: 'list',
		message: 'kies een asset om te renderen!\n',
		choices: ['LowerThird','Outro','TitleCard', 'QRcode', 'SubsciberPercentage'],
	});
	return loadAssetOptions(chosenAsset.asset);
}

async function loadAssetOptions(asset) {
	if (asset === 'LowerThird') {
		renderLowerThird();
	} else if (asset === 'QRcode') {
		renderQrCode();
	} else if (asset === 'SubsciberPercentage') {
		renderSubsciberPercentage();
	} else if (asset === 'TitleCard') {
		renderTitleCard();
	} else if (asset === 'Outro') {
		renderOutro();
	}
}

async function renderLowerThird() {
	const text = await inquirer.prompt({
		name: 'text',
		type: 'input',
		message: 'Vul de tekst voor de lowerthird in:',
	});
	if (text.text == null || text.text == '') {
		text.text = 'Test Title';
	}
	app.get('/lowerThirdValue', (req, res) => {
		res.status(200).send({
			value: text.text,
		});
	});
	const spinner = createSpinner('rendering video asset').start();

	var os = new os_func();

	os.execCommand('npm run lowerThird', function () {
		spinner.success({
			text:
				'video is gerendered en hier te vinden: ' +
				chalk.greenBright(resolve('./out/Lower-Third.mp4')),
		});
		process.exit(0);
	});
	
}

async function renderQrCode() {
	const text = await inquirer.prompt({
		name: 'url',
		type: 'input',
		message: 'Vul de url voor de QRcode in:',
	});
	if (text.url == null || text.url == '') {
		text.url = 'https://discord.com/invite/xwv8ptXUdh';
	}
	app.get('/qrCodeValue', (req, res) => {
		res.status(200).send({
			value: text.url,
		});
	});
	const spinner = createSpinner('rendering video asset').start();

	var os = new os_func();

	os.execCommand('npm run qrCode', function () {
		spinner.success({
			text:
				'video is gerendered en hier te vinden: ' +
				chalk.greenBright(resolve('./out/QR-Code.mp4')),
		});
		process.exit(0);
	});
}

async function renderSubsciberPercentage() {
	const text = await inquirer.prompt({
		name: 'percent',
		type: 'input',
		message: 'Vul het percentage van geabboneerde kijkers in:',
	});
	if (text.percent == null || text.percent == '') {
		text.percent = 75;
	}
	app.get('/subPercValue', (req, res) => {
		res.status(200).send({
			value: text.percent,
		});
	});
	const spinner = createSpinner('rendering video asset').start();

	var os = new os_func();

	os.execCommand('npm run subPerc', function () {
		spinner.success({
			text:
				'video is gerendered en hier te vinden: ' +
				chalk.greenBright(resolve('./out/Subscriber-Percent.mp4')),
		});
		process.exit(0);
	});
}

async function renderTitleCard() {
	const text = await inquirer.prompt({
		name: 'text',
		type: 'input',
		message: 'Vul de tekst voor de lowerthird in:',
	});
	if (text.text == null || text.text == '') {
		text.text = 'Test Title';
	}
	app.get('/titleCard', (req, res) => {
		res.status(200).send({
			value: text.text,
		});
	});
	const chosenAsset = await inquirer.prompt({
		name: 'asset',
		type: 'list',
		message: 'kies een asset om te renderen!\n',
		choices: ['Landscape', 'Portrait'],
	});

	if(chosenAsset.asset == 'Landscape'){
		const spinner = createSpinner('rendering video asset').start();

		var os = new os_func();

		os.execCommand('npm run titleCardLandscape', function () {
			spinner.success({
				text:
					'video is gerendered en hier te vinden: ' +
					chalk.greenBright(resolve('./out/Title-Card-Landscape.mp4')),
			});
			process.exit(0);
		});
	} else {
		const spinner = createSpinner('rendering video asset').start();

		var os = new os_func();

		os.execCommand('npm run titleCardPortrait', function () {
			spinner.success({
				text:
					'video is gerendered en hier te vinden: ' +
					chalk.greenBright(resolve('./out/Title-Card-Portrait.mp4')),
			});
			process.exit(0);
		});
	}
}
async function renderOutro() {
	const chosenAsset = await inquirer.prompt({
		name: 'asset',
		type: 'list',
		message: 'kies een asset om te renderen!\n',
		choices: ['Landscape', 'Portrait'],
	});

	if (chosenAsset.asset == 'Landscape') {
		const spinner = createSpinner('rendering video asset').start();

		var os = new os_func();

		os.execCommand('npm run outro', function () {
			spinner.success({
				text:
					'video is gerendered en hier te vinden: ' +
					chalk.greenBright(resolve('./out/Outro.mp4')),
			});
			process.exit(0);
		});
	} else {
		const spinner = createSpinner('rendering video asset').start();

		var os = new os_func();

		os.execCommand('npm run outroPortrait', function () {
			spinner.success({
				text:
					'video is gerendered en hier te vinden: ' +
					chalk.greenBright(resolve('./out/Outro-Portrait.mp4')),
			});
			process.exit(0);
		});
	}
}


function os_func() {
	this.execCommand = function (cmd, callback) {
		exec(cmd, (error, stdout, stderr) => {
			if (error) {
				console.error(`exec error: ${error}`);
				return;
			}

			callback(stdout);
		});
	};
}
