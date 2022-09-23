// criamos um função para iniciar o nosso modulo
const initForm = (qualForm) => {
    // busctou o elemento do DOM
    const formRequerido = document.getElementById(qualForm);
    // buscamos os filhos dele (inputs)
    const inputs = formRequerido.querySelectorAll("input");

    // perguntamos se existe algum resultado
    if (inputs.lenght > 0) {
        // se existir, percorremos o array de inputs
        inputs.forEach((input) => {
            // exibir no console o valor de cada input
            console.log(input.value)
        });
    }
}
export default initForm;