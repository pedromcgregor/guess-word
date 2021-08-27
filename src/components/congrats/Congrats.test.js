import Enzyme, { shallow } from "enzyme";
//import { findByTestAttr } from "../../test/testUtils";
import Congrats from './Congrats';


const defaultProps = { success: false};

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setupProps} />)
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}
 

test('1 - render without error', () => {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);

});

test('2 - renders no text when `success` prop is false', () =>{
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('3 - renders non-empty congrat message when success is true', () =>{
    const wrapper = setup({success: true});
    const message = findByTestAttr(wrapper, 'congrat-message');
    expect(message.text().length).not.toBe(0);
    // console.log('------------ ', message.text())
});