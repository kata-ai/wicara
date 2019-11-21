import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { WicaraReset, Text, Paragraph } from '../../foundations';
import { StoryContainer, StoryHeader, StorybookWrapper } from '../../utils/storybook';

import SideSheet from './components/SideSheet';

const readme = require('./README.md');

const story = storiesOf('Core|Components/Side Sheet', module).addDecorator(StorybookWrapper);

story.add(
  'default',
  () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <WicaraReset>
        <StoryContainer>
          <StoryHeader
            title="Side Sheet"
            subtitle="Dialogs that pop out from the right side of the screen."
          />
          <Text as="p">Click the button below to open the side sheet.</Text>
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            Toggle Side Sheet
          </button>
          <SideSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Paragraph my={26} mx={48}>
              Basic Example
            </Paragraph>
          </SideSheet>
        </StoryContainer>
      </WicaraReset>
    );
  },
  {
    notes: { markdown: readme }
  }
);
