exports.IssuesPage =
class IssuesPage {
    constructor(page) {
        this.page = page;
        this.table = 'table.list.issues';
        this.options = '#options > legend.icon';
        this.apply = 'p.buttons > a.icon.icon-checked';
        this.clear = 'p.buttons > a.icon.icon-reload';
        this.numPerPage = '.per-page > a';
        this.firstFrame = '#aswift_2';
        this.secondFrame = '#ad_iframe';
        this.closeAdd = '#dismiss-button';
        this.status = '#operators_status_id';
        this.values = '#values_status_id_1';
        this.available = '#available_c';
        this.selected = '#selected_c';
        this.moveRight = '.move-right';
        this.moveLeft = '.move-left';
    }

    async gotoIssuesPage() {
        await this.page.goto("https://www.redmine.org/projects/redmine/issues");
    }
}