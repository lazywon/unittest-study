class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      //return fetch('http://example.com/login/id+password') //
      //  .then((response) => response.json());

      // UserClinet를 따로 만들어주는 이유는, UserService에서 네트워크에 항상
      // 의존하고 있기 때문에 단위테스트하기 어렵다.
      // 그래서 네트워크 하는 기능을 UserClient 별도의 클래스로 분리해 놓으면,
      // UserClient는 mock을 사용하던지, stub을 사용해서 네트워크를 사용하지 않고 단위테스트가 가능하다.

      return this.userClient
        .login(id, password) //
        .then((data) => (this.isLogedIn = true));
    }
  }
}

module.exports = UserService;
