import * as enzyme from 'enzyme';
import * as React from 'react';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
    const hello = enzyme.shallow(<Hello name='brad' />);
    expect(hello.find(".greeting").text()).toEqual('Hello brad!');
})

it('renders the correct text with enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Hello name='brad' enthusiasmLevel={1} />);
    expect(hello.find(".greeting").text()).toEqual('Hello brad!');
})

it('renders the correct text with enthusiasm of 5', () => {
    const hello = enzyme.shallow(<Hello name='brad' enthusiasmLevel={5} />);
    expect(hello.find(".greeting").text()).toEqual('Hello brad!!!!!');
})

it('throws when the enthusiasm level is xero', () => {
    expect(() => {
        enzyme.shallow(<Hello name='brad' enthusiasmLevel={0} />);
    }).toThrow()
})

it('throws when the enthusiasm level is negative', () => {
    expect(() => {
        enzyme.shallow(<Hello name='brad' enthusiasmLevel={-10} />);
    }).toThrow()
})