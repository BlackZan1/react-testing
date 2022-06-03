const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HelloPage extends Page {
    get toggleBtn () {
        return $('#toggle')
    }

    get searchInput () {
        return $('#search')
    }

    get helloTitle () {
        return $('#hello')
    }

    get loadingTitle() {
        return $('#users-loading')
    }

    get usersList() {
        return $('#users-list')
    }

    async toggleTitleWithInput (text) {
        await this.searchInput.setValue(text)
        await this.toggleBtn.click()
    }

    async loadData() {
        try {
            await this.open()
            await this.loadingTitle.waitForDisplayed({timeout: 2000})
            await this.usersList.waitForDisplayed({timeout: 2000})
        } catch (e) {
            throw new Error('Не удалось загрузить пользователей')
        }
    }

    open () {
        return super.open('/hello')
    }
}

module.exports = new HelloPage()