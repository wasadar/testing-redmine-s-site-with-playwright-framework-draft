// @ts-check
import { test, expect } from '@playwright/test';
import { IssuesPage } from '../pages/IssuesPage';

test('Issues page: check change of issues per page number.', async ({ page }) => {
  const issuesPage = new IssuesPage(page);
  await issuesPage.gotoIssuesPage();

  await issuesPage.page.waitForSelector(issuesPage.table);
  let rows = await issuesPage.page.$$eval(issuesPage.table + ' tbody tr', rows => rows.length);
  expect(rows).toBe(25);

  await issuesPage.page.waitForSelector(issuesPage.numPerPage);
  let buttons = await issuesPage.page.$$(issuesPage.numPerPage)
  await buttons[0].click();

  let frame = await issuesPage.page.frameLocator(issuesPage.firstFrame).frameLocator(issuesPage.secondFrame).locator(issuesPage.closeAdd);

  if (await frame.isVisible()) {
    await frame.click();
  }

  await issuesPage.page.waitForSelector(issuesPage.table);
  rows = await issuesPage.page.$$eval(issuesPage.table + ' tbody tr', rows => rows.length);
  expect(rows).toBe(50);

  await issuesPage.page.waitForSelector(issuesPage.numPerPage);
  buttons = await issuesPage.page.$$(issuesPage.numPerPage)
  await buttons[1].click();

  frame = await issuesPage.page.frameLocator(issuesPage.firstFrame).frameLocator(issuesPage.secondFrame).locator(issuesPage.closeAdd);

  if (await frame.isVisible()) {
    await frame.click();
  }

  await issuesPage.page.waitForSelector(issuesPage.table);
  rows = await issuesPage.page.$$eval(issuesPage.table + ' tbody tr', rows => rows.length);
  expect(rows).toBe(100);

  await issuesPage.page.waitForSelector(issuesPage.numPerPage);
  buttons = await issuesPage.page.$$(issuesPage.numPerPage)
  await buttons[0].click();

  frame = await issuesPage.page.frameLocator(issuesPage.firstFrame).frameLocator(issuesPage.secondFrame).locator(issuesPage.closeAdd);

  if (await frame.isVisible()) {
    await frame.click();
  }

  await issuesPage.page.waitForSelector(issuesPage.table);
  rows = await issuesPage.page.$$eval(issuesPage.table + ' tbody tr', rows => rows.length);
  expect(rows).toBe(25);
});

test('Issues page: check filter of the issues by status.', async ({ page }) => {
  const issuesPage = new IssuesPage(page);
  await issuesPage.gotoIssuesPage();

  await issuesPage.page.waitForSelector(issuesPage.status);
  await issuesPage.page.locator(issuesPage.status).selectOption({ value: '=' });

  await issuesPage.page.waitForSelector(issuesPage.values);
  await issuesPage.page.locator(issuesPage.values).selectOption({ value: '5' });

  await issuesPage.page.waitForSelector(issuesPage.apply);
  await issuesPage.page.locator(issuesPage.apply).click();

  let frame = await issuesPage.page.frameLocator(issuesPage.firstFrame).frameLocator(issuesPage.secondFrame).locator(issuesPage.closeAdd);

  if (await frame.isVisible()) {
    await frame.click();
  }

  await issuesPage.page.waitForSelector(issuesPage.table);
  let rows = await issuesPage.page.$$(issuesPage.table + ' tbody tr');
  let check = true;

  for (let row of rows) {
    let fourthColumnValue = await row.$eval('td:nth-child(4)', cell => cell.textContent);

    if (fourthColumnValue !== 'Closed') {
      check = false;
    }
  }

  await issuesPage.page.waitForSelector(issuesPage.clear);
  await issuesPage.page.locator(issuesPage.clear).click();

  frame = await issuesPage.page.frameLocator(issuesPage.firstFrame).frameLocator(issuesPage.secondFrame).locator(issuesPage.closeAdd);

  if (await frame.isVisible()) {
    await frame.click();
  }

  expect(check).toBe(true);
});

test('Issues page: check change of shown columns on the page.', async ({ page }) => {
  const issuesPage = new IssuesPage(page);
  await issuesPage.gotoIssuesPage();

  await issuesPage.page.waitForSelector(issuesPage.options);
  await issuesPage.page.locator(issuesPage.options).click();

  await issuesPage.page.waitForSelector(issuesPage.available);
  await issuesPage.page.locator(issuesPage.available).selectOption({ value: 'project' });

  await issuesPage.page.waitForSelector(issuesPage.moveRight);
  await issuesPage.page.locator(issuesPage.moveRight).click();

  await issuesPage.page.waitForSelector(issuesPage.selected);
  await issuesPage.page.locator(issuesPage.selected).selectOption({ value: 'tracker' });

  await issuesPage.page.waitForSelector(issuesPage.moveLeft);
  await issuesPage.page.locator(issuesPage.moveLeft).click();

  await issuesPage.page.waitForSelector(issuesPage.apply);
  await issuesPage.page.locator(issuesPage.apply).click();

  await issuesPage.page.waitForSelector(issuesPage.table);
  let cells = await issuesPage.page.$$(issuesPage.table + ' th');
  let project = false;
  let tracker = false;
  let classList;

  for (let cell of cells) {
    classList = await cell.evaluate(element => Array.from(element.classList));
    if (classList.includes('project')){
      project = true;
      break;
    }
    if (classList.includes('tracker')){
      tracker = true;
    }
  }

  await issuesPage.page.waitForSelector(issuesPage.clear);
  await issuesPage.page.locator(issuesPage.clear).click();

  expect(project).toBe(true);
  expect(tracker).toBe(false);
});