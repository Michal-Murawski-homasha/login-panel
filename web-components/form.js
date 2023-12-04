class TemplateForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<form action="#">
                            <input id="text" type="text" name="login" placeholder="Login" required>
                            <input id="password" type="password" name="password" placeholder="Password" required>
                            <button type="submit">login</button>
                        </form>`;
    }
}

customElements.define('template-form', TemplateForm);