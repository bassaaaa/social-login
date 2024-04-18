import { getAuth, onAuthStateChanged } from "firebase/auth";
import logout from "./logout";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

initializeApp(firebaseConfig);

// ログアウトボタン
const logoutButton = document.getElementById("logout");
if (logoutButton) {
  logoutButton.addEventListener("click", logout);
}

// ページ読み込み時
document.addEventListener("DOMContentLoaded", async () => {
  const auth = getAuth();

  // ログイン状態が変化したときの処理
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "login.html";
      return;
    }

    if (!user) {
      return;
    }

    if (!user.emailVerified) {
      window.location.href = "register-email.html";
      return;
    }

    const { email, displayName } = user;

    // トップメッセージの表示
    const topMessage = document.getElementById("top-message");
    if (topMessage) {
      // Fix: Check if topMessage exists
      topMessage.textContent = `${displayName}さんでログイン中です`;
    }

    // メールアドレスの表示
    const currentEmail = document.getElementById("currentEmail");
    if (currentEmail) {
      // Fix: Check if currentEmail exists
      currentEmail.textContent = email;
    }
  });
});
