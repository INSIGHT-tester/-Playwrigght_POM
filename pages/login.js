exports.LoginPage = class LoginPage{

    constructor(page){

        this.page = page
        this.username_testbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: ' Login' })

    }
    async gotLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username, password){
        await this.username_testbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }
    
    //enterusername(){

    //}
    //enterpassword(){

    //}
    //clickOnLogin(){

    //}

}