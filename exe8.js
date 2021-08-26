


function microondas(comida, tempo){
    let mensagem = "";

    switch (comida) {

        case 'Pipoca':
            if (tempo >= 10 && tempo < 20) {
                mensagem = 'Prato pronto, bom apetite!!!';
            } else if (tempo >= 20 && tempo < 30) {
                mensagem = 'Sua comida queimou';
            } else if (tempo >= 30) {
                mensagem = 'Kabummm';
            } else {
                mensagem = 'Tempo insuficiente';

            }
            break;


            case 'Macarrao':
            if (tempo >= 8 && tempo < 16) {
                mensagem = 'Prato pronto, bom apetite!!!';
            } else if (tempo >= 8 && tempo < 16) {
                mensagem = 'Sua comida queimou';
            } else if (tempo >= 16) {
                mensagem = 'Kabummm';
            } else {
                mensagem = 'Tempo insuficiente';

            }
            break;

            case 'Carne':
                if (tempo >= 15 && tempo < 30) {
                    mensagem = 'Prato pronto, bom apetite!!!';
                } else if (tempo >= 15 && tempo < 30) {
                    mensagem = 'Sua comida queimou';
                } else if (tempo >= 30) {
                    mensagem = 'Kabummm';
                } else {
                    mensagem = 'Tempo insuficiente';
    
                }
                break;

                case 'Feijão':
                if (tempo >= 12 && tempo < 24) {
                    mensagem = 'Prato pronto, bom apetite!!!';
                } else if (tempo >= 12 && tempo < 24) {
                    mensagem = 'Sua comida queimou';
                } else if (tempo >= 24) {
                    mensagem = 'Kabummm';
                } else {
                    mensagem = 'Tempo insuficiente';
    
                }
                break;
                case 'Brigadeiro':
                    if (tempo >= 8 && tempo < 16) {
                        mensagem = 'Prato pronto, bom apetite!!!';
                    } else if (tempo >= 8 && tempo < 16) {
                        mensagem = 'Sua comida queimou';
                    } else if (tempo >= 16) {
                        mensagem = 'Kabummm';
                    } else {
                        mensagem = 'Tempo insuficiente';
        
                    }
                    break;

        
            
            default: 
                mensagem = 'Prato Inexistente';
    }
        return mensagem;
}

console.log (microondas("Pipoca",10));
