```md filename="Button.stories.mdx" renderer="common" language="mdx"
import { Description } from '@storybook/addon-docs';

import dedent from 'ts-dedent';

import { Button } from './Button';

<Description of={Button} />

<Description markdown={dedent`
  
  ## Custom description

  Insert fancy markdown here.

`}/>
```