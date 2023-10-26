// @ts-check
import { test, expect } from '@playwright/test';
import { RoadmapPage } from '../pages/RoadmapPage';

test('Roadmap page: check filter of the issues by type.', async ({ page }) => {
    const roadmapPage = new RoadmapPage(page);
    await roadmapPage.gotoRoadmapPage();

    await roadmapPage.page.waitForSelector(roadmapPage.checks);
    let checks = await roadmapPage.page.$$(roadmapPage.checks);

    for (let check of checks) {
        let value = await check.getAttribute('value');
        if (value === '1' || value === '2') {
          await check.uncheck();
        }
    }

    await roadmapPage.page.waitForSelector(roadmapPage.apply);
    await roadmapPage.page.locator(roadmapPage.apply).click();

    await roadmapPage.page.waitForSelector(roadmapPage.issues);
    let issues = await roadmapPage.page.$$(roadmapPage.issues);
    let check = true;
    let linkText;

    for (let issue of issues) {
        linkText = await issue.textContent();
        if (!linkText.includes('Patch')){
            check = false;
            break;
        }
    }

    await roadmapPage.page.waitForSelector(roadmapPage.checks);
    checks = await roadmapPage.page.$$(roadmapPage.checks);

    for (let check of checks) {
        let value = await check.getAttribute('value');
        if (value === '1' || value === '2') {
          await check.check();
        }
    }

    await roadmapPage.page.waitForSelector(roadmapPage.apply);
    await roadmapPage.page.locator(roadmapPage.apply).click();

    expect(check).toBe(true);
});