export class User{
    filter(arg0: (a: any) => boolean): User {
      throw new Error('Method not implemented.');
    }
    find(arg0: (a: any) => boolean) {
      throw new Error('Method not implemented.');
    }
    fullname!:string;
    email!:string;
    password:any;
    role:string="user";
}