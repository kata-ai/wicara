import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../utils/storybook';
import OutlineButton from './OutlineButton';
import { Stack, Paragraph } from '../../foundations';

const readme = require('./README.md');

const stories = storiesOf('Core|Components/Button/OutlineButton', module).addDecorator(SystemWrapper);

stories.add(
  'basic',
  () => (
    <SystemBlock
      title="Outline Button"
      subtitle={
        <Stack spacing="xxs">
          <Paragraph>Outline-styled button for alternate styling.</Paragraph>
          <Paragraph>
            <strong>NOTE:</strong> This button type has been deprecated.
          </Paragraph>
        </Stack>
      }
    >
      <ComponentBlock title="Default Button" withBackground>
        <OutlineButton type="button" style={{ marginRight: 16 }} size="sm" onClick={action('button-click')}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" style={{ marginRight: 16 }} onClick={action('button-click')}>
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Primary Button" withBackground>
        <OutlineButton
          type="button"
          variant="primary"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" style={{ marginRight: 16 }} onClick={action('button-click')}>
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Success Button" withBackground>
        <OutlineButton
          type="button"
          variant="success"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="success" style={{ marginRight: 16 }} onClick={action('button-click')}>
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Warning Button" withBackground>
        <OutlineButton
          type="button"
          variant="warning"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="warning" style={{ marginRight: 16 }} onClick={action('button-click')}>
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Destructive Button" withBackground>
        <OutlineButton
          type="button"
          variant="destructive"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="destructive" style={{ marginRight: 16 }} onClick={action('button-click')}>
          Push Me
        </OutlineButton>
      </ComponentBlock>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);

stories.add(
  'button states',
  () => (
    <SystemBlock title="Button States" subtitle="Left to right: default, hover, focus, disabled, loading">
      <ComponentBlock title="Default Button" withBackground>
        <OutlineButton type="button" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </OutlineButton>
        <OutlineButton type="button" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Primary Button" withBackground>
        <OutlineButton type="button" variant="primary" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </OutlineButton>
        <OutlineButton type="button" variant="primary" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Success Button" withBackground>
        <OutlineButton type="button" variant="success" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="success" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="success" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="success" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </OutlineButton>
        <OutlineButton type="button" variant="success" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Warning Button" withBackground>
        <OutlineButton type="button" variant="warning" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="warning" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="warning" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="warning" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </OutlineButton>
        <OutlineButton type="button" variant="warning" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Destructive Button" withBackground>
        <OutlineButton type="button" variant="destructive" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="destructive" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="destructive" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="destructive" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </OutlineButton>
        <OutlineButton type="button" variant="destructive" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </OutlineButton>
      </ComponentBlock>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);

stories.add(
  'additional props',
  () => (
    <SystemBlock title="Button Props" subtitle="Additional props to modify the look of the button.">
      <ComponentBlock title="Block Button" withBackground>
        <OutlineButton type="button" variant="primary" block>
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Loading" withBackground>
        <OutlineButton type="button" size="sm" variant="primary" isLoading style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" isLoading>
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="With Icons (left)" withBackground>
        <OutlineButton
          type="button"
          size="sm"
          variant="primary"
          icon={IconPen}
          iconPosition="left"
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" icon="add" iconPosition="left">
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="With Icons (right)" withBackground>
        <OutlineButton
          type="button"
          size="sm"
          variant="primary"
          icon={IconPen}
          iconPosition="right"
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" icon={IconPen} iconPosition="right">
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="With Icons (block)" withBackground>
        <OutlineButton type="button" block variant="primary" icon={IconPen} style={{ marginBottom: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" block variant="primary" icon={IconPen} iconPosition="right">
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="With Icons loading" withBackground>
        <OutlineButton type="button" isLoading variant="primary" icon={IconPen} size="sm" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" isLoading variant="primary" icon={IconPen}>
          Push Me
        </OutlineButton>
      </ComponentBlock>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);
