#!/usr/bin/env node
/* eslint-disable no-shadow */
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { get } from './cmds/mods/get.js';
import { search } from './cmds/mods/search.js';

// eslint-disable-next-line no-unused-expressions
yargs(hideBin(process.argv))
  .locale('en')
  .strictOptions()
  .command('mods', 'Search Mods', yargs => yargs
    .command('search', 'Search Mods', yargs => yargs
      .option('game-id', {
        type: 'number',
        demandOption: true,
      }), search)
    .command('get', 'Get Mods', yargs => yargs
      .option('mod-id', {
        type: 'number',
        demandOption: true,
      }), get)).argv;
