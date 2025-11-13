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
import { LoginForm as component, LoginFormProps } from '@/demo-dropin/components/LoginForm';

/**
 * Use LoginForms to [replace this text with components purpose].
 */
const meta: Meta<LoginFormProps> = {
  title: 'Components/LoginForm',
  component,
  argTypes: {
    children: {
      description: 'Add text to the LoginForm.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'LoginForm defaultValue for children.' },
      },
    },
    onClick: {
      description: 'Add a click handler.',
      table: {
        type: { summary: 'function' },
      },
      action: 'onClick',
    },
  },
};

export default meta;

type Story = StoryObj<LoginFormProps>;

/**
 * <LoginForm>👋 Hello from your new LoginForm story!</LoginForm>
 */
export const LoginForm: Story = {
  args: {
    children: "👋 Hello from your new LoginForm story!",
  },
};
