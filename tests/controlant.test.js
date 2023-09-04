const fetchData = require('./utils.js');

/*
  Test that all operations have correct logic and return the correct
  answers according to the API specifications as well as one extra
  case for each endpoint for good measures
*/
describe('e2e tests',() => {
  test('Simplify', async () => {
    const expected = {
      operation:  'simplify',
      expression: '2^2+2(2)',
      result:     '8'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Simplify custom', async () => {
    const expected = {
      operation:  'simplify',
      expression: 'x (x - 2)',
      result:     'x^2 - 2 x'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Factor', async () => {
    const expected = {
      operation:  'factor',
      expression: 'x^2 + 2 x',
      result:     'x (x + 2)'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Factor custom', async () => {
    const expected = {
      operation:  'factor', 
      expression: 'x^2 + 1',
      result:     'x^2 + 1'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Derive', async () => {
    const expected = {
      operation:  'derive',
      expression: 'x^2+2x',
      result:     '2 x + 2'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Derive custom', async () => {
    const expected = {
      operation:  'derive',
      expression: 'log(x)',
      result:     '1 / x'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Integrate', async () => {
    const expected = {
      operation:  'integrate',
      expression: 'x^2+2x',
      result:     '1/3 x^3 + x^2 + c'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Integrate custom', async () => {
    const expected = {
      operation:  'integrate',
      expression: 'x^(-1)',
      result:     'log(x)'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Find 0\'s', async () => {
    const expected = {
      operation:  'zeroes',
      expression: 'x^2 + 2x',
      result: [-2, 0]
    }; 
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Find 0\'s custom', async () => {
    const expected = {
      operation:  'zeroes',
      expression: 'x^2 + 1',
      result: [null,null]
    }; 
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Find Tangent', async () => {
    const expected = {
      operation:  'tangent',
      expression: '2|x^3',
      result: '12 x + -16'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Find Tangent custom', async() => {
    const expected = {
      operation:  'tangent',
      expression: '0|1(over)x',
      result: 'Stop: divide by zero x + NaN'
    };
    const data = await fetchData(expected);
    //Over operation replaced by '/'
    expected.expression = '0|1/x';
    expect(data).toEqual(expected); 
  });
  test('Area Under Curve', async () => {
    const expected = {
      operation:  'area',
      expression: '2:4|x^3',
      result: '60'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Area Under Curve custom', async () => {
    const expected = {
      operation:  'area',
      expression: '0:2pi|sin(x)',
      result: '0'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Cosine', async () => {
    const expected = {
      operation:  'cos',
      expression: 'pi',
      result: '-1'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Cosine custom', async () => {
    const expected = {
      operation:  'cos',
      expression: 'pi 2^(-1)',
      result: '0'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Sine', async () => {
    const expected = {
      operation:  'sin',
      expression: 'pi',
      result: '0'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Sine custom', async () => {
    const expected = {
      operation:  'sin',
      expression: 'pi 2^(-1)',
      result: '1'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Tangent', async () => {
    const expected = {
      operation:  'tan',
      expression: '0',
      result: '0'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Tangent custom', async () => {
    const expected = {
      operation:  'tan',
      expression: 'pi 4^(-1)',
      result: '1'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Inverse Cosine', async () => {
    const expected = {
      operation:  'arccos',
      expression: '1',
      result: '0'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Inverse Cosine', async () => {
    const expected = {
      operation:  'arccos',
      expression: '0',
      result: '1/2 pi'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Inverse Sine', async () => {
    const expected = {
      operation:  'arcsin',
      expression: '0',
      result: '0'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Inverse Sine', async () => {
    const expected = {
      operation:  'arcsin',
      expression: '1',
      result: '1/2 pi'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Inverse Tangent', async () => {
    const expected = {
      operation:  'arctan',
      expression: '0',
      result: '0'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Inverse Tangent custom', async () => {
    const expected = {
      operation:  'arctan',
      expression: '1',
      result: '1/4 pi'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Absolute Value', async() => {
    const expected = {
      operation:  'abs',
      expression: '-1',
      result: '1'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Absolute Value custom', async() => {
    const expected = {
      operation:  'abs',
      expression: '0',
      result: '0'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Logarithm', async () => {
    const expected = {
      operation:  'log',
      expression: '2|8',
      result: '3'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
  test('Logarithm custom', async () => {
    const expected = {
      operation:  'log',
      expression: '10|10',
      result: '1'
    };
    const data = await fetchData(expected);
    expect(data).toEqual(expected);
  });
});

/*
  Make sure that endpoints fail gracefully when input 
  is incorrect
*/
describe('Failing gracefully', ()=>{
  test('Simplify, Division by 0', async ()=>{
    const expected = {
      operation: 'simplify',
      expression: '1(over)0',
      result: "Stop: divide by zero"
    }
    const data = await fetchData(expected);
    expected.expression = '1/0'; 
    expect(data).toEqual(expected)
  });

  //Eftirfarandi eru hugmyndir að testum, ekki tilbúin
  test('Tangent, Division by 0', () => {});
  test('Logaritm, Out of domain', () => {});
  test('Arccos, Out of domain', () => {});
  test('Arcsin, Out of domain', () => {});
  test('Arctan, Out of domain', () => {});
  test('Made up expression, Expect 404', () => {});
});

/* 
  Test api http response statuses.
*/
describe('Https statuses', ()=>{
  /* 
     Hér væri hægt að nota external tools í stað þess 
     að prufa öll status code sem er tímafrekt.
  */   
});