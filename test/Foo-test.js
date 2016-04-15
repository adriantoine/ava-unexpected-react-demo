import React from 'react';
import TestUtils from 'react-addons-test-utils';
import test from 'ava';
import unexpected from 'unexpected';
import unexpectedReact from 'unexpected-react';
import Foo from '../src/Foo';

const expect = unexpected.clone().use(unexpectedReact);

test("sometimes it succeeds", () => {
	var renderer = TestUtils.createRenderer();
	renderer.render(<Foo/>);
	expect(renderer, 'to have rendered', <div className="foo"/>);
});

test("sometimes it fails", () => {
	var renderer = TestUtils.createRenderer();
	renderer.render(<Foo>Bar</Foo>);
	expect(renderer, 'to have rendered', <div className="foo2">Bar2</div>);
});
