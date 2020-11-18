import {Clock} from '../src/app/components';
import * as React from 'react';
import { render, cleanup} from "@testing-library/react";
import 'jest-dom/extend-expect'

afterEach(cleanup)

describe('The Clock', () => {
    test('should be on the DOM',()=>{
      const {container} = render(<Clock /> );
      const clockFaceElement = container.querySelector('clock-face');

      expect(clockFaceElement).toBeInTheDocument();
    });

    test('clock-face should have 15 children',()=>{
      const { container} = render(<Clock /> );
      const clockFaceElement = container.querySelector('clock-face');

      //@ts-ignore
      expect(clockFaceElement.childElementCount).toBe(15);
    });




})
