const HelloPage = require('../pages/hello.page');

describe('Hello page', () => {
    it('should toggle', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('hello')
        await expect(HelloPage.helloTitle).toBeExisting()
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })

    it('should not toggle', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('asdasdsadas')
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })

    it('should load data', async () => {
        await HelloPage.loadData()
    })
})
