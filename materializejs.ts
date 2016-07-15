class MaterialElement {
	protected element;

	constructor(tagName: string = "temp") {
		this.element = document.createElement(tagName);
	}
	addClass(newClass: string) {
		if (this.element.className == "") {
			this.element.className = newClass;
		} else {
			this.element.className += " " + newClass;
		}
	}
	wrapWithTagName(tagName: string) {
		var parentElement = document.createElement(tagName);
		parentElement.appendChild(this.element);
		this.setElement(parentElement);
	}
	setElement(newElement) {
		this.element = newElement;
	}
	getElement() {
		return this.element;
	}
	getType(): string {
		return this.element.tagName.toLowerCase();
	}
	getChildren(): MaterialElement[] {
		var children = this.element.childNodes;
		var materialChildren = [];
		children.forEach(function(child) {
			var materialChild = new MaterialElement();
			materialChild.setElement(child);
			materialChildren.push(materialChild);
		}, this);
		return materialChildren;
	}
	empty() {
		this.getElement().innerHTML = "";
	}
	appendToElement(parentElement) {
		parentElement.appendChild(this.getElement());	
	}
	prependToElement(parentElement) {
		parentElement.insertBefore(this.getElement(), parentElement.childNodes[0]);
	}
	addToBody() {
		this.prependToElement(document.getElementsByTagName("body")[0]);
	}
	delete() {
		this.element.parentElement.removeChild(this.element);
	}
}

class MaterialTextField extends MaterialElement {
	private text: string;

	constructor(tagName: string, text: string) {
		super(tagName);
		this.text = text;
		this.element.innerHTML = this.text;
	}
	
	updateText(newText: string) {
		this.text = newText;
		this.element.innerHTML = this.text;
	}
	setColor(color: string) {
		this.addClass(color + "-text");
	}
}
