class LoginPage{

    constructor(page) {

        this.SignIn = page.locator("[value='Login']");
         this.Username = page.locator("#userEmail");
         this.Password = page.locator("#userPassword")

    }

    async    LogFunc(email,Password) {
   await this.Username.fill(email);
   await this.Password.fill(Password);
   await this.SignIn.click();
}
}

module.exports = {LoginPage};