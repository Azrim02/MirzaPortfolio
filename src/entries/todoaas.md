---
date: 20-02-26
project: Web Development
tags:
  - Express
  - REST
  - TDD
---
# Todo-as-a-service

Most of the part you see on a website are the 'front-end' components. I'm sure you've heard of the 'back-end' part that works in the shadow... but what does it actually do? Aside from that, how do we test that our back-end performs as intended?

I'll be finding out with this new project of mine namely "todo-as-a-service" to receive API requests from users through RESTful API calls. Also in this project, I'll be practicing the test-driven development (TDD) development philosophy, with is a part of the agile development best practices. We'll talk about persistent storage using SQLite later. But for now, we'll get through with the good 'ol memory session storage.

## RESTful APIs

A RESTful API is a web service that follows the principles of Representational State Transfer (REST), using standard HTTP methods like GET, POST, PUT, and DELETE to interact with resources across the internet. It treats data as resources identified by URLs and is stateless, meaning each request contains all the information needed to process it.

Lets talk with examples. In a real-world survey-gathering app, the frontend of an application might send a GET request to `/api/surveys/123` to retrieve details for the survey with id 123, and a POST request to `/api/surveys` to create a new survey when a new entry is filled in. Each request includes all necessary data (like authentication tokens and order details), and the server responds with structured data such as JSON.

![What is REST API?](https://miro.medium.com/v2/resize:fit:720/format:webp/1*m3jEkdc9SKTK6vNPhRHCqg.jpeg)

Another straightforward example; whenever you visit [www.google.com/](https://google.com/) on your browser, you've simply evoked a GET method on `/` on the URL `google.com`. Google's server responded with the resource it made available on the route `/`, which is the html file of the google search bar page. The file is then rendered on your browser, and in the end, displays you with the google search bar page we all know and love.

To know more about REST APIs, you can read these wonderful articles by [GeeksforGeeks](https://www.geeksforgeeks.org/node-js/rest-api-introduction/) or [restfulapi.net](https://restfulapi.net/).

## Test-Driven Development (TDD)

Test-Driven Development (TDD) is a way of writing code where we start by creating tests for out features before we actually build them. It might sound a bit backwards, but it helps us clarify what we want our code to do, and ensures that every feature is covered by tests from the very beginning.

The process goes like this; first, we write a test describing what we want our code to achieve. At this point, the test will fail, since the feature doesn’t exist yet. Next, we write just enough code to make the test pass. Once it does, we can safely refactor our code, knowing our tests will catch any mistakes. This cycle—write a test, make it pass, refactor—is repeated for each new feature or bug fix.

For example, if you’re building a todo API, you might write a test to check that a new todo item can be created. The test would send a POST request to your API and expect a certain response. Only after the test is written do you implement the code to handle that request.

TDD helps us catch bugs early, makes our code much more reliable, and it in return gives us confidence to make changes without breaking things. Plus, it encourages us to think about how our code will be used, which often leads to better design.

## Putting it all together

When I started building this [Todo-as-a-Service project](https://github.com/Azrim02/Todo-as-a-Service), I wanted to create a RESTful API for managing tasks, but I also wanted to ensure my code was reliable and maintainable. That’s why I adopted Test-Driven Development (TDD) from the very beginning. TDD means writing tests before implementing the actual features, so every endpoint and function is backed by tests that define how it should behave.

I set up a Node.js project using Express for the web framework, and organized the codebase for clarity: routes are separated into their own folder, with files like `tasks.js` and `users.js` handling different endpoints. The main entry point, [app.js](vscode-file://vscode-app/opt/visual-studio-code/resources/app/out/vs/code/electron-browser/workbench/workbench.html), ties everything together, and the [test](vscode-file://vscode-app/opt/visual-studio-code/resources/app/out/vs/code/electron-browser/workbench/workbench.html) folder contains `tasks.test.js` to tests for each route and its features.

For example, before coding the GET `/tasks` endpoint, I wrote a test that expects the server to return a JSON array of tasks. Only after the test was in place did I implement the route itself. The same process applied to POST, PUT, and DELETE requests—each one had a test describing the expected behavior, and I wrote the code to make those tests pass. This approach ensures that every change is validated, and bugs are caught early.

![[Pasted image 20260226122145.png]]

Through this project, I learned how TDD makes APIs more robust and easier to refactor. By following REST principles and writing tests first, the API remains predictable, reliable, and simple to use. Organizing the codebase and tests clearly also helps maintainability as the app grows. Overall, building this project with TDD gave me practical experience in RESTful design, Express routing, and test-driven development for a real-world Node.js backend.