// criamos um função para iniciar o nosso modulo
const initForm = (qualForm) => {
    // buscamos os filhos dele (inputs)
    const inputs = qualForm.querySelectorAll("input");
    // perguntamos se existe algum resultado
    if (inputs) {
        // se existir, percorremos o array de inputs
        inputs.forEach((input) => {
            // exibir no console o valor de cada input
            console.log(input.value);
        });
    } else {
        // se não existir, exibimos uma mensagem no console
        console.log("Não existe inputs neste formulário");
    }
}

const init = (qualForm) => {
    // recebe o elemento DOM de acordo com a String do ID
    const formRequerido = document.getElementById(qualForm);
    // busca o botão de submit para este formulário
    const submit = formRequerido.querySelector("input[type=submit]");
    // adiciona um evento de click no botão
    submit.addEventListener("click", (evento) => {
        // previne que o elemento, no caso o input submit, faça o que ele faz por padrão
        evento.preventDefault();
        // chama a função que criamos
        initForm(formRequerido);
    })
}

export default init;