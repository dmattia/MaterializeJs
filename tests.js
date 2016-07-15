function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}
var MaterialElementTest = (function () {
    function MaterialElementTest() {
        ////////////////////
        // Test creation and adding classes
        ////////////////////
        this.materialElement = new MaterialElement("div");
        this.materialElement.addClass("class1");
        this.materialElement.addClass("class2");
        assert(this.materialElement.getElement().className === "class1 class2", "Classes did not add correctly");
        assert(this.materialElement.getType() === "div", "Failure to get type");
        ////////////////////
        // Test Wrapping
        ////////////////////
        this.materialElement.wrapWithTagName("a");
        assert(this.materialElement.getType() === "a", "Failed to wrap element");
        ////////////////////
        // Test SetElement
        ////////////////////
        this.materialElement.setElement(document.createElement("h3"));
        assert(this.materialElement.getType() === "h3", "Failed to set element");
        ////////////////////
        // Test GetChildren
        ////////////////////
        this.materialElement.setElement(document.createElement("div"));
        var h1 = new MaterialElement("h1");
        var h2 = new MaterialElement("h2");
        var h3 = new MaterialElement("h3");
        h2.appendToElement(this.materialElement.getElement());
        h3.appendToElement(this.materialElement.getElement());
        h1.prependToElement(this.materialElement.getElement());
        this.materialElement.addToBody();
        var children = this.materialElement.getChildren();
        assert(children[0].getElement() === h1.getElement(), "GetChildren failed");
        assert(children[1].getElement() === h2.getElement(), "GetChildren failed");
        assert(children[2].getElement() === h3.getElement(), "GetChildren failed");
    }
    return MaterialElementTest;
}());
var MaterialTextFieldTest = (function () {
    function MaterialTextFieldTest() {
        ////////////////////
        // Create text
        ////////////////////
        this.materialTextField = new MaterialTextField("h3", "Hello, World!");
        ////////////////////
        // Test Color
        ////////////////////
        this.materialTextField.setColor("blue");
        this.materialTextField.addToBody();
        assert(this.materialTextField.getElement().className === "blue-text", "Color class not set correctly");
        assert($(this.materialTextField.getElement()).css("color") === "rgb(33, 150, 243)", "Color was not set correctly. Color is: " + $(this.materialTextField.getElement()).css("color"));
        ////////////////////
        // Test Update Text
        ////////////////////
        this.materialTextField.updateText("Hello again");
        assert(this.materialTextField.getElement().innerHTML = "Hello again", "Update Text failed");
        ////////////////////
        // Test delete from DOM
        ////////////////////
        this.materialTextField.delete();
        assert($(this.materialTextField.getElement()).css("color") === "", "Failure to delete from DOM");
        ////////////////////
        // Test Reapply To DOM
        ////////////////////
        this.materialTextField.addToBody();
    }
    return MaterialTextFieldTest;
}());
var materialElementTest = new MaterialElementTest();
var materialTextFieldTest = new MaterialTextFieldTest();
//# sourceMappingURL=tests.js.map