import '@testing-library/jest-dom/extend-expect'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-17-updated'

//Enzyme.configure({adapter: new EnzymeAdapter()});
configure({ adapter: new Adapter() })
