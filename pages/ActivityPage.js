exports.ActivityPage =
class ActivityPage {
    constructor(page) {
        this.page = page;
        this.issues = '#show_issues';
        this.changes = '#show_changesets';
        this.news = '#show_news';
        this.wiki = '#show_wiki_edits';
        this.messages = '#show_messages';
        this.apply = 'input[type="submit"].button-small';
    }

    async gotoActivityPage() {
        await this.page.goto("https://www.redmine.org/projects/redmine/activity");
    }
}