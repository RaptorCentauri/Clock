import {Numeral} from '../src/app/components';
import * as React from 'react';
import { render, cleanup} from "@testing-library/react";
import 'jest-dom/extend-expect'

afterEach(cleanup)

describe('The numeral', () => {
    test('should be on the DOM',()=>{
      const number: number = 12;
      const {container} = render(<Numeral number={number}/> );
      const clockNumberElement = container.querySelector('clock-number');

      //@ts-ignore
      expect(clockNumberElement).toBeInTheDocument();
    });

    test('should contain the number 12',()=>{
      const number: number = 12;
      const {container} = render(<Numeral number={number}/> );
      const clockNumberElement = container.querySelector('clock-number');
      const subNumElement = clockNumberElement.querySelector('sub-num');

      //@ts-ignore
      expect(subNumElement).toHaveTextContent(12);
    });


    test('should have a class of numeral',()=>{
      const number: number = 12;
      const { container} = render(<Numeral number={number}/> );
      const clockNumberElement = container.querySelector('clock-number');

      //@ts-ignore
      expect(clockNumberElement).toHaveClass('numeral');
    });


    test('clock-number should have 1 child',()=>{
      const number: number = 12;
      const { container} = render(<Numeral number={number}/> );
      const clockNumberElement = container.querySelector('clock-number');

      //@ts-ignore
      expect(clockNumberElement.childElementCount).toBe(1);
    });

    test('sub-num should have a text of 12',()=>{
      const number: number = 12;
      const { container} = render(<Numeral number={number}/> );
      const clockNumberElement = container.querySelector('clock-number');
      const subNumElement = clockNumberElement.querySelector('sub-num')
      //@ts-ignore
      expect(subNumElement).toHaveTextContent(12);
    });

    test('sub-num should NOT have a text of 9',()=>{
      const number = 12;
      const { container} = render(<Numeral number={number}/> );
      const clockNumberElement = container.querySelector('clock-number');
      const subNumElement = clockNumberElement.querySelector('sub-num')
      //@ts-ignore
      expect(subNumElement).not.toHaveTextContent(9);
    });

})
