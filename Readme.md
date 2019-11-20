### Run test on your local

- Run following command in terminal: `npm install`
- Sample test cases under folder /cypress/integration/ folder.
- Run following command : `npx cypress open`
- Click the test that you want to run from Cypress.io UI. After you click the test, a browser window will be opened automatically in order to run test.
- You can add your tests under **/cypress/integration/** folder.

### Run test with docker

Run following command from terminal :

`docker run -it -v $PWD:/e2e -w /e2e cypress/included:3.2.0`