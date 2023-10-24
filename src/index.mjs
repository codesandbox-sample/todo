import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // 完了・削除ボタン追加
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了リストに追加する
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    console.log(text);
    // // 押された削除ボタンの親タグ(div)を未完了リストから削除
    // const delteTarget = completeButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(delteTarget);
    deleteFromIncompleteList(completeButton.parentNode);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // // 押された削除ボタンの親タグ(div)を未完了リストから削除
    // const delteTarget = deleteButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(delteTarget);
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
