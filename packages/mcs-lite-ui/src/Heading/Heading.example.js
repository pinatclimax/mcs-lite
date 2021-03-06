import React from 'react';
import R from 'ramda';
import { storiesOf } from '@storybook/react';
import { theme } from 'mcs-lite-theme';
import Heading from '.';

const remToPx = rem =>
  `${parseFloat(theme.base.fontSize, 10) * parseFloat(rem, 10)}px`;

storiesOf('Heading', module)
  .addWithInfo(
    'API',
    'Default h1 & color: currentColor',
    () => <Heading>Level 1</Heading>,
    { inline: true },
  )
  .addWithInfo(
    'With level props',
    '使用不同等級的 Level。',
    () =>
      <div>
        {R.range(1, 7).map(key =>
          <Heading key={key} level={key}>
            h{key} - Level {key} &nbsp;
            ({theme.fontSize[`h${key}`]} = {remToPx(theme.fontSize[`h${key}`])})
          </Heading>,
        )}
      </div>,
    { inline: true, propTables: false },
  )
  .addWithInfo(
    'With color props',
    '使用不同等級的 Color。',
    () =>
      <div>
        {Object.keys(theme.color).map(key =>
          <Heading key={key} level={2} color={key}>Level 2 {key}</Heading>,
        )}
      </div>,
    { inline: true, propTables: false },
  );
