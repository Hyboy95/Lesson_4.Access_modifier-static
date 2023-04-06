
enum int{
   ADMIN = 1,
   USER
}
class User {
    protected name: string;
    protected email: string;
    role: int;

    constructor(name: string, email: string, role: int) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo() {
        console.log(`Thông tin người dùng:`);
        console.log(`- Tên: ${this.name}`);
        console.log(`- Email: ${this.email}`);
    }
    isAdmin() {
        if (this.role === 1) {
            console.log(`- Vai trò: admin`);
        } else {
            console.log(`-Vai trò: người bình thường`);
        }
    }
    setName(name: string) {
        this.name = name;
    }
    setEmail(email: string) {
        this.email = email;
    }
    setRole(role: int) {
        this.role = role;
    }
}

let user_1 = new User('Toan','toan@gmail.com', 1);
let user_2 = new User('Hieu', 'hieutruong@gmail.com', 2);
user_1.getInfo();
user_1.isAdmin();
user_2.getInfo();
user_2.isAdmin();
