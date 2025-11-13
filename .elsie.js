/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/

module.exports = {
  name: 'demo-dropin',
  api: {
    root: './src/api',
    importAliasRoot: '@/demo-dropin/api',
  },
  components: [
    {
      id: 'Components',
      root: './src/components',
      importAliasRoot: '@/demo-dropin/components',
      cssPrefix: 'demo-dropin',
      default: true,
    },
  ],
  containers: {
    root: './src/containers',
    importAliasRoot: '@/demo-dropin/containers',
  },
  schema: {
    endpoint: process.env.ENDPOINT,
    headers: {}
  }
};
