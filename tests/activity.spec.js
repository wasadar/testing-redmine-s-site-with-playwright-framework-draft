// @ts-check
import { test, expect } from '@playwright/test';
import { ActivityPage } from '../pages/ActivityPage';

test('Activity page: check filter of the activities by type.', async ({ page }) => {
    const activityPage = new ActivityPage(page);
    await activityPage.gotoActivityPage();

    await activityPage.page.waitForSelector(activityPage.issues);
    await activityPage.page.locator(activityPage.issues).uncheck();

    await activityPage.page.waitForSelector(activityPage.changes);
    await activityPage.page.locator(activityPage.changes).uncheck();

    await activityPage.page.waitForSelector(activityPage.news);
    await activityPage.page.locator(activityPage.news).uncheck();

    await activityPage.page.waitForSelector(activityPage.wiki);
    await activityPage.page.locator(activityPage.wiki).check();

    await activityPage.page.waitForSelector(activityPage.messages);
    await activityPage.page.locator(activityPage.messages).check();

    await activityPage.page.waitForSelector(activityPage.apply);
    await activityPage.page.locator(activityPage.apply).click();

    await activityPage.page.waitForSelector('dt');

    const activities = await page.$$eval('dt', (dts) => {
        return dts.map((dt) => {
            console.log(dt.getAttribute('class'));
            return dt.getAttribute('class');
        });
    });

    let check = true;

    const allowedActivities = [
        'reply icon icon-reply  ',
        'reply icon icon-reply grouped ',
        'message icon icon-message  ',
        'message icon icon-message grouped ',
        'wiki-page icon icon-wiki-page  ',
        'wiki-page icon icon-wiki-page grouped '
    ];

    for (let activity of activities) {
        if (!activity) {
            check = false;
        } else if (activity && !allowedActivities.includes(activity)){
            console.log(activity);
            check = false;
        }
    }

    await activityPage.page.waitForSelector(activityPage.issues);
    await activityPage.page.locator(activityPage.issues).check();

    await activityPage.page.waitForSelector(activityPage.changes);
    await activityPage.page.locator(activityPage.changes).check();

    await activityPage.page.waitForSelector(activityPage.news);
    await activityPage.page.locator(activityPage.news).check();

    await activityPage.page.waitForSelector(activityPage.wiki);
    await activityPage.page.locator(activityPage.wiki).uncheck();

    await activityPage.page.waitForSelector(activityPage.messages);
    await activityPage.page.locator(activityPage.messages).uncheck();

    await activityPage.page.waitForSelector(activityPage.apply);
    await activityPage.page.locator(activityPage.apply).click();

    expect(check).toBe(true);
});