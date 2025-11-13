/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
// https://storybook.js.org/docs/7.0/preact/writing-stories/introduction
import type { Meta, StoryObj } from '@storybook/preact';
import { LoginContainer as component, LoginContainerProps } from '@/demo-dropin/containers/LoginContainer';

const meta: Meta<LoginContainerProps> = {
  title: 'Containers/LoginContainer',
  component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // centered | fullscreen
  },
};

export default meta;

type Story = StoryObj<LoginContainerProps>;

/**
 * ```ts
 * import { LoginContainer } from '@/demo-dropin/containers/LoginContainer';
 * ```
 */

export const LoginContainer: Story = {
  args: {
    children: "👋 Howdy, I'm Howdy!",
  },
};
