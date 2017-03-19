import test from 'ava';
import m from './';

test('it left aligns columns', t => {
	t.is(m([
		['the', 'quick', 'brown', 'fox'],
		['something', 'something', 'runs', 'here'],
		['i', 'forgot', 'it', 'oops']
	]), [
		'the          quick        brown    fox',
		'something    something    runs     here',
		'i            forgot       it       oops'
	].join('\n'));
});

test('it left aligns uneven columns', t => {
	t.is(m([
		['the', 'quick', 'brown', 'fox'],
		['something', 'something', 'runs', 'here', 'everyday'],
		['i', 'forgot', 'it', 'oops']
	]), [
		'the          quick        brown    fox',
		'something    something    runs     here    everyday',
		'i            forgot       it       oops'
	].join('\n'));
});

test('it fails if not 2d array', t => {
	const error = t.throws(() => {
		m(['the', 'quick', 'brown', 'fox']);
	}, TypeError);

	t.is(error.message, 'Expecting a 2D array of ASCII text');
});
