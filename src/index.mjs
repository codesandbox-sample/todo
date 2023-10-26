import "./styles.css";

// 「追加」ボタン
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);

};

// リストから指定の要素を削除
const deleteFromList = (list, target) => {
  document.getElementById(list).removeChild(target);
};

// 未完了リストに要素を追加
const createIncompleteList = (text) => {
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン追加
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // // 押された削除ボタンの親タグ(div)を未完了リストから削除
    // const delteTarget = completeButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(delteTarget);
    deleteFromList("incomplete-list", completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // Todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタン追加
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された削除ボタンの親タグ(div)を未完了リストから削除
      // const delteTarget = completeButton.parentNode;
      // document.getElementById("incomplete-list").removeChild(delteTarget);
      deleteFromList("complete-list", backButton.parentNode);

      // Todo内容テキストを取得
      const text = addTarget.firstElementChild.innerText;

      createIncompleteList(text);
    });
    // 完了リストの削除ボタン追加
    const deleteButton1 = document.createElement("button");
    deleteButton1.innerText = "削除";
    deleteButton1.addEventListener("click", () => {
      deleteFromList("complete-list", deleteButton1.parentNode);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    addTarget.appendChild(deleteButton1);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタン追加
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // // 押された削除ボタンの親タグ(div)を未完了リストから削除
    // const delteTarget = deleteButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(delteTarget);
    deleteFromList("incomplete-list", deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
