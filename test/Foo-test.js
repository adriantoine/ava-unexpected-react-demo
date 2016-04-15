import unexpected from 'unexpected';
import unexpectedReact from 'unexpected-react';

import TestUtils from 'react-addons-test-utils';
import test from 'ava';
import React from 'react';
import Foo from '../src/Foo';

const expect = unexpected.clone().use(unexpectedReact);

test("sometimes it succeeds", () => {
	var renderer = TestUtils.createRenderer();
	renderer.render(<Foo/>);
	expect(renderer, 'to have rendered', <div className="foo"/>);
});

test("sometimes it fails", () => {
	var component = TestUtils.renderIntoDocument(<Foo>Bar</Foo>);
	expect(component, 'to have rendered', <div className="foo2">Bar2</div>);
});
