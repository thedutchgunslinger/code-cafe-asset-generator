#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
console.log(chalk.bgGreenBright.bold('CodeCafé Video Asset Generator'));
await chooseAsset();
async function chooseAsset() {
	const chosenAsset = await inquirer.prompt({
		name: 'asset',
		type: 'list',
		message: 'kies een asset om te renderen!\n',
		choices: ['LowerThird', 'QRcode'],
	});
	return loadAssetOptions(chosenAsset.asset);
}
async function loadAssetOptions(asset) {
	if (asset === 'LowerThird') {
		renderLowerThird();
	} else if (asset === 'QRcode') {
		renderQrCode();
	}
}
async function renderLowerThird() {
	const text = await inquirer.prompt({
		name: 'text',
		type: 'input',
		message: 'Vul de tekst voor de lowerthird in',
	});
	if (text.text == null || text.text == '') {
		text.text = 'Test Title';
	}
	console.log(text.text);
}
async function renderQrCode() {
	const text = await inquirer.prompt({
		name: 'url',
		type: 'input',
		message: 'Vul de url voor de QRcode in',
	});
	if (text.url == null || text.url == '') {
		text.url = 'https://discord.com/invite/xwv8ptXUdh';
	}
	console.log(text.url);
}
