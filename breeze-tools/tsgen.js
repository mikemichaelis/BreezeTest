var tsGen = require('./tsgen-core');

tsGen.generate({
    inputFileName: './metadata.json',
    outputFolder: './src/client/app/shared/entities',
    camelCase: false,
    kebabCaseFileNames: true,
    baseClassName: 'EntityBase'
});
//     baseClassName: 'EntityBase'