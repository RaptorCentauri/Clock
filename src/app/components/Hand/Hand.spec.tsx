import Hand from './Hand';
import * as React from 'react';
// import {mount} from 'enzyme';
// import * as renderer from 'react-test-renderer';
import { render, fireEvent, getByTestId, cleanup, queryByTestId} from "@testing-library/react";
// import {toBeInTheDocument, toHaveClass, toContainElement} from 'jest-dom'

import 'jest-dom/extend-expect'

afterEach(cleanup)


describe('The hour hand', () => {
    test('should have an id of hour-hand',()=>{
      const handType = 'Hour';
      const { container} = render(<Hand handType={handType}/> );
      const handRingElement = container.querySelector('hand-ring');
      const clockHandElement = handRingElement.querySelector('clock-hand');

      //@ts-ignore
      expect(clockHandElement).toHaveAttribute('id', 'hour-hand');
    });

    test('should be visible',()=>{
      const handType = 'Hour';
      const { container} = render(<Hand handType={handType}/> );
      const handRingElement = container.querySelector('hand-ring');
      const clockHandElement = handRingElement.querySelector('clock-hand');

      //@ts-ignore
      expect(clockHandElement).toBeVisible;
    });


    test('should have a hand-ring element as a parent',()=>{
      const handType = 'Hour';
      const { container} = render(<Hand handType={handType}/> );
      const handRingElement = container.querySelector('hand-ring');

      //@ts-ignore
      expect(handRingElement).toBeInTheDocument();
    });

    test('the hand-ring should have 1 child element',()=>{
      const handType = 'Hour';
      const { container} = render(<Hand handType={handType}/> );
      const handRingElement = container.querySelector('hand-ring');

      //@ts-ignore
      expect(handRingElement.childElementCount).toBe(1);
    });

})

describe('The minute hand', () => {
    test('should have an id of minute-hand',()=>{
      const handType = 'Minute';
      const { container} = render(<Hand handType={handType}/> );
      const handRingElement = container.querySelector('hand-ring');
      const clockHandElement = handRingElement.querySelector('clock-hand');

      //@ts-ignore
      expect(clockHandElement).toHaveAttribute('id', 'minute-hand');
    });

    test('should be visible',()=>{
      const handType = 'Minute';
      const { container} = render(<Hand handType={handType}/> );
      const handRingElement = container.querySelector('hand-ring');
      const clockHandElement = handRingElement.querySelector('clock-hand');

      //@ts-ignore
      expect(clockHandElement).toBeVisible;
    });


    test('should have a hand-ring element as a parent',()=>{
      const handType = 'Minute';
      const { container} = render(<Hand handType={handType}/> );
      const handRingElement = container.querySelector('hand-ring');

      //@ts-ignore
      expect(handRingElement).toBeInTheDocument();
    });

    test('the hand-ring should have 1 child element',()=>{
      const handType = 'Minute';
      const { container} = render(<Hand handType={handType}/> );
      const handRingElement = container.querySelector('hand-ring');

      //@ts-ignore
      expect(handRingElement.childElementCount).toBe(1);
    });

})


describe('The second hand', () => {
    test('should have an id of second-hand',()=>{
      const handType = 'Second';
      const { container} = render(<Hand handType={handType}/> );
      const handRingElement = container.querySelector('hand-ring');
      const clockHandElement = handRingElement.querySelector('clock-hand');

      //@ts-ignore
      expect(clockHandElement).toHaveAttribute('id', 'second-hand');
    });

    test('should be visible',()=>{
      const handType = 'Second';
      const { container} = render(<Hand handType={handType}/> );
      const handRingElement = container.querySelector('hand-ring');
      const clockHandElement = handRingElement.querySelector('clock-hand');

      //@ts-ignore
      expect(clockHandElement).toBeVisible;
    });


    test('should have a hand-ring element as a parent',()=>{
      const handType = 'Second';
      const { container} = render(<Hand handType={handType}/> );
      const handRingElement = container.querySelector('hand-ring');

      //@ts-ignore
      expect(handRingElement).toBeInTheDocument();
    });

    test('the hand-ring should have 1 child element',()=>{
      const handType = 'Second';
      const { container} = render(<Hand handType={handType}/> );
      const handRingElement = container.querySelector('hand-ring');

      //@ts-ignore
      expect(handRingElement.childElementCount).toBe(1);
    });

})
