const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit )

function handleSubmit(event){
    event.preventDefault();

    const sexo=getInputNumberValue('sexo');
    const idade=getInputNumberValue('idade');
    const altura=getInputNumberValue('altura');
    const peso=getInputNumberValue('peso');
    const ativ_level=getInputNumberValue('ativ_level');

    const tmb = Math.round(
        sexo === 'Feminino'

        ? (655 + (9.6 * peso)+ (1.8 * altura)- (4.7 * idade))
        : (66 + (13.7 * peso)+ (5 * altura)- (6.8 * idade))
    );

    const maintenance = Math.round(tmb * Number(ativ_level));
    const perderPeso = maintenance - 450;
    const ganharPeso = maintenance + 450;

    
    const result = document.getElementById('result');

    result.innerHTML = `<h2>Aqui esta seu resultado</h2>
    <div id="result-content">
    <ul>
        <li>
            Seu metabolismo basal é de <strong>${tmb} calorias</strong> 
        </li>
        <li>
            Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>
        </li>
        <li>
            Para perder peso você precisa consumir em média <strong>${perderPeso} calorias</strong>
        </li>
        <li>
            Para ganhar peso você precisa consumir em média <strong>${ganharPeso} calorias</strong>
        </li>
    </ul>
    </div>
    `;
}

function getSelectedValue(id){
    const select = document.getElementById(id);
     return select.options[select.selectdIndex].value;
}

function getInputNumberValue(id){
    return Number(document.getElementById(id).value)

}