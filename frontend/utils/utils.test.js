import { generateBreadcrumbPathObject, formatDate } from './utils';

describe('utils func are working properly', () => {
  it('formatDate should format the date with the correct output', () => {
    expect(formatDate('2020-01-03T00:00:00.000Z')).toBe('Fri, 03 Jan 2020 00:00:00 GMT')
  })


  it('generateBreadcrumbPathObject should return one item if route is home page', () => {
    expect(generateBreadcrumbPathObject('/', 'home page')).toStrictEqual([{path: '/', name: 'home page'}])
  })

  it('generateBreadcrumbPathObject should return array of object paths', () => {
    expect(generateBreadcrumbPathObject('/first/second/third', 'home page'))
      .toStrictEqual([
        {
          path: '/',
          name: 'home page'
        },
        {
          path: '/first/',
          name: 'first'
        },
        {
          path: '/first/second/',
          name: 'second'
        },
        {
          path: '/first/second/third/',
          name: 'third'
        }
      ])
  })
})