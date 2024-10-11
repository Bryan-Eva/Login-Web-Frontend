import React, { useState } from "react";
import "../App.css";

const LoginForm: React.FC = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  // 發送 POST 請求到後端API，帶上帳號和密碼作為請求體
  const haddleSubmit = async (e: React.FormEvent) => {
    e.preventDefault;
    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST", // 設定請求方法為 POST
      headers: {
        "Content-Type": "application/login", // 指定傳輸的數據類型為 JSON
      },
      body: JSON.stringify({
        account, // 傳送帳號
        password, // 傳送密碼
      }),
    });

    // 如果後端返回狀態碼 200 OK，表示登錄成功
    if (response.ok) {
      // 處理成功邏輯，比如顯示成功訊息、保存 Token 或跳轉頁面
      console.log("Login successful");
    } else {
      // 如果登錄失敗，顯示錯誤訊息
      console.log("Login failed");
    }
  };

  return (
    <div>
      <form action="" onSubmit={haddleSubmit}>
        <label>Account</label>
        <br />
        <input
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          required
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
