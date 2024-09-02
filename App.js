const heading = React.createElement("div", { class: "parent" }, [
  React.createElement("div", { class: "child" }, [
    React.createElement("h1", { class: "grandchild" }, "hello world"),
    React.createElement("h2", { class: "grandchild" }, "hello world")
  ]),
  React.createElement("div", { class: "child" }, [
    React.createElement("h1", { class: "grandchild" }, "hello world"),
    React.createElement("h2", { class: "grandchild" }, "hello world")
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
