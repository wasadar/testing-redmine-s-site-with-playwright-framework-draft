exports.RoadmapPage =
class RoadmapPage {
    constructor(page) {
        this.page = page;
        this.checks = 'input[name="tracker_ids[]"]';
        this.apply = 'input[type="submit"].button-small';
        this.issues = 'a.issue';
        this.icons = 'dt';
    }

    async gotoRoadmapPage() {
        await this.page.goto("https://www.redmine.org/projects/redmine/roadmap");
    }
}