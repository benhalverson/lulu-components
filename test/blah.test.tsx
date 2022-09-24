import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LuluButton } from '../src/components/button';
describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LuluButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
