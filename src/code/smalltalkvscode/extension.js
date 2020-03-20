// @ts-nocheck
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import * as webpack from 'webpack'
import * as next from '../../../next.config.js'
import { createFsFromVolume, Volume } from 'memfs'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "smalltalkvscode" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('smalltalk.createEnvironment', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		let panel = vscode.window.createWebviewPanel('smalltalk','Smalltalk',vscode.ViewColumn.One,{
enableScripts: true,
retainContextWhenHidden: true

		});
		let myWebpack = webpack(next.webpack({  entry: {index: './index.js'},
		target: 'node',
		module: {
		  rules: [
			{
			  test: /\.jsx?$/,
			  loader: 'babel-loader',
			  options: {presets: ["next/babel"]},
			  exclude: /node_modules/,
			},
		  ],
		},
		resolve: {
		  extensions: [ '.tsx', '.ts', '.js' ],
		},
		output: {
		  filename: '[name].js',
		  path: '/',
		},
		plugins: [
		
		  new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1,
		  }),
		],},{}));
		let fs = myWebpack.outputFileSystem = createFsFromVolume(new Volume());
		myWebpack.run(() => panel.webview.html = `<!DOCTYPE html><html><head></head><body><script>{let vscode = acquireVsCodeApi();${fs.readFileSync('/index.js')}}</script></body></html>`);
	});

	context.subscriptions.push(disposable);
}


// this method is called when your extension is deactivated
export function deactivate() {}
