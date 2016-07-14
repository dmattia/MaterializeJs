function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}
var MaterialElementTest = (function () {
    function MaterialElementTest() {
        this.materialElement = new MaterialElement("div");
        this.materialElement.addClass("class1");
        this.materialElement.addClass("class2");
        assert(this.materialElement.getElement().className === "class1 class2", "Classes did not add correctly");
    }
    return MaterialElementTest;
}());
var MaterialTextFieldTest = (function () {
    function MaterialTextFieldTest() {
        this.materialTextField = new MaterialTextField("h3", "Hello, World!");
        this.materialTextField.setColor("blue");
        this.materialTextField.addToBody();
        assert(this.materialTextField.getElement().className === "blue-text", "Color class not set correctly");
        assert($(this.materialTextField.getElement()).css("color") === "rgb(33, 150, 243)", "Color was not set correctly. Color is: " + $(this.materialTextField.getElement()).css("color"));
    }
    return MaterialTextFieldTest;
}());
var materialElementTest = new MaterialElementTest();
var materialTextFieldTest = new MaterialTextFieldTest();
//# sourceMappingURL=tests.js.map