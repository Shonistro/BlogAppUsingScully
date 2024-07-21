import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
    projectRoot: "./src",
    projectName: "try2my-blog",
    outDir: './dist/static',
    routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },
    }
  };