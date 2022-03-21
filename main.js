const display = document.getElementById('display');

const buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                    display.innerText = '';
                    break;
                    case 'DEL':
                            display.innerText = display.innerText.slice(0, -1);
                        break;

                        case '=':
                            try{
                            display.innerText = eval(display.innerText);

                            }catch{
                                display.innerText = 'Error!';
                            }
                            break;
            default:
                display.innerText += e.target.innerText;
            
        }
    })
})