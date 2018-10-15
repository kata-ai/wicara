import * as React from 'react';
import { setAddon, storiesOf, StoryDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';

import Badge from '../src/components/Badge';

setAddon(JSXAddon);

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components/Badge', module).addDecorator(StoryWrapper);

const info = `
## Install

~~~sh
# yarn
yarn add @kata-kit/badge
# npm
npm install @kata-kit/badge
~~~

## Usage

~~~jsx
import { Badge } from '@kata-kit/badge';

<Badge color="default" message="text" />
~~~
`;

story.addWithJSX(
  'Documentation',
  wInfo(info, { propTables: [Badge] })(() => (
    <div>
      <Badge>entity</Badge> <Badge color="primary">primary</Badge>{' '}
      <Badge color="secondary">secondary</Badge>{' '}
      <Badge color="success">success</Badge>{' '}
      <Badge color="warning">warning</Badge>{' '}
      <Badge color="danger">danger</Badge>{' '}
    </div>
  )),
  { skip: 2 }
);