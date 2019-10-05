import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      {
        body: 'Fetched Comment #1'
      },
      {
        body: 'Fetched Comment #2'
      }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('should fetch a list of comments and display them', () => {
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );

  wrapper.find('.fetch-comments').simulate('click');
  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find('li').length).toEqual(2);
  });
  wrapper.unmount();
});
