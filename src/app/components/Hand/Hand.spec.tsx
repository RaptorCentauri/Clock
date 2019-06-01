import Hand from './Hand';
import * as React from 'react';
import {mount} from 'enzyme';
import * as renderer from 'react-test-renderer';
import { render, fireEvent, getByTestId, cleanup, queryByTestId} from "@testing-library/react";
// import {toBeInTheDocument, toHaveClass, toContainElement} from 'jest-dom'

import 'jest-dom/extend-expect'

afterEach(cleanup)

describe('Hand Component', () => {
  // test('should render when given a handType of Second',()=>{
  //     const handType = 'Second';
  //     const rendered = renderer.create(<Hand handType={handType}/> );
  //    expect(rendered.toJSON()).toMatchSnapshot();
  // });
  //
  // test('should render when given a handType of Minute',()=>{
  //     const handType = 'Minute';
  //     const rendered = renderer.create(<Hand handType={handType}/> );
  //    expect(rendered.toJSON()).toMatchSnapshot();
  // });
  //
  test('should render when given a handType of Hour',()=>{
      const handType = 'Hour';
      const rendered = renderer.create(<Hand handType={handType}/> );
     expect(rendered.toJSON()).toMatchSnapshot();
  });

  test('the hand-ring element to be in the DOM',()=>{
    const handType = 'Hour';
    const { container, asFragment} = render(<Hand handType={handType}/> );
    const handRingElement = container.querySelector('hand-ring');

    //@ts-ignore
    expect(handRingElement).toBeInTheDocument();
  });

  test('the clock-hand element to be in the DOM',()=>{
    const handType = 'Hour';
    const { container} = render(<Hand handType={handType}/> );
    const clockHandElement = container.querySelector('hand-ring').querySelector('clock-hand');
    //
    // //@ts-ignore
    expect(clockHandElement).toBeInTheDocument();

  });



  test('to have an inline transform style',()=>{
    const handType = 'Hour';

    const { container, asFragment} = render(<Hand handType={handType}/> );
    const handRingElement = container.querySelector('hand-ring');

    //@ts-ignore
    expect(handRingElement).toBeInTheDocument();

  // console.log(handRingStyle)

  // console.log(handRingStyle.hasOwnProperty('transform'))

  // console.log(container.firstChild.style)


  // console.log(getByTestId(container), )


    // expect(angleValue.textContent).toBe("0");
//@ts-ignore
  // expect(container).toContainElement('hand-ring');

      // const handType = 'Hour';
      // const rendered = renderer.create(<Hand handType={handType}/> );
     // expect(rendered.toJSON()).toMatchSnapshot();
  });



  // test('should render when given a handType of Hour',()=>{
  //   const handType = 'Hour';
  //   const {container} = render(<Hand handType={handType}/>);
  //
  // });










});
