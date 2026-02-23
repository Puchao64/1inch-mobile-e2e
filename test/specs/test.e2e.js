const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {

    // 1. Valid login + valid password
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')

        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!')
        )
    })


    // 2. Invalid login + valid password
    it('should not login with invalid username', async () => {
        await LoginPage.open()

        await LoginPage.login('wronguser', 'SuperSecretPassword!')

        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your username is invalid')
        )
    })


    // 3. Valid login + invalid password
    it('should not login with invalid password', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'WrongPassword')

        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your password is invalid')
        )
    })


    // 4. Empty fields
    it('should not login with empty credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('', '')

        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your username is invalid')
        )
    })

})
