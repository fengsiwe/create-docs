import Listr from 'listr';

import { downloadTemplate } from './download-template';
import { initGit } from './git';
import { postInstall } from './postInstall';
import { optionService } from '../service';

export const task = async () => {
  const option = optionService.getOption();
  const tasks = new Listr([
    {
      title: 'Download Template',
      task: () => downloadTemplate(),
      enabled: () => !!option.template,
    },
    {
      title: 'Init Git',
      task: () => initGit(),
    },
  ]);
  await tasks.run();
};
