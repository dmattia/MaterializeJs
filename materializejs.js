var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MaterialElement = (function () {
    function MaterialElement(tagName) {
        this.element = document.createElement(tagName);
    }
    MaterialElement.prototype.addClass = function (newClass) {
        if (this.element.className == "") {
            this.element.className = newClass;
        }
        else {
            this.element.className += " " + newClass;
        }
    };
    MaterialElement.prototype.wrapWithTagName = function (tagName) {
        var parentElement = document.createElement(tagName);
        parentElement.appendChild(this.element);
        this.setElement(parentElement);
    };
    MaterialElement.prototype.setElement = function (newElement) {
        this.element = newElement;
    };
    MaterialElement.prototype.getElement = function () {
        return this.element;
    };
    MaterialElement.prototype.empty = function () {
        this.getElement().innerHTML = "";
    };
    MaterialElement.prototype.appendToElement = function (parentElement) {
        parentElement.appendChild(this.getElement());
    };
    MaterialElement.prototype.prependToElement = function (parentElement) {
        parentElement.insertBefore(this.getElement(), parentElement.childNodes[0]);
    };
    MaterialElement.prototype.addToBody = function () {
        this.prependToElement(document.getElementsByTagName("body")[0]);
    };
    return MaterialElement;
}());
var MaterialTextField = (function (_super) {
    __extends(MaterialTextField, _super);
    function MaterialTextField(tagName, text) {
        _super.call(this, tagName);
        this.text = text;
        this.getElement().innerHTML = this.text;
    }
    MaterialTextField.prototype.updateText = function (newText) {
        this.text = newText;
        this.element.innerHTML = this.text;
    };
    MaterialTextField.prototype.setColor = function (color) {
        this.addClass(color + "-text");
    };
    return MaterialTextField;
}(MaterialElement));
//# sourceMappingURL=materializejs.js.map