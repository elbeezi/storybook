```js filename="Badge.stories.js|jsx|ts|tsx" renderer="common" language="js"
import { Badge } from './Badge';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Badge',
  component: Badge,
  argTypes: {
    status: {
      name: 'Badge Status',
      description: 'Available options available to the Badge',
      options: ['positive', 'negative', 'warning', 'error', 'neutral'],
      table: {
        defaultValue: {
          summary: 'positive',
        },
        type: {
          summary: 'Shows options to the Badge',
          detail: 'Listing of available options',
        },
      },
    },
    label: {
      name: 'Badge Content',
      description: 'Text shown by Badge',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'The label contents',
          detail: 'Text displayed by the Badge',
        },
      },
    },
  },
};
```
```md filename="Badge.stories.mdx" renderer="common" language="mdx"
import { ArgsTable, Canvas, Meta, Story } from '@storybook/addon-docs';

import { Badge } from './Badge';

<Meta
  title="MDX/Badge"
  argTypes={{
    status: {
      name: 'Badge Status',
      description: 'Available options available to the Badge',
      options: [
        'positive',
        'negative',
        'warning',
        'error',
        'neutral'
      ],
      table: {
        defaultValue: {
          summary: 'positive'
        },
        type: {
          summary: 'Shows options to the Badge',
          detail: 'Listing of available options'
        },
      },
    },
    label: {
      name: 'Badge Content',
      description: 'Text shown by Badge',
      control: {
        type: 'text'
      },
      table: {
        type: {
          summary: 'The label contents',
          detail: 'Text displayed by the Badge'
        }
      }
    }
  }}
  component={Badge}/>

### Badge

Let's define a story for our `Badge` component

<ArgsTable of={Badge} />

{/* remainder story implementation */}
```