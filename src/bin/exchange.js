#!/usr/bin/env node

import program from 'commander';
import hello from '..';

program
  .description('Cli for TDD workshop')
  .version('0.0.1')
  .arguments('<file1>')
  .action((file) => {
    console.log(file);
    hello();
  })
  .option('-f, --format [type]', 'Output format', 'stylish')
  .parse(process.argv);
