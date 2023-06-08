import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { useArgs } from "@storybook/preview-api";

import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  decorators: [
    (storyFn) => (
      <div style={{ width: "1200px", height: "800px" }}>{storyFn()}</div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
    width: undefined,
    height: undefined,
  },
  render: (props) => {
    const [, updateArgs] = useArgs();

    return (
      <>
        <Modal
          {...props}
          isOpen={props.isOpen}
          setOpen={() => updateArgs({ isOpen: !props.isOpen })}
        >
          {({ Close }) => (
            <div style={{ padding: 15 }}>
              <div>Hello world!</div>
              <Close asChild>
                <button>Close modal</button>
              </Close>
            </div>
          )}
        </Modal>
        <button onClick={() => updateArgs({ isOpen: true })}>Open modal</button>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentElement);
    const button = canvas.getByText("Open modal");
    await userEvent.click(button);
    await expect(
      canvas.findByText("Hello world!")
    ).resolves.toBeInTheDocument();
  },
};

export const FixedWidth: Story = {
  args: {
    ...Default.args,
    width: 1024,
  },
  render: (props) => {
    const [, updateArgs] = useArgs();

    return (
      <>
        <Modal
          {...props}
          isOpen={props.isOpen}
          setOpen={() => updateArgs({ isOpen: !props.isOpen })}
        >
          {({ Close }) => (
            <div style={{ padding: 15 }}>
              <div>Hello world!</div>
              <Close asChild>
                <button>Close modal</button>
              </Close>
            </div>
          )}
        </Modal>
        <button onClick={() => updateArgs({ isOpen: true })}>Open modal</button>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentElement);
    const button = canvas.getByText("Open modal");
    await userEvent.click(button);
    await expect(
      canvas.findByText("Hello world!")
    ).resolves.toBeInTheDocument();
  },
};

export const FixedHeight: Story = {
  args: {
    ...Default.args,
    height: 430,
  },
  render: (props) => {
    const [, updateArgs] = useArgs();

    return (
      <>
        <Modal
          {...props}
          isOpen={props.isOpen}
          setOpen={() => updateArgs({ isOpen: !props.isOpen })}
        >
          {({ Close }) => (
            <div style={{ padding: 15 }}>
              <div>Hello world!</div>
              <Close asChild>
                <button>Close modal</button>
              </Close>
            </div>
          )}
        </Modal>
        <button onClick={() => updateArgs({ isOpen: true })}>Open modal</button>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentElement);
    const button = canvas.getByText("Open modal");
    await userEvent.click(button);
    await expect(
      canvas.findByText("Hello world!")
    ).resolves.toBeInTheDocument();
  },
};

export const FixedWidthAndHeight: Story = {
  args: {
    ...Default.args,
    width: 1024,
    height: 430,
  },
  render: (props) => {
    const [, updateArgs] = useArgs();

    return (
      <>
        <Modal
          {...props}
          isOpen={props.isOpen}
          setOpen={() => updateArgs({ isOpen: !props.isOpen })}
        >
          {({ Close }) => (
            <div style={{ padding: 15 }}>
              <div>Hello world!</div>
              <Close asChild>
                <button>Close modal</button>
              </Close>
            </div>
          )}
        </Modal>
        <button onClick={() => updateArgs({ isOpen: true })}>Open modal</button>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentElement);
    const button = canvas.getByText("Open modal");
    await userEvent.click(button);
    await expect(
      canvas.findByText("Hello world!")
    ).resolves.toBeInTheDocument();
  },
};