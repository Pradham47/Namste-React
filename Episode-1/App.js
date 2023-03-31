const parent = React.createElement("div", { id: "heading" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Iam a h1 tag"),
    React.createElement("h2", {}, "iam a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Iam a h1 tag"),
    React.createElement("h2", {}, "iam a h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
