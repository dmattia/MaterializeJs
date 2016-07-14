function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}

class MaterialElementTest {
	private materialElement: MaterialElement;

	constructor() {
		this.materialElement = new MaterialElement("div");
		this.materialElement.addClass("class1");
		this.materialElement.addClass("class2");

		assert(this.materialElement.getElement().className === "class1 class2", "Classes did not add correctly");
	}
}

class MaterialTextFieldTest {
	private materialTextField: MaterialTextField;

	constructor() {
		this.materialTextField = new MaterialTextField("h3", "Hello, World!");
		this.materialTextField.setColor("blue");

		assert(this.materialTextField.getElement().className === "blue-text", "Color class not set correctly");
		assert($(this.materialTextField.getElement()).css("color") === "rgb(33, 150, 243)", 
			"Color was not set correctly. Color is: " + $(this.materialTextField.getElement()).css("color"));
	}
}

var materialElementTest: MaterialElementTest = new MaterialElementTest()
var materialTextFieldTest: MaterialTextFieldTest = new MaterialTextFieldTest()
