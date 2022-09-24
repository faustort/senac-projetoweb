<?php
include "header.php";
?>
<div class="container">
    <div class="row">
        <div class="col-12">
            <h1>Fale conosco</h1>
            <div class="row">
                <div class="col-md-4 bg-diferenciado">
                    Endereço: Rua dos Bobos, 0
                </div>
                <div class="col-md-8">
                    <form action="" class="formulario" id="formCadastro">
                        <div>
                            <label for="nome">Digite seu nome</label>
                            <input type="text" name="nome" id="nome">
                        </div>
                        <div>
                            <label for="email">Digite seu e-mail</label>
                            <input type="email" name="email" id="email" required>
                        </div>
                        <div>
                            <label for="campoCpf">Digite seu CPF</label>
                            <input type="number" name="cpf" id="campoCpf" required>
                        </div>
                        <input type="submit" value="Enviar">
                    </form>

                </div>
            </div>


        </div>
    </div>
</div>
<?php
include "footer.php";
?>