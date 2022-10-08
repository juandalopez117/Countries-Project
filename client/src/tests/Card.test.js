import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Card from '../components/Card/Card.jsx'
import '@testing-library/jest-dom/extend-expect'
const data = require('./data.json')

configure({ adapter: new Adapter() });

describe('<Card />', ()=> {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Card />)
  })

  it('Card montada', () => {
    const A = wrapper.find('.Card')
    console.log(A)
  })
  

})