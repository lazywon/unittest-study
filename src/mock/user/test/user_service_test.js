const UserService = require("../user_service.js");
const UserClient = require("../ser_client.js");

// Stub이 아닌 Mock을 사용해야 함
// login()을 호출했는지 안했는지는 stub만 갖고 테스트하기엔 무리가 있다.
// 특정한 상황에 호출하는지 안하는지 행동에 대해 검사할 때는 mock을 사용한다.

describe("UserService", () => {
  const login = jest.fn(async () => "success");
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new StubUserClient());
    login.mockClear();
    UserClient.mockClear();
  });

  it("calls login() on UserClient when tries to login", async () => {
    await userService.login("won", "1234");
    expect(login.mock.calls.length).toBe(1);
  });

  it("should not call login() on UserClient again if already logged in", async () => {
    await userService.login("won", "1234");
    await userService.login("won", "1234");

    expect(login.mock.calls.length).toBe(1);
  });
});
