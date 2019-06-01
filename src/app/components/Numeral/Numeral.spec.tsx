import Numeral from './Numeral';
import * as React from 'react';
import { render, fireEvent, getByTestId, cleanup, queryByTestId} from "@testing-library/react";
import 'jest-dom/extend-expect'

afterEach(cleanup)

describe('The numeral', () => {

    test('should be on the DOM',()=>{
      const number = 12;
      const { container} = render(<Numeral number={number}/> );
      const clockNumberElement = container.querySelector('clock-number');
      const subNumElement = clockNumberElement.querySelector('sub-num');

      //@ts-ignore
      expect(clockNumberElement).toBeInTheDocument();
    });

    test('should contain the number 12',()=>{
      const number = 12;
      const { container} = render(<Numeral number={number}/> );
      const clockNumberElement = container.querySelector('clock-number');
      const subNumElement = clockNumberElement.querySelector('sub-num');

      // console.log(clockNumberElement.className)
      //@ts-ignore
      expect(subNumElement).toHaveTextContent(12);
    });


    test('should have a class of numeral',()=>{
      const number = 12;
      const { container} = render(<Numeral number={number}/> );
      const clockNumberElement = container.querySelector('clock-number');
      // const subNumElement = clockNumberElement.querySelector('sub-num');

      //@ts-ignore
      expect(clockNumberElement).toHaveClass('numeral');
    });


        test('clock-number should have 1 child',()=>{
          const number = 12;
          const { container} = render(<Numeral number={number}/> );
          const clockNumberElement = container.querySelector('clock-number');
          // const subNumElement = clockNumberElement.querySelector('sub-num');

          // console.log(clockNumberElement)
          //@ts-ignore
          expect(clockNumberElement.childElementCount).toBe(1);
        });
})
