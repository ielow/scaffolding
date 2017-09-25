const path= require('path');
const HTMLWebpackPlugin= require('html-webpack-plugin');

module.exports={
	entry: './app/index.ts',
	output:{
		filename:'bundle.js',
		path: path.resolve(__dirname,'dist')
	},
	module:{
		       rules:[
		       		{
					test:/\.pug$/, 
					loaders:['html-loader','pug-html-loader']
				}
		       		
			       ]
	       },
	plugins:[
		new HTMLWebpackPlugin({
			title:'Scaffolding',
			hash:true,
			template:'./app/index.pug'
		})
		]
}
