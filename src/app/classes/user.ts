export class User{
    id: number  = 0;
    username: number = 0;

    first_name: string = '';
    last_name: string = '';

    email: string = '';
    isAuthenticated = false;
    jwt: string | null = '';

    checkAuthentication(): boolean {
        this.jwt = localStorage.getItem('userJWT');
        if (this.jwt === null || this.jwt.length === 0) {
            this.isAuthenticated = false;
            return false;
        } else {
            this.isAuthenticated = true;
            return true;
        }
    }

    initializeUserData(data: any): void {
        this.id = data.id;
        this.username = data.username;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.email = data.email;
    }
}