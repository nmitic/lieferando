![Takeaway Logo](https://ydnewsletter.s3.amazonaws.com/logo/takeawaycom.png)

## Changes made to the original setup
- added CORS header via `cors` npm package
- added eslint and jest for frontend project
- removed `npm run test` from the make file for backend because there is no test written for the backend part

## About the dir structure
My idea was not to have as readable dir structure as possible but rather how can I use dir structure to make reasoning about the code better and make future refactoring easier to make.

For example, just by opening `components/shared/Layout` and by looking and the dir structure you would with ease make sense of how the Layout component is structured.

You would see the following:
- Breadcrumbs
- Header

From this only, without even opening the Layout component you will be able to know how the component is structured. And you will be able to see all of its dependencies and everything which is needed for that component to run in the production and CD pipeline (styles, tracking, tests etc)

Another benefit which is even more important is to be able to isolate your code on as many levels as possible. This allows for better scalability as refactoring will be easier to do since you can move things along the dir structure without breaking the code.

One more benefit is reduced "mental gymnastics". For example if you have a bug which is happening on the `orders` page you will instantly know which dir to open and which components might caused the issue. And once you are inside the givin dir, you will not have to think about the what ever is happening outside.

## AdaptersPages and AdaptersUiLib, what are those ?
  Next js does not support the structure explained above, since everything under /pages will be mapped to a route. So it was a must for me to outsource pages into somewhere else. However, along side with the benefits I mentioned above there are some more:
  - Pages are (more or less) agnostic about the routing mechanism
  - Pages can be outsourced and can be deployed independently and worked on independently as well

  AdaptersPages can be a nice way of preparing your code base for the future micro frontend architecture. This might be viewed as premature optimizing. But I am a firm believer that you can not optimize your dir structure too much.

  AdaptersUiLib are one of the examples where this kind of a approach can save a lot of work from refactoring. The idea is the same. Do not tightly couple your modules!
  If at some point project find a need for another UI lib it can be easily changed at one place, at the re-export of the AdaptersUiLib. 
  
  Provided that the new UI lib is modeled around the same API, which now days is almost always the case as UI libs are becoming more and more standardized.

  ## Few notes about the test
  I decided to focus on those component which have user interaction involved and which actually have some rendering logic to be tested.

  The why I liked to structure my test is in way that it can serve as a documentation to how specific feature should work.

  This is the reason why I do no care about the state of the component at the specific time or why I do not care if certain callback is being called with certain arguments.

  I only care that for the giving output and user interactions proper dom elements are being rendered. Which is exactly how the user will use your application.

  ## Few notes about the actually implementation logic and what I would do differently if in production
Firstly, there will very probably be an API endpoint which will allow me to fetch the single order details. But not to fetch the whole set. The whole set can be used to cache and later retrieved on the UI when needed however, the nature of `orders` are that they change a loot. And I would say that it really make sense to have a specific endpoint designed for this.

This will allow me to make a request for that endpoint when users press enter on orders page, but not to fetch the whole data set in first mount and then search that data set on the client.

There is no loading and error states for the request! This is a must and should be implemented.

Error handling of the request should be done in a way that accommodates for the scenarios such as cancel requests, slow connection or error status codes from the response. What I did is naively just logging the error message to the console.


## Notes about the styling
As I decided to make my life a bit easier I installed material UI. I ended up using their css in js solution. I personally do not like it as it does not feel like you are writing styles.
However, it does a great job when it comes to css scoping and that is why I stick with it and not trying to setup things such as styledComponents or make use of css/scss with BEM.

There is a workaround I had to implement in order to get material ui to work on the server. You can see it under _app.js abd _document.js.

## Notes about the forms
You can only see that I used Formik on contact page but in the real scenario I would be using it for every input such as searchOrder or global search.

The reason for reaching out to Formik is firstly because it does not put the form state in global store but manage the state locally, the same way i would be doing if I was to build this by myself.

Having said that, I probably would not build the form myself as they are mini applications on its own.

Because of the way modern FE works they are always breaking the binding between the user input and what is being rendered inside the fields. This totally make sense for them to do because state var should be used to describe to application sate at any given time. But because of that a lot if simplicity of using the form natively is lost. This together with accessibility and validation is the reason why I would decide to use some third party lib for managing and building my forms.
